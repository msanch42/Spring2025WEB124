// Monica Sanchez 4-3-25
// Adapted from https://javasript.com/
// JavaScript Drum Kit
/* New/expanded information:
    use of temperate literals (backticks),
    manipulating date objects methods such as getHours, getMinutes, getSeconds
*/

 /* Replaced querySelector methods with getElementById
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
*/

   const secondHand = document.getElementById('second-hand');
   const minsHand = document.getElementById('min-hand');
   const hourHand = document.getElementById('hour-hand');
   //Added digital time
  const digitalTime = document.getElementById('digitalTime');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

 //Added AM or PM suffix 
    let suffix = "";
    if (hour < 12) {
    suffix = "am";
    } else {
    suffix = "pm";
    }
  digitalTime.textContent = "Right Now It Is: " + hour + ":" + minutes + ":" + seconds + " " + suffix 
 }

  setInterval(setDate, 1000);

  setDate();

