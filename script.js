function displayTime() {
  let timeElem = document.querySelector("#time");

  let currentTime = new Date();
  let hour = currentTime.getHours();
  let min = currentTime.getMinutes();

  let time = `${hour - 12}:${min}`;

  if (hour > 11) {
    console.log("pm");
    time += " pm";
  } else if (hour < 12) {
    console.log("am");
    time += " am";
  }
  console.log(time);
  timeElem.innerHTML = time;
}
displayTime();

const milisc = 1 * 60 * 1000;
setInterval(displayTime, milisc);

// 23> 11 ; pm
// 0 > 11  am ;

/**
 * 24-hours -
 *
 * 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 0
 * ------------------AM------------------------|-----------------------------PM----------------------------|-AM-
 */
