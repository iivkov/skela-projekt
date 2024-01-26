import React, { useState, useEffect } from 'react';
import '../App.css';
import EUnoteSite from './EUnoteSite';
// import slika from '../assets/skela1.jpg';
import slika from '../assets/anigif.gif';
// import slika from '../assets/crkva sv. Marka(2).jpg';

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
            <div id="box-image-left" className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <img src={slika} className="img-article" alt="Toranj crkve obložen građevinskim skelama."/>
            </div>
            {/* <div className="spacer"></div> */}
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>Skela Projekt d.o.o. građevinska je tvrtka osnovana 2017. godine sa sjedištem u Zagrebu. Osnovne djelatnosti kojima se bavimo su montaža i najam građevinskih skela. 
                    Tijekom godina, zahvaljujući kvalitetnom radu, zadovoljstvu klijenata i uspješnom poslovanju naša tvrtka proširila je svoje kapacitete te otvorila podružnicu u Petrinji. 
                    Također posjedujemo svoje skladište sa svim pratećim objektima. Naša uspješnost temelji se na poštovanju, predanosti poslu i povjerenju samih zaposlenika te klijenata s druge strane. 
                    Posebno se ističemo po kompleksnim radovima, poput viseće skele na mostovima, kratkim rokovima obavljanja poslova, konkurentnim cijenama te radovima na velikim i važnim ustanovama po cijeloj Hrvatskoj 
                    (Sabor, Radar MORH Učka, Sljeme-mali toranj, dalekovodi Karlovac – Lučko).</p>
            </div>
        </div>
    </div>
    );
}

export default HomeComponent;