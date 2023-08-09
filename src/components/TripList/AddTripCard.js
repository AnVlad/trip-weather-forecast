import React from 'react';

import style from './AddTripCard.module.css';
import { useDispatch } from 'react-redux';
import { showModal } from '../../Slicers/booleanStateSlice';

const AddTripCard = () => {
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(showModal());
  };

  return (
    <button className={style.card} onClick={handleShow}>
      <div className={style.information}>
        <p>+</p>
        <p>Add trip</p>
      </div>
    </button>
  );
};

export default AddTripCard;
