import React from "react"
import {useHistory} from 'react-router-dom'
import {
    ContainerButtonBack, 
    BackButton, 
    ImgBack} from './styled'
import Back from '../../images/back.svg'

export const ButtonBack = () =>{
    const history = useHistory()
    return (
        <ContainerButtonBack>
            <BackButton onClick={()=>{history.goBack()}}>
                <ImgBack src={Back} alt="https://www.flaticon.com/authors/freepik"/>
                Voltar 
            </BackButton>
        </ContainerButtonBack>
    )
}