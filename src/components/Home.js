import React, { Component } from 'react';
import logoMatch from '../assets/images/match.jpg'

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className='font-monospace my-2 py-2 bg-primary text-white'>
                    Bienvenido a la final de la Champions
                </h1>
                <img src={logoMatch} style={{maxWidth:"80vw"}}/>
            </div>
        )
    }
}

export default Home;