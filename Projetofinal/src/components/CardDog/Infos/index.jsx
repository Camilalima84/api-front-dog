import { useState } from 'react';
import { HiHeart, HiOutlineHeart, HiChevronDown } from 'react-icons/hi';
import { api } from '../../../api';

import './style.css';

export const InfosComp = ({ infos }) => {
    const [isFavorit, setIsFavorit] = useState(false);
    const [isLarge, setIsLarge] = useState(false);
    console.log(infos)

    const changeFavorit = (param) => {
        setIsFavorit(!isFavorit)
        api.post('/favourites', { image_id: infos.image.id, sub_id: 'user-26112016' }).then(response => {
            console.log(response)
        })
    }
    return (
      
        <div className='card-infos'>
            <div className='preview-items'>
                <label className='label-name'>{infos.name}</label>
                <div className='actions'>
                    {isFavorit ? 
                    <HiHeart onClick={changeFavorit} size={25} /> : 
                    <HiOutlineHeart onClick={changeFavorit} size={25} />}
                    <HiChevronDown onClick={() => setIsLarge(!isLarge)} size={25} />
                </div>
            </div>
            {isLarge && (
                <div className='extra-infos'>
                    <label>tempo de vida: {infos.life_span}</label>
                    <label>raça: {infos.breed_group}</label>
                </div>
            )}
        </div>

    )
}