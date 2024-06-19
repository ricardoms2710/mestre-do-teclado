/**********************************************************************
 * @file Arquivo com as funções dedicadas ao ajuste de nível durante o jogo
 * @author Ricardo de Magalhães Simões
 * @version 0.4
 * 
 * @requires
 * @link https://jsdoc.app
 * @link https://mermaid.live (https://mermaid.js.org/syntax/flowchart.html)
 */

//===========
"use strict";
//===========

var colors = [ '#777AFF','#77AAFF','#77CCAA','#77FFAA','#77FF7A',
			   '#5AFF50','#9AFF50','#FFFF50','#FF9A50','#FF5A50' ];

var blinkInterval = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

// ----------------------------------------------------------------------
function btnLevel()
{
	//_LOG_INI( "mestre.js", arguments.callee.name, arguments );

	var level = parseInt(document.getElementById("inp-level").value);
	inactiveLevels();
	activeLevel(level);
}

// ----------------------------------------------------------------------
function setBlink( level )
{
	//_LOG_INI( "mestre.js", arguments.callee.name, arguments );

	//console.log("setBlink", level);
	var cellId = "cell" + i;
	var cell = document.getElementById(cellId);
		cell.style.visibility = (cell.style.visibility === 'hidden') ? 'visible' : 'hidden';
}

// ----------------------------------------------------------------------
function setLevel( level )
{
	//_LOG_INI( "mestre.js", arguments.callee.name, arguments );

	clearInterval(blinkInterval[level]);
	var cellId = "cell" + i;
	var cell = document.getElementById(cellId);
		cell.style.visibility = 'visible'; // Ensure the cell is visible after blinking
		cell.style.color = 'black';
		cell.style.backgroundColor = colors[level];
		
	Mestre.velocidade = level;
}

// ----------------------------------------------------------------------
function activeLevel(level) 
{
	//_LOG_INI( "mestre.js", arguments.callee.name, arguments );

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
	//_LOG_INI( "mestre.js", arguments.callee.name, arguments );

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
function calculateLevel( p_Pontuacao, timer )
{
	//_LOG_INI( "mestre.js", arguments.callee.name, arguments );

	var ratio = p_Pontuacao / timer;
	//console.log('p_Pontuacao/timer Ratio:', ratio);
	
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
	//_LOG_INI( "mestre.js", arguments.callee.name, arguments );

	//console.log('updating...');
	
	var pontuacao = parseInt(document.getElementById('int_Pontuacao').innerText);
	var timer = parseInt(document.getElementById('timer-value').innerText);

	if (timer !== 0) 
	{
		calculateLevel( pontuacao, timer );
	} 
	//else 
	//{
	//	console.log('Timer value is zero.');
	//}
}

// ----------------------------------------------------------------------
function intervalLevel()
{
	//_LOG_INI( "mestre.js", arguments.callee.name, arguments );
	
	setInterval( updateLevel, 10000); // Update every 10 seconds
}
