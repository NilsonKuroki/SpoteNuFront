import React from 'react'
import {
    TextFieldStyled, 
    FormLogin,
    ButtonLogin,
    ErrorStyled} from "./styled"

export const Login = (props)=>{
    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    return(
        <FormLogin onSubmit={handleSubmit}>
            <h1>Login:</h1>
            <TextFieldStyled 
                id="standard-basic" 
                name="login" 
                label="Nickname ou Email" 
                onChange={props.onchange} 
                value={props.form.login} 
                required
            />
            <TextFieldStyled 
                id="standard-basic" 
                name="password" 
                label="Senha" 
                onChange={props.onchange} 
                value={props.form.password}
                type="password" 
                required
            />
            {
            props.error === ""?
            ""
            :
            <ErrorStyled>{props.error}</ErrorStyled>
            }

            <ButtonLogin onClick={props.login}>Entrar</ButtonLogin>
            {
            props.form.login === "" || props.form.password === ""? 
            <p>Preencha adequadamente todos os campos</p>
            : 
            ""
            }
        </FormLogin>
    )
}