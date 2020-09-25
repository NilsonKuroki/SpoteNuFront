import React, {useEffect,useState} from 'react'
import {Logo} from '../../components/logo'
import {
    ContainerHomePage
} from './styled'
import {OthersUsers} from "./OthersUsers"
import {AdminMenu} from './AdminMenu'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {LogoutAccount} from '../../components/logoutAccount'

export const HomePage = ()=>{
    const history = useHistory()
    const [user, setUser] = useState({})

    useEffect(()=>{
        const token = localStorage.getItem('token')
        
        if(!token){
            history.push("/login")
        }

        const userOnline = () =>{
            axios.get("http://localhost:3001/user/user-online", {
                headers: {authorization: token}
            }).then((response)=>{
                setUser(response.data)
            }).catch((error)=>{
                if(error.response.data.name === "TokenExpiredError"){
                    history.push("/login")
                }          
            })
        }
        userOnline()
    }, [history])

    return(
        <ContainerHomePage>
            <LogoutAccount/>
            <Logo/>
            {
                user.type === "admin"? 
                <AdminMenu name={user.name}/>
                :
                <OthersUsers/>
            }
            
        </ContainerHomePage>
    )
}