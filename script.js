// Set the target date for the countdown as my birthday date 
const targetDate = new Date("2025-06-12T23:59:59").getTime();
console.log("the date target is my birthday datwte ")

// Function to update the countdown every second
function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the HTML elements with the countdown values
  document.querySelector(".days").textContent = days.toString().padStart(2, '0');
  document.querySelector(".hours").textContent = hours.toString().padStart(2, '0');
  document.querySelector(".minutes").textContent = minutes.toString().padStart(2, '0');
  document.querySelector(".seconds").textContent = seconds.toString().padStart(2, '0');

  // Stop the countdown if timeRemaining reaches zero
  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    document.querySelector(".days").textContent = "00";
    document.querySelector(".hours").textContent = "00";
    document.querySelector(".minutes").textContent = "00";
    document.querySelector(".seconds").textContent = "00";
  }
}

// Start the countdown and update every second
const countdownInterval = setInterval(updateCountdown, 1000);
