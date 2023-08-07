import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={style.header}>
        Weather <span>Forecast</span>
      </div>
    </header>
  );
};

export default Header;
