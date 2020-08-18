import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card';
import CardSkeleton from '../CardSkeleton';
import api from '../../services/api';

import { Container, LoadButton, Section } from './styles';

const Main: React.FC = () => {
    const [data, setData]: any = useState([]);
    const [loading, setLoading] = useState(true);
    const [endpoint, setEndpoint] = useState("pokemon");
    const [next, setNext] = useState("");

    const search = useSelector((state: any) => state.searchReducer);

    useEffect(() => {
        getPage()
    }, [endpoint])

    const getPage = async (): Promise<void> => {
        await api.get(endpoint).then(
            response => {
                if (response.status === 200) {
                    setNext(response.data.next);
                    setData((pokemons: any) => [...pokemons, response.data.results])

                    if (response.data.results.length > 0) {
                        setTimeout(() => {
                            setLoading(false);
                        }, 3000);
                    }
                }
            })
    }


    return (
        <Container>
            <Section>
                {search.active && <Card name={search.value} />}

                {!search.active && (
                    loading ? Array.from(Array(12).keys()).map((n) => (
                        <CardSkeleton />
                    )) :
                        data.length > 0 ? data.map((pk: any) => (
                            pk.map((p: any) => (
                                <Card
                                    key={p.name}
                                    name={p.name}
                                />
                            ))
                        )) : <CardSkeleton />
                )}
            </Section>
            <LoadButton>
                <button
                    type="button"
                    onClick={() => setEndpoint(next)}
                >
                </button>
            </LoadButton>
        </Container>
    );
}

export default Main;