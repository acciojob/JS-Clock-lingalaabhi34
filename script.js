//your code here
// Get references to the clock hands
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function updateClock() {
  // Get the current time
  const now = new Date();

  // Get the current hour, minute, and second
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the degrees for each hand
  const hourDegrees = (360 / 12) * (hours % 12) + (360 / 12) * (minutes / 60);
  const minuteDegrees = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondDegrees = (360 / 60) * seconds;

  // Apply the rotation to the hands
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call updateClock once to set the initial position of the hands
updateClock();
