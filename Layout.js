import React, {Fragment} from 'react';
import Navbar from './Navbar'

function Layout(props) {
    // const children = props.children
    return (
        <Fragment>
            <Navbar>

            </Navbar>
            {props.children}
        </Fragment>
        )
    }
    
export default Layout
