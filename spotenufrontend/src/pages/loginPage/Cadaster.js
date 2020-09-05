import React from 'react'
import {ContainerCadaster, Title, SubTitle,Text, ContainerText} from './styled'
import {useHistory} from 'react-router-dom'

export const Cadaster = () =>{
    const history = useHistory()
    return(
        <ContainerCadaster>
                <Title>Cadastre-se</Title>
                <ContainerText>
                    <SubTitle >Quer conhecer novos artistas e bandas?</SubTitle>
                    <Text onClick={()=>{history.push("/signup-listener")}}>Clique aqui!</Text>
                    </ContainerText>
                    <ContainerText>
                    <SubTitle>Tem uma banda ou é um artista solo??</SubTitle>
                    <Text onClick={()=>{history.push("/signup-band")}}>Clique aqui e divulgue seu trabalho!</Text>
                </ContainerText>
                
        </ContainerCadaster>
    )
}