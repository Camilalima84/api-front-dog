

import './style.css';

export const Header = ({ setPaginaAtual }) => {
    return (
        <header className='header-dogs'>
            <ul className='listagem'>
                <li onClick={() => setPaginaAtual('Home')}>HOME</li>
                <li onClick={() => setPaginaAtual('Favoritos')}>FAVORITOS</li>
            </ul>
        </header>
    )
}