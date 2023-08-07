const toDoubleDigits = (digit) => {
  if (!digit) return '00';
  return Number(digit) < 10 ? `0${digit}` : digit;
};

export default toDoubleDigits;
