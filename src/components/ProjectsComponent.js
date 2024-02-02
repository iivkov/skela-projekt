import React from 'react';
import '../App.css';
import Petrinja from '../assets/Petrinja.jpg';
import EUnoteProject from './EUnoteProject';

const ProjectsComponent = () => {
    
    return (
    <div className="main_content">
        <h1>NOVI RAZVOJ U PETRINJI SKELA PROJEKT d.o.o.</h1>
        <h2>Kod projekta: KK.08.2.1.16.0176</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        <div className="container">
            <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} />
            <p>Cilj ovog projekta je održiva fizička, socijalna i gospodarska regeneracija grada Petrinje, s ciljem smanjenja socijalnih nejednakosti, isključenosti i siromaštva.
                Nabavom novih roba i/ili usluga, Prijavitelj će povećati svoju konkurentnost i održivost poslovanja te proizvodne kapacitete. Prijavitelj će otvoriti nova tržišta i 
                povećat će mu se prihod. Projekt je usmjeren na djelatnike Prijavitelja, kupce i dobavljače kao ciljne skupine projekta, ali i sve građane Republike Hrvatske i to upravo 
                kroz očuvanje postojećih radnih mjesta i otvaranje novih. Projekt vodi računa o zaštiti okoliša. 
                Osnovna aktivnost projekta je ulaganje u materijalnu opremu: regalno dizalo za građevinarstvo, građevinska skela komplet.</p>
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): 204.074,10</p>
                <p>Ukupna bespovratna sredstva (EUR): 173.462,98</p>
            </div>
            {/* <div className="spacer"></div> */}
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: 18.04.2022.</p>
                <p>Kraj provedbe: 18.11.2023.</p>
                <p>Trajanje provedbe (mjeseci): 19</p>
            </div>
        </div>
        <EUnoteProject />
    </div>
    );
}

export default ProjectsComponent;