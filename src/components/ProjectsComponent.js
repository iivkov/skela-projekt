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
        <div className="container">
            <div className="activity-box">
                    <h3>Aktivnosti projekta</h3>
                    <p>Aktivnost 1: Ulaganje u materijalnu imovinu (1/2)</p>
                    <p>Aktivnost 2: Ulaganje u materijalnu imovinu (2/2)</p>
                    <p>Aktivnost 3: Marketing i promocija proizvoda i usluga</p>
                    <p>Aktivnost 4: Edukacije, stručno osposobljavanje i stjecanje novih znanja zaposlenika</p>
                    <p>Aktivnost 5: Prijava na Poziv</p>
                    <p>Aktivnost 6: Provedba postupka nabave za potrebe projekta</p>
                    <p>Aktivnost 7: Promicanje horizontalnih načela</p>
                    <p>Aktivnost 8: Upravljanje projektom</p>
                    <p>Aktivnost 9: Promidžba i vidljivost</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                    <h3>Sve aktivnosti nabave iz predmetnog projekta</h3>
                    <p>1. planiran je postupak nabave</p>
                    <p>2. određene su karakteristike roba i/ili usluga koje se planiraju nabavljati u postupku nabave</p>
                    <p>3. proveden je postupak nabave</p>
                    <p>4. odabran je isporučitelj roba i/ili usluga</p>
                    <p>5. predmetna aktivnost je provedena u cijelosti, kako je bilo planirano, sukladno propisanim pravilima
i projektnim prijedlogom (pridržavanje vremenskih rokova početka i završetka provedbe aktivnosti)</p>
                    <p>6. roba i/ili usluga je od strane odabranog isporučitelja isporučena na vrijeme, do roka određenog u
Ugovora.</p>
                    <p>7. zaključen je zapisnik o primopredaji roba i/ili usluga</p>
                    <p>8. izdan je račun od strane isporučitelja</p>
                    <p>9. račun je plaćen u roku</p>
                    <br />
                    <p>U provedbi predmetne aktivnosti nije bilo značajnih problema.</p>
                    <p>Ostvareni su rezultati koji su bili planirani - nabava roba i/ili usluga.</p>
                    <p>Održane su planirane edukacije djelatnika, u količini radnih sati koje je ponudio isporučitelj.</p>
                    <p>Nabavljena roba i/ili usluga se koristi u svakodnevnom poslovanju gospodarskog subjekta.</p>
            </div>
        </div>
        <EUnoteProject />
    </div>
    );
}

export default ProjectsComponent;