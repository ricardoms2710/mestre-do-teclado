
var colors = [ '#777AFF','#77AAFF','#77CCAA','#77FFAA','#77FF7A',
			   '#5AFF50','#9AFF50','#FFFF50','#FF9A50','#FF5A50' ];

var blinkInterval = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

// ----------------------------------------------------------------------
function btnLevel()
{
	var level = parseInt(document.getElementById("inp-level").value);
	inactiveLevels();
	activeLevel(level);
}

// ----------------------------------------------------------------------
function setBlink( level )
{
	//console.log("setBlink", level);
	var cellId = "cell" + i;
	var cell = document.getElementById(cellId);
		cell.style.visibility = (cell.style.visibility === 'hidden') ? 'visible' : 'hidden';
}

// ----------------------------------------------------------------------
function setLevel( level )
{
	//console.log("setLevel", level);
	clearInterval(blinkInterval[level]);
	var cellId = "cell" + i;
	var cell = document.getElementById(cellId);
		cell.style.visibility = 'visible'; // Ensure the cell is visible after blinking
		cell.style.color = 'black';
		cell.style.backgroundColor = colors[level];
		
	velocidade = level;
}

// ----------------------------------------------------------------------
function activeLevel(level) 
{
	//console.log("activeLevel", blinkInterval);
	for(i=0;i<=level;i++)
	{
		//blinkInterval[i] = setInterval(function(){setBlink(i);}, 100);
		//setTimeout( function(){setLevel(i);}, 1000);
		
		setLevel(i);
	}
}

// ----------------------------------------------------------------------
function inactiveLevels()
{
	for(i=0;i<10;i++)
	{
		var cellId = "cell" + i;
		var cell = document.getElementById(cellId);
		cell.style.visibility = 'visible'; // Ensure the cell is visible after blinking
		cell.style.color = 'white';
		cell.style.backgroundColor = "black";
		
		clearInterval(blinkInterval[i]);
	}
}

// ----------------------------------------------------------------------
function calculateLevel( score, timer )
{
	var ratio = score / timer;
	//console.log('Score/Timer Ratio:', ratio);
	
	//ratio = Math.round(ratio);
	
	inactiveLevels();
	
	if ( ratio > 0.1 )
	{
		     if ( ratio > (4.50) ) { activeLevel(9); }
		else if ( ratio > (3.60) ) { activeLevel(8); }
		else if ( ratio > (2.90) ) { activeLevel(7); }
		else if ( ratio > (2.20) ) { activeLevel(6); }
		else if ( ratio > (1.60) ) { activeLevel(5); }
		else if ( ratio > (1.10) ) { activeLevel(4); }
		else if ( ratio > (0.70) ) { activeLevel(3); }
		else if ( ratio > (0.40) ) { activeLevel(2); }
		else if ( ratio > (0.20) ) { activeLevel(1); }
		else if ( ratio > (0.10) ) { activeLevel(0); }
	}
	
}

// ----------------------------------------------------------------------
function updateLevel() 
{
	//console.log('updating...');
	
	var score = parseInt(document.getElementById('score-value').innerText);
	var timer = parseInt(document.getElementById('timer-value').innerText);

	if (timer !== 0) 
	{
		calculateLevel( score, timer );
	} 
	//else 
	//{
	//	console.log('Timer value is zero.');
	//}
}

// ----------------------------------------------------------------------
function intervalLevel()
{
	setInterval( updateLevel, 10000); // Update every 10 seconds
}


// ******************************************************************************
/*
var Niveis = ["#000000", 
			  "#00FF00", "#44FF00", "#88FF00", "#BBFF00", "#FFFF00",
			  "#FFFF00", "#FFBB00", "#FF8800", "#FF4400", "#FF0000"];

function Nivelar()
{
	const valor = parseInt(Nivelando.value);
	Nivelando.style.background = Niveis[valor];
	//console.log("Nivelar", valor, Niveis[valor]);
	
	dificuldade = valor;
}

var Nivelando = document.getElementById("dificuldade");
	Nivelando.addEventListener("input", Nivelar);
	//Nivelando.addEventListener("change", Nivelar);
*/