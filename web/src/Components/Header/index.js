import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillHome, AiOutlineCompass } from 'react-icons/ai';
import { GrFormSearch } from 'react-icons/gr';
import { MainHeader, HeaderContent, MenuContent, InputSearch } from './styles';

import logo from '../../assets/instagram.png';
import send from '../../assets/send.svg';
import camera from '../../assets/camera.svg';
import like from '../../assets/like.svg';

function Header() {
    return (
        <>
            <MainHeader>
                <HeaderContent>
                    <div>
                        <Link to="/">
                            <img src={logo} alt="instaClone" />
                        </Link>
                    </div>
                    <InputSearch>
                        <GrFormSearch size={24} style={{ color: '#ddd' }} />
                        <input type="text" placeholder="Pesquisar" />
                    </InputSearch>
                    <MenuContent>
                        <AiFillHome size={24} />
                        <img src={send} alt="enviar publicacao" />
                        <AiOutlineCompass size={24} />
                        <img src={like} alt="enviar publicacao" />
                        <Link to="/new">
                            <img src={camera} alt="enviar publicacao" />
                        </Link>
                    </MenuContent>
                </HeaderContent>
            </MainHeader>
        </>
    );
}

export default Header;
