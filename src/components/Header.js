import React from 'react';
import style from './Header.module.css';
import Button from './UI/Button';
import { useDispatch } from 'react-redux';
import { showSignInModal } from '../Slicers/booleanStateSlice';

const Header = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showSignInModal());
  };
  return (
    <header>
      <div className={style.header}>
        Weather <span>Forecast</span>
      </div>
      <div className={style['log-in-button']}>
        <Button onClick={handleClick}>Log in</Button>
      </div>
    </header>
  );
};

export default Header;
