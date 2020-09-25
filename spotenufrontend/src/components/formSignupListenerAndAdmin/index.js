import React from "react"
import {FormStyled, Titulo, TextFieldStyled, ButtonSave, TextError} from "./styled"

export const FormSignupListenerAndAdmin = (props)=>{

    const handleSubmit = (event)=>{
        event.preventDefault()
    }
    return(
        <FormStyled onSubmit={handleSubmit}>
                <Titulo>{props.titulo}</Titulo>
                <TextFieldStyled 
                    id="standard-basic" 
                    name="name" 
                    onChange={props.onchange} 
                    value={props.form.name} 
                    label="Name" 
                    type="text"
                    inputProps={{ 
                        pattern: "[A-Za-z ]{3,}", 
                        title: "O nome deve conter 3 letras no mínimo, e sem números"
                    }}
                    required
                />
                <TextFieldStyled 
                    id="standard-basic" 
                    name="nickname" 
                    onChange={props.onchange} 
                    value={props.form.nickname} 
                    label="Nickname" 
                    type="text"
                    inputProps={{ 
                        pattern: "[A-Za-z ]{3,}", 
                        title: "O nome deve conter 3 letras no mínimo, e sem números" }}
                    required
                />
                <TextFieldStyled 
                    id="standard-basic" 
                    name="email" 
                    onChange={props.onchange} 
                    value={props.form.email} 
                    label="Email" 
                    type="email" 
                    required
                />
                {props.error === "email invalid"? <TextError>{props.error}</TextError>: ""}
                <TextFieldStyled 
                    id="standard-basic" 
                    name="password" 
                    onChange={props.onchange} 
                    value={props.form.password} 
                    label={`Senha (minimo ${props.minimo} caracteres)`}
                    type="password" 
                    required
                />
                {props.error ===`Sua senha tem que possuir no minimo ${props.minimo} caracteres`?<TextError>{props.error}</TextError>: ""}
                <TextFieldStyled 
                    id="standard-basic" 
                    name="confirmPassword" 
                    onChange={props.onchange} 
                    value={props.form.confirmPassword} 
                    label="Confirme sua senha" 
                    type="password" 
                    
                    required/>
                {props.form.password !== props.form.confirmPassword? "As senhas devem coincidir": ""}
                <ButtonSave onClick={props.cadaster}>Salvar</ButtonSave>
        </FormStyled>
        
    )
}
