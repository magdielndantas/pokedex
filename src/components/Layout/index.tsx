import React from 'react'

import {Grid} from './styles'

import Nav from '../Nav'
import Main from '../Main'

const Layout: React.FC = () =>{
    return(
        <Grid>
            <Nav/>
            <Main/>
        </Grid>
    )
};

export default Layout