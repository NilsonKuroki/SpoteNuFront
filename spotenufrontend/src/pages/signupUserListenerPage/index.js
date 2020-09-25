import React, {useState}from "react"
import {FormSignupListenerAndAdmin} from "../../components/formSignupListenerAndAdmin"
import {ContainerSignupPage} from "./styled"
import {Logo} from '../../components/logo/index'
import {useForm} from '../../customHooks/useForm'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

export const SignupUserListenerPage = () =>{
    const history = useHistory()
    const [errorDb, setErrorDb] = useState()

    const {form, onChange} = useForm({
        name: "",
        nickname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handlerInputChange = event =>{
        const {name, value} = event.target
        onChange(name, value)
    }

    const cadasterUser = ()=>{
        const body = {
            name: form.name,
            nickname: form.nickname,
            email: form.email,
            password: form.password
        }
        axios.post("http://localhost:3001/user/signup-not-paying-listener", body)
        .then((response)=>{
            localStorage.setItem('token', response.data.token)
            history.push("/home")
        }).catch((error)=>{
            setErrorDb(error.response.data.message)
        })
}
    return(
        <ContainerSignupPage>
            <Logo/>
            <FormSignupListenerAndAdmin titulo="Cadastre-se!"onchange={handlerInputChange} form={form} cadaster={cadasterUser} minimo="6" error={errorDb}/>
        </ContainerSignupPage>
    )
}
