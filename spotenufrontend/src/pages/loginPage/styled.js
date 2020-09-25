import styled from 'styled-components'
import {TextField} from "@material-ui/core"

export const ContainerLogin = styled.div`
    width: 100vw;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-black);

`

export const TextFieldStyled = styled(TextField)`
    width: 70%;

    @media(max-width: 800px){
        width: 90%;
    }
`

export const FormLogin = styled.form`
    width: 400px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    padding: 30px;
    border-radius: 40px;
    border: 2px solid var(--color-green);

    @media(max-width: 800px){
        width: 80%;
        min-height: 320px;;
    }
`

export const ButtonLogin = styled.button`
    width: 150px;
    height: 40px;
    border: 1px solid var(--color-black);
    border-radius: 50px;;
    background-color: var(--color-green);
    color: var(--color-black);
    :hover{
        color: white;
        background: var(--color-black);
        border: 1px solid var(--color-green)
    }
    :focus{
        color: var(--color-black);
        background-color:var(--color-green);
        border: 1px solid var(--color-black)
    }
`

export const ContainerLoginAndSignup = styled.div`
    width: 90%;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media(max-width: 800px){
        width: 100%;
        flex-direction: column;
    }
`

export const ContainerCadaster = styled.div`
    width: 30%;
    /* border-left: 3px solid var(--color-green); */
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width: 800px){
        border-left: none;
        width: 80%;
        margin-top: 30px;
        min-height: 300px;;
    }
`
export const Title = styled.h1`
    color: var(--color-green);
`
export const SubTitle = styled.h3`
    color: white;
`

export const Text = styled.p`
    color: white;
    cursor: pointer;
    :hover{
        color: var(--color-green)
        
    }
`

export const ErrorStyled = styled.p`
    color: red;
`

export const ContainerText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

