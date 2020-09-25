import React, {useEffect} from 'react'
import {ContainerSignupPage, FormStyled, Titulo, TextFieldStyled, ButtonSave} from './styled'
import {useHistory} from 'react-router-dom'
import {useForm}from "../../customHooks/useForm"
import axios from 'axios'
import {Logo} from '../../components/logo'

export const SignupBandPage = () =>{
    const token = localStorage.getItem('token')
    const history  = useHistory()

    useEffect(()=>{
        if(token === null){
            history.push("/login")
        }
    })

    const handleSubmit = (event)=>{
        event.preventDefault()

    }

    const {form, onChange} = useForm({
        name: "",
        nickname: "",
        email: "",
        password: "",
        confirmPassword: "",
        description: ""
    })

    const handlerInputChange = event =>{
        const {name, value} = event.target
        onChange(name, value)
    }

    const cadasterBand = ()=>{
        const body = {
            name: form.name,
            nickname: form.nickname,
            email: form.email,
            password: form.password,
            description: form.description
        }
        axios.post("http://localhost:3001/user/signup-band", body)
        .then((response)=>{
            window.alert(response.data)
            history.push("/login")
        }).catch((error)=>{
            console.log(error.data)
        })
    }

    return(
        <ContainerSignupPage>
            <Logo/>
            <FormStyled onSubmit={handleSubmit}>
                <Titulo>Crie sua conta</Titulo>
                <TextFieldStyled 
                    id="standard-basic" 
                    name="name" 
                    onChange={handlerInputChange} 
                    value={form.name} 
                    label="Name" 
                    type="text"
                    inputProps={{ 
                        pattern: "[A-Za-z1-9 ]{3,}", 
                        title: "O nome deve conter 3 letras no mínimo"
                    }}
                    required/>
                <TextFieldStyled 
                    id="standard-basic" 
                    name="nickname" 
                    onChange={handlerInputChange} 
                    value={form.nickname} 
                    label="Nickname" 
                    type="text"
                    inputProps={{ 
                        pattern: "[A-Za-z1-9 ]{3,}", 
                        title: "O nome deve conter 3 letras no mínimo" }}
                    required/>
                <TextFieldStyled 
                    id="standard-basic" 
                    name="email" 
                    onChange={handlerInputChange} 
                    value={form.email} 
                    label="Email" 
                    type="email" 
                    required/>
                <TextFieldStyled 
                    id="standard-basic" 
                    name="password" 
                    onChange={handlerInputChange} 
                    value={form.password} 
                    label="senha" 
                    type="password" 
                    required/>
                <TextFieldStyled 
                    id="standard-basic" 
                    name="confirmPassword" 
                    onChange={handlerInputChange} 
                    value={form.confirmPassword} 
                    label="confirme sua senha" 
                    type="password" 
                    required/>
                <TextFieldStyled
                    id="standard-basic" 
                    name="description" 
                    onChange={handlerInputChange} 
                    value={form.description} 
                    label="Descrição" 
                    type="text" 
                    required
                />
                <ButtonSave onClick={cadasterBand}>Salvar</ButtonSave>
        </FormStyled>
        </ContainerSignupPage>
    )
}