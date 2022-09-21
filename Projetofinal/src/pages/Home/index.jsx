import { useEffect, useState } from 'react'

import { api } from '../../api';
import './style.css';

import { CardDog } from '../../components/CardDog';

export const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
       api.get('/breeds').then(response => {
        setData(response.data);
       })
    }, []);

    return (
        <div className='pagina-home'>
            <CardDog data={data} />
        </div>
    )
}