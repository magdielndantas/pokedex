import styled from 'styled-components';
import {Search} from 'styled-icons/remix-line'


export const Container = styled.div`
    grid-area: main;

    background: var(--bg-primary);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >div.SearchBox{
        position: relative;
        display: flex;
        align-items: center;
    }
`;

export const SearchBar = styled.input`
    width: 400px;
    height: 56px;

    background: rgba(255,255,255, .1);
    border: 1px solid var(--dark-blue);

    color: var(--dark-blue);

    border-radius: 30px;
    padding-left: 30px;
    margin: 20px 0;

    align-items: center;

    ::placeholder{
        color: var(--dark-blue);
    }
`;

export const SearchIcon = styled(Search)`
    width: 20px;
    color: var(--dark-blue);
    position: absolute;
    right: 30px;
`;