import React from 'react';

import Footer from '../components/Footer/footer';
import Login from '../components/login';
import Navbar from '../components/navbar/navbar';

const LoginPage = () => {
    return(
        <div>
            <Navbar/>
            <Login />
            <Footer/>
        </div>
    )
}

export default LoginPage;