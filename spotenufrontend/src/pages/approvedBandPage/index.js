import React, {useState, useEffect} from "react"
import {CardBand} from './CardBand'
import {ContainerApprovedBandPage, Titulo, ContainerBands} from './styled'
import {Logo} from "../../components/logo"
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {ButtonBack} from '../../components/buttonBack'


export const ApprovedBandPage = () =>{
    const [bands, setBands] = useState([])   
    const token = localStorage.getItem('token')
    const history = useHistory()

    useEffect(()=>{
        if(!token){
            history.push("/login")
        }
        
        const getAllBands = async ()=>{
            const response = await axios.get(`http://localhost:3001/user/admin/get-all-bands`, 
            {headers:{
                authorization: token
            }})
            setBands(response.data.bands)
        }
        getAllBands()   
    }, [token, history])

    return(
        <ContainerApprovedBandPage>
            <ButtonBack/>
            <Logo/>
            <Titulo>Bandas</Titulo>
            <ContainerBands>
                {bands.map((band)=>{
                    return(
                    <CardBand 
                        id={band.id}
                        key={band.id}
                        name={band.name} 
                        nickname={band.nickname}
                        email={band.email}
                        approved={band.band_approved}
                    />
                    )  
                })}
            </ContainerBands>
        </ContainerApprovedBandPage>
    )
}