import React, { useState, useEffect } from 'react';
import '../App.css';

const InformationComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
    <div className="main_content">
        <h1>Osnovni podatci</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <p>SKELA PROJEKT d.o.o. za građenje, usluge i trgovinu</p>
                <p>Kate Mlinarić 4</p>
                <p>HR-10000 Zagreb</p>
                <br />
                <br />
                <p>Mobitel: +385 (0)99 535 1688</p>
                <p>E-pošta: skela.projekt2017@gmail.com</p>
            </div>
            {/* <div className="spacer"></div> */}
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>Ključna osoba: Blago Gudelj</p>
                <p>Godina osnutka: 2016.</p>
                <p>Mjerodavni sud: Trgovački sud u Zagrebu</p>
                <p>Pravni oblik: društvo s ograničenom odgovornošću</p>
                <p>MBS: 081029854</p>
                <p>OIB: 13198820346</p>
                <p>Temeljni kapital: 2.640,00 EUR</p>
            </div>
        </div>
    </div>
    );
}

export default InformationComponent;