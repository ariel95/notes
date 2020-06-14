import React from 'react';
import userDefault from  '../public/images/male-picture.png';
import '../public/css/User.css'
import Menu from './Menu'

const User = () => {

    return(
        <div id="user">
            <div className="user-picture">
                <img alt="" src={userDefault}></img>
            </div>
            <div className="user-name">
                Ariel Bernardo Vergara
            </div>
            <Menu></Menu>
        </div>
    );
}

export default User;