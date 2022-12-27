const clock = () => {
  let hourItem = document.querySelector("#h");
  let minuteItem = document.querySelector("#m");
  let secondItem = document.querySelector("#s");
  let meridianItem = document.querySelector("#M");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours > 12
    ? (meridianItem.innerHTML = "PM")
    : (meridianItem.innerHTML = "AM");
  hours > 12 ? (hours = hours - 12) : (hours = hours);
  hours == 0 ? (hours = hours + 12) : (hours = hours);

  hourItem.innerHTML = hours;
  minuteItem.innerHTML = minutes;
  secondItem.innerHTML = seconds;
};

setInterval(clock, 500);
