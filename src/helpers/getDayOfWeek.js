const getDayOfWeek = (dateStr) => {
  const date = new Date(dateStr);
  const dayOfWeek = date.getDay();

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayName = daysOfWeek[dayOfWeek];

  return dayName;
};

export default getDayOfWeek;
