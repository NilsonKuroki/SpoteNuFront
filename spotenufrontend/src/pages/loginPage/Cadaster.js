import React from 'react'
import {ContainerCadaster, Title, SubTitle,Text, ContainerText} from './styled'
import {useHistory} from 'react-router-dom'

export const Cadaster = () =>{
    const history = useHistory()
    return(
        <ContainerCadaster>
                <Title>Cadastre-se</Title>
                <ContainerText>
                    <SubTitle><center>Quer conhecer novos artistas e bandas?    </center></SubTitle>
                    <Text onClick={()=>{history.push("/signup-listener")}}>Clique aqui!</Text>
                </ContainerText>
                <ContainerText>
                    <SubTitle><center>Tem uma banda ou é um artista solo??</center></SubTitle>
                    <Text onClick={()=>{history.push("/signup-band")}}><center>Clique aqui e divulgue seu trabalho!</center></Text>
                </ContainerText>
                
        </ContainerCadaster>
    )
}