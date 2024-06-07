var timerValue = 0;
var timerInterval;

// Function to update the timer
function updateTimer() 
{
    timerValue++;
    document.getElementById('timer-value').textContent = timerValue;
}

// Function to start the timer
function startTimer() 
{
    timerValue = 0;	
    timerInterval = setInterval(updateTimer, 1000); // Update timer every second (1000 milliseconds)
}

// Function to stop the timer
function stopTimer() 
{
    clearInterval(timerInterval);
}
