import React from 'react'

import {Container} from './styles'

export interface Props{
    name: any,
    id: any,
    image: any,
    types: any,
}
  
const NavItem: React.FC<Props> = ({
    name,
    id,
    image,
    types,
}) => {

    return (
        <Container>
            <img src={image} alt={name}/>
            <div>
                <h1>{name}</h1>
                <p>#{id} • {types}</p>
            </div>
        </Container> 
    )
}

export default NavItem