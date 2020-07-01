import React from 'react'

import {Container} from './styles'

interface Props{
    name: any,
    id: any,
    image: any,
}
  
const NavItem: React.FC<Props> = ({
    name,
    id,
    image,
}) => {

    return (
        <Container>
            <img src={image} alt={name}/>
            <h1>{name} {id}</h1>
        </Container> 
    )
}

export default NavItem