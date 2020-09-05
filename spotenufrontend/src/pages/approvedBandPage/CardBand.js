import React from 'react'
import {ContainerCardBand, ContainerCardText, ButtonApproved} from './styled'
import axios from "axios"

export const CardBand = (props)=>{
    const token = localStorage.getItem('token')
    const body = {id: props.id}

    const approve = async ()=>{
        const response = await axios.post("http://localhost:3001/user/admin/approve-band", body,{
            headers: {authorization: token}
        })
        console.log(response)
    }
    return(
        <ContainerCardBand>
            <ContainerCardText>
                <p><b>Name: </b>{props.name}</p>
                <p><b>Nickname: </b>{props.nickname}</p>
                <p><b>Aprovada: </b> {props.approved === 1? "sim": "não"}</p>
            </ContainerCardText>
            <ContainerCardText> 
            <p><b>Email: </b>{props.email}</p>
            
            {props.approved === 1? "esta banda já foi aprovada!":<ButtonApproved onClick={approve}>aprovar!</ButtonApproved>}
            </ContainerCardText>
        </ContainerCardBand>
    )
}