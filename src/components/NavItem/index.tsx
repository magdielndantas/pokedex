import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from './styles'

interface Props {
    name: string,
    id: any,
    image: string,
    types: any,
}

const NavItem: React.FC<Props> = ({
    name,
    id,
    image,
    types,
}) => {

    return (
        <Link to={`/pokemon/${name}`}> 
            <Container>
                <img src={image} alt={name} />
                <div>
                    <h1>{name}</h1>
                    <p>#{id} • {types}</p>
                </div>
            </Container>
        </Link>
    )
}

export default NavItem