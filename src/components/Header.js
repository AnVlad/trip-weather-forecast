import React, { useEffect, useState } from 'react';
import style from './Header.module.css';
import Button from './UI/Button';
import { useDispatch } from 'react-redux';
import { showSignInModal } from '../Slicers/booleanStateSlice';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser({
        uid: user?.uid,
        email: user?.email,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
      });
    });

    return () => unsubscribe();
  }, []);

  console.log(user);

  const handleLogInClick = () => {
    dispatch(showSignInModal());
  };

  const handleLogOutClick = () => {
    signOut(auth);
  };
  return (
    <header>
      <div className={style.header}>
        Weather <span>Forecast</span>
      </div>
      <div className={style['log-in-button']}>
        {user?.uid ? (
          <Button onClick={handleLogOutClick}>Log out</Button>
        ) : (
          <Button onClick={handleLogInClick}>Log in</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
