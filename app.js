const clock = () => {
    let hour = document.querySelector("#h");
    let minutes = document.querySelector("#m");
    let second = document.querySelector("#s");
    let me = document.querySelector("#M");
    let dd = new Date();
    let h = dd.getHours();
    let m = dd.getMinutes();
    let s = dd.getSeconds();
  
    h > 12 ? (me.innerHTML = "PM") : (me.innerHTML = "AM");
  
    if (h > 12) {
      h = h - 12;
    }
    if (h == 0) {
      h = h + 12;
    }
  
    hour.innerHTML = h;
    minutes.innerHTML = m;
    second.innerHTML = s;
  };
  
  setInterval(clock, 500);
  
  // geshman1343
  