import React from 'react';
import bg from '../Header/bg.jpg'
import './Header.css'

const Header = () => {
    return (

        <div className="header">
            <h1 className="display-1 pt-5 ">Welcome To The <span className="text-warning">Academy</span></h1>
            <p className="description">In This Academy You Will Get Access of Our Every Previous And Future Course.You Don't have to pay extra money for our future Course.We will provide you not only best course in bangladesh but also in the world with extra spice secret group where our instructor will guide you through your course time.</p>

            <button className="Academy-btn">Buy This Academy</button>

            
        </div>
    );
};

export default Header;