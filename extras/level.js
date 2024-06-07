var colors = [
  '#777AFF',
  '#77AAFF',
  '#77CCAA',
  '#77FFAA',
  '#77FF7A',
  '#5AFF50',
  '#9AFF50',
  '#FFFF50',
  '#FF9A50',
  '#FF5A50'
];

function changeColor() {
  var level = document.getElementById('level').value;
  var cellId = "cell" + level;
  var cell = document.getElementById(cellId);
  
  var blinkInterval = setInterval(function() {
    cell.style.visibility = (cell.style.visibility === 'hidden') ? 'visible' : 'hidden';
  }, 100); // Blink every 500 milliseconds (half a second)

  // Stop blinking after 3 seconds (3000 milliseconds) and change the color
  setTimeout(function() {
    clearInterval(blinkInterval);
    cell.style.visibility = 'visible'; // Ensure the cell is visible after blinking
    cell.style.color = 'black';
	cell.style.backgroundColor = colors[level];
  }, 1000);
}
