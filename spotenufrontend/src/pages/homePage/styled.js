import styled from 'styled-components'

export const ContainerHomePage = styled.div`
    width: 100vw;
    height: 100vh;
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
    width: 70%;
    height: 70vh;
`

export const ContainerDetailsAddAdmin = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ButtonMenu = styled.button`
    height: 90%;
    width: 30%;
    border: 1px solid white;
    background-color: var(--color-green);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
`

export const IconButton = styled.img`
    max-width: 40%;
`
export const Titulo = styled.h1`
    color: white;
`