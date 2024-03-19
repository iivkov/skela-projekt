import React from 'react';
import '../App.css';
import Petrinja from '../assets/Petrinja.jpg';
import EUnoteSite from './EUnoteSite';
import EUnoteProject from './EUnoteProject';

const ProjectsComponent = () => {
    
    return (
    <div className="main_content">
        <EUnoteSite/>
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
        </div>
        <div className="container">
            <div className="box-EU">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: 18.04.2022.</p>
                <p>Kraj provedbe: 18.11.2023.</p>
                <p>Trajanje provedbe (mjeseci): 19</p>
            </div>
            {/* <div className="spacer"></div> */}
            <div className="box-EU">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): 204.074,10</p>
                <p>Ukupna bespovratna sredstva (EUR): 173.462,98</p>
                <p>Ukupna vrijednost projekta (EUR): 258.494,53</p>
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
                <p>5. predmetna aktivnost je provedena u cijelosti, kako je bilo planirano, sukladno propisanim pravilima i projektnim prijedlogom (pridržavanje vremenskih rokova početka i završetka provedbe aktivnosti)</p>
                <p>6. roba i/ili usluga je od strane odabranog isporučitelja isporučena na vrijeme, do roka određenog u Ugovoru.</p>
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
        <div className="container">
            <div className="activity-box">
                <h3>Podatci o projektu</h3>
                <p>Kod projekta: KK.08.2.1.16.0176</p>
                <p>Posredničko tijelo razine 1 (PT1): Ministarstvo regionalnoga razvoja i fondova Europske unije</p>
                <p>Posredničko tijelo razine 2 (PT2): Središnja agencija za financiranje i ugovaranje programa i projekata Europske unije</p>
                <p>Početak provedbe: 18.04.2022.</p>
                <p>Kraj provedbe: 18.11.2023.</p>
                <p>Trajanje provedbe (mjeseci): 19</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>Podatci o korisniku</h3>
                <p>Prijavitelj: SKELA PROJEKT d.o.o. za građenje, usluge i trgovinu</p>
                <p>Jedinstveni broj prijavitelja: 13198820346</p>
                <p>Adresa: Ulica Kate Mlinarić 4, Zagreb</p>
                <p>OIB: 13198820346</p>
                <p>E-pošta: blagogudelj@gmail.com</p>
                <p>Telefon: +385 995351688</p>
                <p>Odgovorna osoba: BLAGO GUDELJ</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): 204.074,10</p>
                <p>Ukupna bespovratna sredstva (EUR): 173.462,98 (EU sufinanciranje)</p>
                <p>Ukupna vrijednost projekta (EUR): 258.494,53</p>
            </div>
        </div>
        <div className="bottom-border" / >
        <div className="container">
            <div className="activity-box">
                <p>Prijavitelj, gospodarski subjekt SKELA PROJEKT d.o.o. za građenje, usluge i trgovinu; OIB:  13198820346; sa sjedištem na adresi: Zagreb (Grad Zagreb), 
                    Ulica Kate Mlinarić 4 ovim projektnim prijedlogom želi u provedbi projekta provesti niz aktivnosti, kojima bi nabavio nove robe i/ili usluge kako slijedi:</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>AKTIVNOST: 1. Ulaganje u materijalnu imovinu; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Regalno dizalo za građevinarstvo, 1 kom</p>
                <p>- Građevinska skela komplet, 1 kom</p>
                <p>- Laptop, 1 kom</p>
                <p>Planirano je da navedena aktivnost traje: *9 mjeseci*.</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave Prijavitelj će povećati svoje kapacitete za pružanje usluga, 
                    očuvat će se postojeća radna mjesta, otvorit će se nova radna mjesta, povećat će se prihod Prijavitelja, konkurentnost na postojećem i 
                    novom mikro i makro tržištu. Djelatnici Prijavitelja će steći nova znanja povezana s korištenjem novih roba i/ili usluga koje se nabavljaju. 
                    Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>AKTIVNOST: 3. Marketing i promocija proizvoda i usluga; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi izrade mrežne stranice</p>
                <p>- Troškovi izrade stranice na FACEBOOK-u</p>
                <p>- Troškovi reklamnih majica kratkih rukava</p>
                <p>- Troškovi reklamnih kapa</p>
                <p>- Troškovi reklamnih kemijskih olovaka</p>
                <p>Planirano je da navedena aktivnost traje: *6 mjeseci*.</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave Prijavitelj će povećati svoju vidljivost na mikro i makro tržištu, 
                    kao i na društvenim mrežama. Djelatnici Prijavitelja će steći nova znanja povezana s korištenjem novih roba i/ili usluga koje se nabavljaju. 
                    Promidžbeni materijal dijelit će se poslovnim partnerima. Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, a proračunom je 
                    određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>AKTIVNOST: 4. Edukacije, stručno osposobljavanje i stjecanje novih znanja zaposlenika (ukupna vrijednost bez PDV-a: 120.000,00 kn); u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi stjecanja znanja iz područja uvođenja novih proizvodnih procesa</p>
                <p>- Troškovi stjecanja znanja iz područja organizacije poslovanja</p>
                <p>Planirano je da navedena aktivnost traje: *6 mjeseci*.</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave djelatnici Prijavitelja će steći nova stručna znanja i biti u prilici 
                    rada sa novim proizvodnim procesima i organizacijom poslovanja, što do završetka ovog projekta nije bio slučaj. Složeni postupak provedbe svih nabava
                    obavit će vanjski stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>AKTIVNOST: 5. Prijava na Poziv; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi usluga pripreme projektnog prijedloga (vanjski stručnjak)</p>
                <p>Planirano je da navedena aktivnost traje: *1 mjesec, ali prije predaje projektnog prijedloga u službenu aplikaciju*.</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave članovi projektnog tima će steći nova stručna. Složeni postupak provedbe 
                    svih nabava obavit će vanjski stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>AKTIVNOST: 7. Provedba postupka nabave za potrebe projekta; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi povezani s provedbom postupka nabave za potrebe projekta (vanjski stručnjak)</p>
                <p>Planirano je da navedena aktivnost traje: *3 mjeseca*.</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave članovi projektnog tima će steći nova stručna. Složeni postupak provedbe svih 
                    nabava obavit će vanjski stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>AKTIVNOST: 9. Upravljanje i rad na projektu, a) troškovi usluga za upravljanje projektom; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi usluga za upravljanje projektom (vanjski stručnjak)</p>
                <p>Planirano je da navedena aktivnost traje: *9 mjeseci*</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave članovi projektnog tima će steći nova stručna. Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, a proračunom 
                    je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>AKTIVNOST: 10. Promicanje horizontalnih načela; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi vezani uz aktivnosti promicanja horizontalnih načela</p>
                <p>Planirano je da navedena aktivnost traje: *6 mjeseci*.</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave djelatnici Prijavitelja će steći nova stručna povezana s ranjivim skupinama društva. Složeni postupak provedbe svih nabava 
                    obavit će vanjski stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>AKTIVNOST: 11. Informiranje i vidljivost; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Informiranje i vidljivost</p>
                <p>Planirano je da navedena aktivnost traje: *9 mjeseci*.</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave Prijavitelj će povećati svoju vidljivost na mikro i makro tržištu, kao i na društvenim mrežama. Djelatnici Prijavitelja će steći 
                    nova znanja povezana s korištenjem novih roba i/ili usluga koje se nabavljaju. Promidžbeni materijal dijelit će se poslovnim partnerima. Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, 
                    a proračunom je određena cijena njegovog rada.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <p>Planirano je da provedba projektnog prijedloga ukupno traje 9 mjeseci.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>Nova tržišta:</h3>
                <p>MIKRO TRŽIŠTE: grad Petrinja i njegova naselja.</p>
                <p>MAKRO TRŽIŠTE: ŽUPANIJA - III. SISAČKO-MOSLAVAČKA; ŽUPANIJA - IV. KARLOVAČKA; ŽUPANIJA - I. ZAGREBAČKA; ŽUPANIJA - XXI. GRAD ZAGREB.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <p>IZVOZ: Prijavitelj nije izvozio robe i/ili usluge.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <p>Prijavitelj će tijekom provedbe projektnog prijedloga i nakon njega, voditi računa o utjecaju projekta na okoliš, i to:</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>1. utjecaj na ZRAK:</h3>
                <p>- tijekom provedbe: 2 (veoma mali utjecaj),</p>
                <p>- nakon provedbe: 2 (veoma mali utjecaj);</p>
                <p>OPIS: doći će do povećanja onečišćenja zraka ispušnim plinovima zbog povećanja poslova koje Prijavitelj izvodi. Novim nabavama će se smanjiti negativan utjecaj projekta na ZRAK.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>2. utjecaj na TLO:</h3>
                <p>- tijekom provedbe: 2 (veoma mali utjecaj),</p>
                <p>- nakon provedbe: 3 (mali utjecaj);</p>
                <p>OPIS: doći će do povećanja onečišćenja tla zbog tehničkih voda koje nastaju tijekom rada i to radi povećanja poslova koje Prijavitelj izvodi.
                    Novim nabavama će se smanjiti negativan utjecaj projekta na TLO.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>3. utjecaj na VODA:</h3>
                <p>- tijekom provedbe: 2 (veoma mali utjecaj),</p>
                <p>- nakon provedbe: 2 (veoma mali utjecaj);</p>
                <p>OPIS: doći će do gotovo nikakvoga ili izrazito malenoga onečišćenja podzemnih voda koje nastaju tijekom rada i to radi povećanja poslova 
                    koje Prijavitelj izvodi. Novim nabavama će se smanjiti negativan utjecaj projekta na VODA.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>4. utjecaj na KULTURNA BAŠTINA:</h3>
                <p>- tijekom provedbe: 0 (nema utjecaja),</p>
                <p>- nakon provedbe: 0 (nema utjecaja);</p>
                <p>OPIS: ne će doći do bilo kakvog negativnog utjecaja rada i to radi povećanja poslova koje Prijavitelj izvodi. 
                    Novim nabavama će se smanjiti negativan utjecaj projekta na KULTURNA BAŠTINA</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>5. utjecaj na OTPAD:</h3>
                <p>- tijekom provedbe: 2 (veoma mali utjecaj),</p>
                <p>- nakon provedbe: 2 (veoma mali utjecaj);</p>
                <p>OPIS: doći će do povećanja stvaranja otpada koji će nastati tijekom rada i to radi povećanja poslova koje Prijavitelj izvodi. 
                    Svakodnevno će se otpad selektirati i odlagati na za to predviđeno odlagalište. Novim nabavama će se smanjiti negativan utjecaj projekta na OTPAD.</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>6. utjecaj na ZDRAVLJE:</h3>
                <p>- tijekom provedbe: 1 (zanemarivi utjecaj),</p>
                <p>- nakon provedbe: 1 (zanemarivi utjecaj);</p>
                <p>OPIS: neće doći do povećanja negativnog utjecaja na zdravlje ljudi tijekom rada i to radi povećanja poslova koje Prijavitelj izvodi. 
                    Novim nabavama će se smanjiti negativan utjecaj projekta na ZDRAVLJE.</p>
            </div>
        </div>
        <EUnoteProject />
    </div>
    );
}

export default ProjectsComponent;