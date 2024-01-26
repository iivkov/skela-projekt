import React, { useState, useEffect } from 'react';
import '../App.css';

const Information = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
    <div className="main_content">
        <h2>Osnovni podatci</h2>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <p>SKELA PROJEKT d.o.o. za građenje, usluge i trgovinu</p>
                <p>Kate Mlinarić 4</p>
                <p>HR-10000 Zagreb</p>
                <br />
                <p>Podružnica Petrinja</p>
                <p>Franza Wagnera 33</p>
                <p>HR-44250 Petrinja</p>
            </div>
            <div className="spacer"></div>
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>Mobitel: +385 (0)98 924 6798 (Dragan)</p>
                <p>Mobitel: +385 (0)99 535 1688 (Blago)</p>
                <p>E-pošta: skela.projekt2017@gmail.com</p>
                <br />
                <p>MBS: 081029854</p>
                <p>OIB: 13198820346</p>
                <p>Temeljni kapital: 2.640,00 EUR</p>
            </div>
        </div>
    </div>
    );
}

export default Information;