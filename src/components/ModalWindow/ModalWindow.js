import React, { useState } from 'react';

import style from './ModalWindow.module.css';
import Button from '../UI/Button';
import ModalForm from './ModalForm';
import { useDispatch } from 'react-redux';
import { show } from '../../Slicers/showModalSlice';
import { addCity } from '../../Slicers/tripListSlice';

const ModalWindow = () => {
  const dispatch = useDispatch();
  const [newTripData, setNewTripData] = useState({});

  const handleClick = () => {
    if (!('city' in newTripData)) return;

    dispatch(addCity(newTripData));
    handleClose();
  };

  const handleClose = () => {
    dispatch(show());
  };

  return (
    <div className={style['modal-window']} onClick={handleClose}>
      <div
        className={style['modal-window-content']}
        onClick={(event) => event.stopPropagation()}>
        <div className={style['top-modal-window']}>
          <h4>Create trip</h4>
          <button className={style['close-button']} onClick={handleClose}>
            X
          </button>
        </div>
        <ModalForm setNewTripData={setNewTripData} />

        <div className={style['bottom-modal-window']}>
          <Button color='primary' onClick={handleClick}>
            Save
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
