import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import {Grid} from './styles'

import Nav from '../Nav'
import Main from '../Main'

const Layout: React.FC = () =>{
    return(
        <BrowserRouter>
            <Grid>
                <Nav/>
                <Main/>
            </Grid>
        </BrowserRouter>
    )
};

export default Layout