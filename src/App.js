import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Main from './components/Main';
import ModalWindow from './components/ModalWindow/ModalWindow';
import SideInformation from './components/SideBar/SideInformation';

import getMinMaxDate from './helpers/getMinMaxDate';
import { addCity } from './Slicers/tripListSlice';
import { setCity } from './Slicers/currentCitySlice';
import weather from './services/weather';
import Background from './components/UI/Background';
import SignInModal from './components/ModalWindow/SignInModal';

function App() {
  const showModal = useSelector((state) => state.booleanState.showModal);
  const showSignInModal = useSelector(
    (state) => state.booleanState.showSignInModal
  );
  const tripList = useSelector((state) => state.tripList);

  const dispatch = useDispatch();

  const { minDate, maxDate } = getMinMaxDate();

  useEffect(() => {
    if (tripList.length > 0) return;

    const setDefaultCity = async () => {
      const getWeather = (await weather.getWeather(minDate, maxDate, 'Berlin'))
        .data;

      const defaultCity = {
        id: 1,
        city: 'Berlin',
        img: 'https://images.unsplash.com/photo-1661868149493-bc81a81e0397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3012&q=80',
        img2: 'https://images.unsplash.com/photo-1612952547537-ac7176a8f2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
        startDate: minDate,
        endDate: maxDate,
        weather: getWeather,
        currentWeather: undefined,
      };

      dispatch(addCity(defaultCity));
      dispatch(setCity(defaultCity));
    };

    setDefaultCity();
  }, [dispatch, maxDate, minDate, tripList.length]);

  return (
    <div className='App'>
      {showModal && <ModalWindow />}
      <Main />
      <SideInformation />
      <Background />

      {showSignInModal && <SignInModal />}
    </div>
  );
}

export default App;
