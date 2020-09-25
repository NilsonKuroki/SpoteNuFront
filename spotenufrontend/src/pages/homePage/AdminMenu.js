import React from 'react'
import {Menu,
    ButtonMenu,
    IconButton,
    ContainerAdmin,
    Titulo
} from './styled'
import Music from '../../images/musica.svg'
import Add from '../../images/adicionar.svg'
import Check from '../../images/direito.svg'
import {useHistory} from 'react-router-dom'

export const AdminMenu = (props) =>{
    
    const history = useHistory()
    return(
        <ContainerAdmin>
            <Titulo><center>Bem vindo, {props.name} o que deseja fazer?</center></Titulo>
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

        </ContainerAdmin>
        
    )
}