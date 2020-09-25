import React, {useState} from 'react'
import {Logo} from "../../components/logo"
import {
    ContainerLogin,
    ContainerLoginAndSignup,
} from './styled'
import {useForm} from '../../customHooks/useForm'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {Login} from './Login'
import {Cadaster} from './Cadaster'

export const LoginPage = ()=>{
    const {form, onChange} = useForm({
        login:"", 
        password: ""
    })
    const [error, setError] = useState("")

    const history = useHistory()

    const handlerInputChange = event =>{
        const {name, value} = event.target
        onChange(name, value)
    }

    const login = () =>{
        axios.post("http://localhost:3001/user/login", {
            login: form.login,
            password: form.password
        }).then((response)=>{
            localStorage.setItem('token',response.data.token)
            if(response.data.token){
                history.push("/home")
            }
        }).catch((error)=>{
            if(error.response.data.message === "TypeError: Cannot read property 'id' of undefined"){
                setError("Wrong credentials")
            }else{setError(error.response.data.message)}
        })
    }

    return(
        <ContainerLogin>
            <Logo/>
            <ContainerLoginAndSignup>
            <Login onchange={handlerInputChange} form={form} login={login} error={error}/>
            <Cadaster/>
            </ContainerLoginAndSignup>
        </ContainerLogin>
    )
}