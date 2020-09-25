import React from "react"
import {ContainerLogoutAccount, ButtonLogout} from './styled'
import { useHistory } from "react-router-dom"

export const LogoutAccount = (props)=>{
    const history = useHistory()

    const logout =()=>{
        localStorage.setItem('token', undefined)
        history.push("/login")
    }
    
    return(
        <ContainerLogoutAccount>
            <ButtonLogout onClick={logout}>Encerrar sessão</ButtonLogout>
        </ContainerLogoutAccount>
    )
}