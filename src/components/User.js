import React from 'react';
import userDefault from  '../public/images/male-picture.png';
import '../public/css/User.css'

const User = () => {

    return(
        <div id="user">
            <div className="user-picture">
                <img alt="" src={userDefault}></img>
            </div>
            <div className="user-name">
                Ariel Bernardo Vergara
            </div>
        </div>
    );
}

export default User;