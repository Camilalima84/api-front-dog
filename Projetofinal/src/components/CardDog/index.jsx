
import { useState } from 'react';

import { ContentImage, Card } from './style';

import { InfosComp } from './Infos';

export const CardDog = ({ data }) => {

    return (
        <>
            {data && data.map((item, key) => {
                return (
                    <Card key={key} >
                        <ContentImage src={item?.image?.url} />
                        <InfosComp infos={item} />
                    </Card>
                )
            })}</>
    )
}