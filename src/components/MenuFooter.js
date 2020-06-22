import React from 'react'

const MenuFooter = (props) => {
    
    return(
        <div id = "menu-footer" className={props.className}>
            {props.children}
        </div>
    );

}

export default MenuFooter;