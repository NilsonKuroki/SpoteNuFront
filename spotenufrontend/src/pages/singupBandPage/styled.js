import styled from 'styled-components'
import {TextField} from '@material-ui/core'
 
export const ContainerSignupPage = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--color-black);
    display:  flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ButtonSave = styled.button`
    width: 150px;
    height: 40px;
    border: 1px solid var(--color-black);
    border-radius: 50px;;
    background-color: var(--color-green);
    color: var(--color-black);
    :hover{
        color: white;
        background: var(--color-black);
    }
    :focus{
        color: var(--color-black);
        background-color: var(--color-green);
    }
`

export const FormStyled = styled.form`
    width: 500px;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    padding: 30px;
    border-radius: 40px;
    border: 4px solid var(--color-green);
`

export const TextFieldStyled = styled(TextField)`
    width: 80%;
`

export const Titulo = styled.h1`
    font: 600 2rem Montserrat;
`
