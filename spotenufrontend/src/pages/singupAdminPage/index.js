import React, { useEffect } from "react"
import {useHistory} from 'react-router-dom'
import {FormSignupListenerAndAdmin} from "../../components/formSignupListenerAndAdmin"
import {ContainerSignupAdmin} from "./styled"
import {Logo} from '../../components/logo/index'
import {useForm} from '../../customHooks/useForm'
import {ButtonBack} from '../../components/buttonBack'
import axios from "axios"

export const SignupAdminPage = ()=>{
    const history = useHistory()
    const token = localStorage.getItem('token')

    useEffect(()=>{
        if(token=== null){
            history.push("/login")
        }
    },[token, history])

    const {form, onChange} = useForm({
        name: "",
        nickname: "",
        email: "",
        password: ""
    })

    const handlerInputChange = event =>{
        const {name, value} = event.target
        onChange(name, value)
    }

    const cadasterAdmin = ()=>{
            const body = {
                name: form.name,
                nickname: form.nickname,
                email: form.email,
                password: form.password
            }
            axios.post("http://localhost:3001/user/signup-admin", body, {
                headers: {
                    authorization: token
                }
            }).then((response)=>{
                window.alert(response.data)
            }).catch((error)=>{
                console.log(error)
            })

        history.push("/home")
    }

    return(
        <ContainerSignupAdmin>
            <ButtonBack/>
            <Logo/>
            <FormSignupListenerAndAdmin titulo ="Cadastrar novo admin:" onchange={handlerInputChange} form={form} cadaster={cadasterAdmin} />
        </ContainerSignupAdmin>
    )
}