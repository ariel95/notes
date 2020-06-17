import React from 'react'
import Menu from './Menu'
import '../public/css/Header.css'

const Header = (props) => {
    return(
        <div id="header">
            {props.children}
            <Menu></Menu>
        </div>
    );
}

export default Header;