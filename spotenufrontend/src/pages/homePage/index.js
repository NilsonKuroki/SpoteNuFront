import React, {useEffect} from 'react'
import {Logo} from '../../components/logo'
import {
    ContainerHomePage,
    Menu,
    ButtonMenu,
    IconButton,
    Titulo
} from './styled'
import {useHistory} from 'react-router-dom'
import Music from '../../images/musica.svg'
import Add from '../../images/adicionar.svg'
import Check from '../../images/direito.svg'

export const HomePage = ()=>{
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        
        if(token === null){
            history.push("/login")
        }
    })

    return(
        <ContainerHomePage>
            <Logo/>
            <Titulo>O que deseja fazer?</Titulo>
            <Menu>
                <ButtonMenu onClick={()=>{history.push("/signup-admin")}}>
                    <IconButton 
                    src={Add} alt="https://www.flaticon.com/br/autores/dmitri13"/>
                    <h2>Adicionar Administrador</h2>
                </ButtonMenu>
                <ButtonMenu onClick={()=>{history.push("/approved-bands")}}>
                    <IconButton 
                    src={Check} alt="https://www.flaticon.com/br/autores/freepik"/>
                    <h2>Aprovar Bandas</h2>
                </ButtonMenu>
                <ButtonMenu>
                    <IconButton 
                    src={Music} alt="https://www.flaticon.com/br/autores/freepik"/>
                    <h2>Gerenciar Generos Musicais</h2>
                </ButtonMenu>
            </Menu>
        </ContainerHomePage>
    )
}