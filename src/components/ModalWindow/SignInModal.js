import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import ModalWrap from './ModalWrap';
import ModalHeader from './ModalHeader';

import { app } from '../../firebase';

import style from './SignInModal.module.css';
import { useDispatch } from 'react-redux';
import { showSignInModal } from '../../Slicers/booleanStateSlice';
import Button from '../UI/Button';

const SignInModal = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const handleClose = () => {
    dispatch(showSignInModal());
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log('sign in error:', error);
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
