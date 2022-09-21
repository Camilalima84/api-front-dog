import styled from "styled-components";


export const Card = styled.div`
    width: 240px;
    min-height: 210px;
    border-radius: 5px;
    background: #544A4D;
    height: 240px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    transition: ease-in-out .2s;

    &:hover {
        transform: scale(1.5, 1.5);
        position: sticky;
    }
`;
export const ContentImage = styled.div`
    height: 200px;
    width: 100%;
    background-image: ${props => props.src ? `url(${props.src})` : ''};
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
`;