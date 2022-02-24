export const processDate = date => {
  const hour = new Date(date * 1000).getHours();
  if (hour < 1) return new Date(date * 1000).getMinutes() + 'm';
  if (hour > 24) return new Date(date * 1000).getDay() + 'd';
  return hour + 'h';
};
