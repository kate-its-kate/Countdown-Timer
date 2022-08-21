const newYears = "1 Jan 2023";
const daysItem = document.querySelector(".timer__item__num--days");
const hoursItem = document.querySelector(".timer__item__num--hours");
const minutesItem = document.querySelector(".timer__item__num--minutes");
const secondsItem = document.querySelector(".timer__item__num--seconds");
const allTimerItems = [daysItem, hoursItem, minutesItem, secondsItem];

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.round(totalSeconds / 3600 / 24);
  const hours = Math.round(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);
  const allTimerValues = [days, hours, minutes, formatTime(seconds)];

  for (let i = 0; i < allTimerItems.length; i++) {
    let item = allTimerItems[i];
    let val = `${allTimerValues[i]}`;
    item.innerHTML = `${val}`;
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000);
