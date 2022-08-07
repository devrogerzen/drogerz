import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const TextCenter404 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30vh;
`

export const NotFound = () => {
  return (
    <TextCenter404>
      <h1>ERROR 404</h1>
      <h2>Esta sección de la Página no es Valida</h2>
      <Link to="/">Volver al Inicio</Link>
    </TextCenter404>
  )
}
