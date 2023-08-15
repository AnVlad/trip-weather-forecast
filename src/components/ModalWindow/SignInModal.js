import React from 'react';

import ModalWrap from './ModalWrap';
import ModalHeader from './ModalHeader';

import style from './SignInModal.module.css';
import { useDispatch } from 'react-redux';
import { showSignInModal } from '../../Slicers/booleanStateSlice';
import { auth, googleProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

import Button from '../UI/Button';

const SignInModal = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(showSignInModal());
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch(showSignInModal());

      console.log(result);
    } catch (error) {
      console.error('sign in error:', error);
    }
  };

  return (
    <ModalWrap onClick={handleClose}>
      <div
        className={style['sign-in-body']}
        onClick={(event) => event.stopPropagation()}>
        <ModalHeader text='Sign in' onClick={handleClose} />
        <div className={style['sign-in-content']}>
          <h4>Sign in by one of the following methods:</h4>
          <Button onClick={handleGoogleSignIn}>Google</Button>
        </div>
      </div>
    </ModalWrap>
  );
};

export default SignInModal;
