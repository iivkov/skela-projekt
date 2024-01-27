import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const ReferencesComponent = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('/projekti.json')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Greška prilikom dohvaćanja podataka:', error);
        });
    }, []);
    
    return (
    <div className="main_content">
        <h1>Reference</h1>
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>godina</th>
                        <th>projekt</th>
                        <th>opis</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.godina}</td>
                        <td>{item.projekt}</td>
                        <td>{item.opis}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default ReferencesComponent;