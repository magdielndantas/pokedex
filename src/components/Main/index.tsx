import React, { useState, useEffect } from 'react';

import Card from '../Card';
import CardSkeleton from '../CardSkeleton';
import api from '../../services/api';

import { Container, LoadButton, Section } from './styles';

const Main: React.FC = () => {
    const [data, setData]: any = useState([]);
    const [loading, setLoading] = useState(true);
    const [endpoint, setEndpoint] = useState("pokemon");
    const [next, setNext] = useState("");

    useEffect(() => {
        getPage()
    }, [endpoint])

    const getPage = async (): Promise<void> => {
        const response = await api.get(endpoint);

        setNext(response.data.next);
        //setData(response.data.results);
        setData((pokemons: any) => [...pokemons, response.data.results])

        if (response.data.results.length > 0) {
            setTimeout(() => {
                api.get('data').then(response => {
                    setData(response.data);
                });

                setLoading(false);
            }, 3000);
        }
    }

    return (
        <Container>
            <Section>
                {loading && <CardSkeleton cards={5} />}
                {!loading && (
                    data.length > 0 ? data.map((pk: any) => (
                        pk.map((p: any) => (
                            <Card
                                key={p.name}
                                name={p.name}
                            />
                        ))
                    )) : "...")}
            </Section>
            <LoadButton>
                <button type="button" onClick={() => setEndpoint(next)}></button>
            </LoadButton>
        </Container>
    );
}

export default Main;