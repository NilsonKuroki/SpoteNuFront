import React from "react"
import {FormStyled, Titulo, TextFieldStyled, ButtonSave} from "./styled"

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
                        title: "O nome deve conter 3 letras no mínimo"
                    }}
                    required/>
                <TextFieldStyled 
                    id="standard-basic" 
                    name="nickname" 
                    onChange={props.onchange} 
                    value={props.form.nickname} 
                    label="Nickname" 
                    type="text"
                    inputProps={{ 
                        pattern: "[A-Za-z ]{3,}", 
                        title: "O nome deve conter 3 letras no mínimo" }}
                    required/>
                <TextFieldStyled 
                    id="standard-basic" 
                    name="email" 
                    onChange={props.onchange} 
                    value={props.form.email} 
                    label="Email" 
                    type="email" 
                    required/>
                <TextFieldStyled 
                    id="standard-basic" 
                    name="password" 
                    onChange={props.onchange} 
                    value={props.form.password} 
                    label="Password" 
                    type="password" 
                    // inputProps={{ 
                    //     pattern: "/^.{6,}$/", 
                    //     title: "A senha deve conter 10 letras/numeros no mínimo" }}
                    required/>
                <ButtonSave onClick={props.cadaster}>Salvar</ButtonSave>
        </FormStyled>
        
    )
}
