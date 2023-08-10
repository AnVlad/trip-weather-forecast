import React from 'react';

import style from './ModalHeader.module.css';

const ModalHeader = ({ text, onClick }) => {
  return (
    <div className={style['modal-header']}>
      <h4>{text}</h4>
      <button className={style['close-button']} onClick={onClick}>
        X
      </button>
    </div>
  );
};

export default ModalHeader;
