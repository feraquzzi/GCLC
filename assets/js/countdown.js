
// Set the date we're counting down to
var countDownDate = new Date("Apr 27, 2024 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  var distance = countDownDate - now;
  // Find the distance between now and the count down date
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.querySelector(".topd").innerHTML = days;
  document.querySelector(".toph").innerHTML = hours;
  document.querySelector(".topm").innerHTML = minutes;
  document.querySelector(".tops").innerHTML = seconds;
  
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("expired").innerHTML = "EXPIRED";
  }
}, 1000);
