const getTimer = (date) => {
  const zeroDate = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (date === undefined) return zeroDate;

  const targetDate = new Date(date);
  const currentDate = new Date();

  if (targetDate < currentDate) {
    return zeroDate;
  }

  const timeDifferenceMill = targetDate - currentDate;

  const daysDifference = Math.floor(
    timeDifferenceMill / (1000 * 60 * 60 * 24)
  ).toString();
  const hoursDifference = Math.floor(
    (timeDifferenceMill % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ).toString();
  const minutesDifference = Math.floor(
    (timeDifferenceMill % (1000 * 60 * 60)) / (1000 * 60)
  ).toString();
  const secondsDifference = Math.floor(
    (timeDifferenceMill % (1000 * 60)) / 1000
  ).toString();

  return {
    days: daysDifference,
    hours: hoursDifference,
    minutes: minutesDifference,
    seconds: secondsDifference,
  };
};

export default getTimer;
