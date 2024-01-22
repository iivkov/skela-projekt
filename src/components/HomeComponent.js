import React, { useState, useEffect } from 'react';
import '../App.css';
import EUnoteSite from './EUnoteSite';
import slika from '../assets/skela1.jpg';

const HomeComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
    <div className="main_content">
        <EUnoteSite/>
        <h1>Dobrodošli!</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <img src={slika} alt="Toranj crkve obložen građevinskim skelama." style={{ width: '100%', height: 'auto' }} />
            </div>
            {/* <div className="spacer"></div> */}
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>Naša glavna djelatnost je iznajmljivanje, montaža i demontaža građevinskih skela...</p>
            </div>
        </div>
    </div>
    );
}

export default HomeComponent;