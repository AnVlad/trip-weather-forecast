const getMinMaxDate = () => {
  const minDate = new Date();

  // minDate.setDate(minDate.getDate() + 23); //for test

  const maxDate = new Date();
  maxDate.setDate(minDate.getDate() + 15);

  return {
    minDate: minDate.toISOString().split('T')[0],
    maxDate: maxDate.toISOString().split('T')[0],
  };
};

export default getMinMaxDate;
