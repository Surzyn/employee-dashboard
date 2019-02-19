import React, { Component } from 'react'
import './home.css'

import { GetRandomMotivation } from '../../services/corpoGenerator'

const Home = () => {
    var motivationText = GetRandomMotivation();

    return (
        <div className="home-container">
            <p>{motivationText}</p>
            <img src="https://pngimage.net/wp-content/uploads/2018/05/employee-png-4.png" alt="person" />
        </div>
    )
}

export default Home;