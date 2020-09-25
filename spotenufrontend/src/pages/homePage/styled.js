import styled from 'styled-components'

export const ContainerHomePage = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: var(--color-black);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    @media(max-width: 800px){
        width: 90%;
        flex-direction: column;
    }
`

export const ContainerDetailsAddAdmin = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ButtonMenu = styled.button`
    height: 60vh;
    width: 30%;
    border: 1px solid white;
    background-color: var(--color-green);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;

    @media(max-width: 800px){
        width: 70vw;
        height: 30vh;
        margin: 10px 0 10px 0;
    }
`

export const IconButton = styled.img`
    max-width: 40%;
    @media(max-width: 800px){
        max-width: 30%;
    }
`
export const Titulo = styled.h1`
    color: white;
`

export const ContainerAdmin = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`