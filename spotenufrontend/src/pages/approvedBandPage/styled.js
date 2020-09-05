import styled from 'styled-components'

export const ContainerApprovedBandPage = styled.div` 
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-black);
`

export const Titulo = styled.h1`
    color: white;
`

export const ContainerBands = styled.div`
    width: 60%;
    background-color: white;
    margin: 20px 0;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 70vh;
`

export const ContainerCardBand = styled.div`
    width: 95%;
    border: 1px solid var(--color-green);
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
`

export const ContainerCardText = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`

export const ButtonApproved = styled.button`
    width: 100px;
    height: 30px;
    border: 1px solid var(--color-black);
    border-radius: 50px;;
    background-color: var(--color-green);
    color: var(--color-black);
    outline:none;
    :hover{
        color: white;
        background: var(--color-black);
        border: 1px solid var(--color-green)
    }
    :focus{
        color: var(--color-black);
        background-color:var(--color-green);
        border: 1px solid var(--color-black);
    }
`