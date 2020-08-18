import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { actions } from '../../redux/actions';

import { Container, Search } from './styles';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <h1>Poke<span>dex</span></h1>
            <Search
                placeholder="Enter Pokemon name or #id"
                type="text"
                onChange={
                    (event: ChangeEvent<HTMLInputElement>) =>
                        dispatch(
                            actions.search(
                                'SEARCH_VALUE',
                                `${event.target.value}`,
                                true
                            ))}
            />
        </Container>
    );
}

export default Header;