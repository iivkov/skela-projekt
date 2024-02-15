import React, {useState, useEffect } from 'react';
import EUnoteSite from './EUnoteSite';
import '../App.css';
import slika from '../assets/omisalj Janaf(3).jpg';
import Information from './Information';

const AboutComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
        <div className="main_content">
            <EUnoteSite/>
            <h1>O nama</h1>
            <div className="container">
                <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                    <h2>Misija</h2>
                    <p>Misija tvrtke Skela Projekt d.o.o. je sigurnost i kvaliteta u pružanju građevinskih usluga, uz poštivanje vremenskih definiranih rokova. 
                    Pružanje kvalitetne te profesionalne usluge, uz osposobljene zaposlenike s dugogodišnjim iskustvom rada.</p>
                    <h2>Vizija</h2>
                    <p>Kontinuirana poslovna izvornost i kvaliteta u izvođenju radova, teži se prema uspjehu, usavršavanju te nadogradnji postojećih znanja. 
                        Postojanošću, pouzdanošću te kvalitetom usluga zadovoljavamo i najkompleksnije poslovne zahtjeve naših klijenata.</p>
                </div>
                <div className="spacer"></div>
                <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                    <img src={slika} className="img-article" alt="Stup vijadukta ili nadvožnjaka obložen građevinskim skelama." />
                </div>
            </div>
            <Information />
        </div>
    );
}

export default AboutComponent;