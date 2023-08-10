import React from 'react';
import style from './ModalWrap.module.css';

const ModalWrap = ({ children, onClick }) => {
  return (
    <div className={style['modal-window']} onClick={onClick}>
      {children}
    </div>
  );
};

export default ModalWrap;
