import { useState, useEffect } from 'react';
import { api } from '../../api'

import './style.css'
import { CardDog } from '../../components/CardDog';

export const Favoritos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const req01 = api.get(`/favourites?sub_id=user-26112016`);
        const req02 = api.get('/breeds');

        Promise.all([req01, req02]).then(response => {
            setData(response[0].data)
        });

    }, []);

    
    return (
        <div className='pagina-favoritos'>
            <CardDog data={data} /> 
        </div>
    )
}