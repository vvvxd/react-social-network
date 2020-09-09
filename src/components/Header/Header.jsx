import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (<header className={s.header}>
        <img
            src="https://upload.wikimedia.org/wikipedia/ru/thumb/8/8e/FC_Dynamo_Vologda_Logo.svg/1200px-FC_Dynamo_Vologda_Logo.svg.png"
            alt=""/>
    </header>);
};

export default Header;