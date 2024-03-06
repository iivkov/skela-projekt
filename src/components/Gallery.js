import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

import slika1 from '../assets/Crkva sv. Marka, Zagreb/crkva sv. Marka(2).jpg'
import slika2 from '../assets/Crkva sv. Marka, Zagreb/crkva sv. Marka(1).jpg'
// import slika3 from '../assets/Crkva sv. Marka, Zagreb/crkva sv. Marka.jpg'
import slika4 from '../assets/Crkva sv. Marka, Zagreb/crkva sv. Marka(3).jpg'
import slika5 from '../assets/Crkva sv. Marka, Zagreb/crkva sv. Marka(4).jpg'
import slika6 from '../assets/Crkva sv. Marka, Zagreb/crkva sv. Marka(5).jpg'
import slika7 from '../assets/Crkva sv. Marka, Zagreb/crkva sv. Marka(6).jpg'

import slika8 from '../assets/Vodotoranj, Vrbanja/vodotoranj Vrbanja(1).jpg'
import slika9 from '../assets/Vodotoranj, Vrbanja/vodotoranj Vrbanja.jpg'

import slika10 from '../assets/JANAF, Omišalj/omisalj JANAF.jpg'
import slika11 from '../assets/JANAF, Omišalj/omisalj Janaf(1).jpg'
import slika12 from '../assets/JANAF, Omišalj/omisalj Janaf(2).jpg'
// import slika13 from '../assets/JANAF, Omišalj/omisalj Janaf(3).jpg'
import slika14 from '../assets/JANAF, Omišalj/omisalj JANAF(4).jpg'
import slika15 from '../assets/JANAF, Omišalj/omisalj JANAF(5).jpg'

import slika16 from '../assets/Nadvožnjak Delnice/nadvoznjak Delnice.JPG'
import slika17 from '../assets/Nadvožnjak Delnice/nadvoznajk Delnice.JPG'
import slika18 from '../assets/Nadvožnjak Delnice/nadvoznjak Delnice(1).JPG'
import slika19 from '../assets/Nadvožnjak Delnice/nadvoznjak Delnice(2).JPG'

import slika20 from '../assets/Crkva u Ludbregu/Ludbreg.jpg'
import slika21 from '../assets/Crkva u Ludbregu/Ludbreg Crkva.jpg'

import slika22 from '../assets/Most Kupa D1, Karlovac/most Karlovac.jpg'
import slika23 from '../assets/Most Kupa D1, Karlovac/most Karlovac(1).jpg'
import slika24 from '../assets/Most Kupa D1, Karlovac/most Karlovac(2).jpg'
import slika25 from '../assets/Most Kupa D1, Karlovac/most Karlovac(3).jpg'

const images = [
    { src: slika1, alt: "Crkva sv. Marka, Zagreb" },
    { src: slika2, alt: "Crkva sv. Marka, Zagreb" },
    // { src: slika3, alt: "Crkva sv. Marka, Zagreb" },
    { src: slika4, alt: "Crkva sv. Marka, Zagreb" },
    { src: slika5, alt: "Crkva sv. Marka, Zagreb" },
    { src: slika6, alt: "Crkva sv. Marka, Zagreb" },
    { src: slika7, alt: "Crkva sv. Marka, Zagreb" },
    { src: slika8, alt: "Vodotoranj, Vrbanja" },
    { src: slika9, alt: "Vodotoranj, Vrbanja" },
    { src: slika10, alt: "Terminal JANAF, Omišalj" },
    { src: slika11, alt: "Terminal JANAF, Omišalj" },
    { src: slika12, alt: "Terminal JANAF, Omišalj" },
    // { src: slika13, alt: "Terminal JANAF, Omišalj" },
    { src: slika14, alt: "Terminal JANAF, Omišalj" },
    { src: slika15, alt: "Terminal JANAF, Omišalj" },
    { src: slika16, alt: "Nadvožnjak Delnice" },
    { src: slika17, alt: "Nadvožnjak Delnice" },
    { src: slika18, alt: "Nadvožnjak Delnice" },
    { src: slika19, alt: "Nadvožnjak Delnice" },
    { src: slika20, alt: "Crkva u Ludbregu" },
    { src: slika21, alt: "Crkva u Ludbregu" },
    { src: slika22, alt: "Most Kupa, Karlovac" },
    { src: slika23, alt: "Most Kupa, Karlovac" },
    { src: slika24, alt: "Most Kupa, Karlovac" },
    { src: slika25, alt: "Most Kupa, Karlovac" },
]

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img className="gallery-img" alt={image.alt} src={image.src} />
                        </a>
                    )
                })}
            </LightGallery>
        </div>
    );
}