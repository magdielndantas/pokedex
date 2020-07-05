import React from 'react'
import { Container} from './styles'

interface Props {
    name?: string,
    id?: any,
    image?: string,
    types?: string,
    stats?: any,
}

const Detail: React.FC<Props> = ({
    name,
    id,
    image,
    types,
    stats,
}) => {
    return (
        <Container>
            <img src={image} alt={name} />
            <div className='info'>
                <h1>{name}</h1>
                <p>#{id} • {types}</p>
                <div className="stats">
                    <h3>Stats</h3>
                    {stats}
                </div>
            </div>
        </Container>
    )
};

export default Detail