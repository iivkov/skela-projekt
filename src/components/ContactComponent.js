import React, {useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import '../App.css';

const ContactComponent = () => {
    const form = useRef();
    const SERVICE_ID = "service_gyvkuei";
    const TEMPLATE_ID = "template_3yxu6dj";
    const PUBLIC_KEY = "TgUBeM3AG0W9iakEI";
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
          .then(
            (result) => {
              alert('Poruka je uspješno poslana! Ubrzo ćemo Vam odgovoriti.');
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

	return (
    <div className="main_content">
        <h1>Kontakt</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <form class="contact" ref={form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="sender_name">Ime i prezime:</label>
                        <input type="text" id="sender_name" name="sender_name" placeholder="Unesite svoje ime i prezime" required />
                    </div>
                    <div>
                        <label htmlFor="sender_email">E-pošta:</label>
                        <input type="email" id="sender_email" name="sender_email" placeholder="Unesite svoju adresu e-pošte" required />
                    </div>
                    <div>
                        <label htmlFor="sender_subject">Predmet:</label>
                        <input type="text" id="sender_subject" name="sender_subject" placeholder="Unesite predmet poruke" required/>
                    </div>
                    <div>
                        <label htmlFor="sender_message">Poruka:</label>
                        <textarea id="sender_message" name="sender_message" placeholder="Napišite svoju poruku" rows="8" required ></textarea>
                    </div>
                    <button className="submit_button" type="submit">Pošalji</button>
                </form>
            </div>
        {/* <div className="spacer"></div> */}
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <iframe title="Lokacija tvrtke" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.1892330470378!2d15.92404430689265!3d45.75700915865068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d5413e385dff%3A0x2086d59e596d2f55!2sSkela%20projekt!5e0!3m2!1shr!2shr!4v1705915309088!5m2!1shr!2shr" width="100%" height="400" style={{border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade"}}></iframe>
            </div>
        </div>
    </div> 
	);
};

export default ContactComponent;