import React, {useState, useEffect } from 'react';
import '../App.css';
// import slika from '../assets/skela2.jpg';
import slika from '../assets/crkva sv. Marka(2).jpg';

const AboutComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
        <div className="main_content">
                <h1>O nama</h1>
                <div className="container">
                    <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                        <p>Skela Projekt d.o.o. je građevinska tvrtka sa sjedištem u Zagrebu, osnovana 2017. godine.  Osnovne djelatnosti kojima se bavimo su montaža i najam građevinskih skela. 
                            Tijekom godina, zahvaljujući kvalitetnom radu, zadovoljstvu klijenata i uspješnom poslovanju naša tvrtka proširila je svoje kapacitete te otvorila podružnicu u Petrinji. 
                            Također posjedujemo svoje skladište sa svim pratećim objektima. Naša uspješnost temelji se na poštovanju, predanosti poslu i povjerenju samih zaposlenika te klijenata s druge strane. 
                            Posebno se ističemo po kompleksnim radovima, poput viseće skele na mostovima, kratkim rokovima obavljanja poslova, konkurentnim cijenama te radovima na velikim i važnim ustanovama po cijeloj Hrvatskoj 
                            (Sabor, Radar MORH Učka, Sljeme-mali toranj, dalekovodi Karlovac – Lučko).</p>
                    </div>
                <div className="spacer"></div>
                    <div id="box-image" className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                        <img src={slika} className="img-article" alt="Stup vijadukta ili nadvožnjaka obložen građevinskim skelama." />
                    </div>
                </div>
            </div>
    );
}

export default AboutComponent;