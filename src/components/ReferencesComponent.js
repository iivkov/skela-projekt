import React, {useState, useEffect } from 'react';
import '../App.css';
import slika from '../assets/omisalj Janaf(3).jpg';
import ReferenceList from './ReferenceList';

const ReferencesComponent = () => {

    // const referencesData = {
    //     references: [
    //       {
    //         id: 1,
    //         year: 2023,
    //         location: "Zagreb, Hrvatska",
    //         description: "Izgradnja stambene zgrade",
    //         images: [
    //           "image1.jpg",
    //           "image2.jpg",
    //           "image3.jpg"
    //         ]
    //       },
    //       {
    //         id: 2,
    //         year: 2023,
    //         location: "Zagreb, Hrvatska",
    //         description: "Izgradnja stambene zgrade",
    //         images: [
    //           "image1.jpg",
    //           "image2.jpg",
    //           "image3.jpg"
    //         ]
    //       },
    //       {
    //         id: 3,
    //         year: 2023,
    //         location: "Zagreb, Hrvatska",
    //         description: "Izgradnja stambene zgrade",
    //         images: [
    //           "image1.jpg",
    //           "image2.jpg",
    //           "image3.jpg"
    //         ]
    //       },
    //       // Dodajte druge reference prema potrebi
    //     ]
    //   };
    
    //   return (
    //     <div>
    //       <h1>Građevinske Reference</h1>
    //       <ReferenceList references={referencesData.references} />
    //     </div>
    //   );
    // };

    return (
        <div className="main_content">
                <h1>Reference</h1>
                <div className="container">
                <table>
                    <tr>
                        <td>godina</td>
                        <td>projekt</td>
                        <td>opis</td>
                    </tr>
                </table>
                </div>
            </div>
    );
}

export default ReferencesComponent;