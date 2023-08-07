import React from 'react';
import style from './Button.module.css';

const Button = ({ children, color, onClick }) => {
  return (
    <button
      className={`${style[`${color}`]} ${style.button} `}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
