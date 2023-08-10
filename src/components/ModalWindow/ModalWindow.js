import React, { useState } from 'react';

import style from './ModalWindow.module.css';
import Button from '../UI/Button';
import ModalForm from './ModalForm';
import { useDispatch } from 'react-redux';
import { showModal } from '../../Slicers/booleanStateSlice';
import { addCity } from '../../Slicers/tripListSlice';
import ModalWrap from './ModalWrap';
import ModalHeader from './ModalHeader';

const ModalWindow = () => {
  const dispatch = useDispatch();
  const [newTripData, setNewTripData] = useState({});

  const handleClick = () => {
    if (!('city' in newTripData)) return;

    dispatch(addCity(newTripData));
    handleClose();
  };

  const handleClose = () => {
    dispatch(showModal());
  };

  return (
    <ModalWrap onClick={handleClose}>
      <div
        className={style['modal-window-content']}
        onClick={(event) => event.stopPropagation()}>
        <ModalHeader text={'Create trip'} onClick={handleClose} />
        <ModalForm setNewTripData={setNewTripData} />

        <div className={style['bottom-modal-window']}>
          <Button color='primary' onClick={handleClick}>
            Save
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </div>
      </div>
    </ModalWrap>
  );
};

export default ModalWindow;
