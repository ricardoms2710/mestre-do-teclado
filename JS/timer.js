/**********************************************************************
 * @file Arquivo com as funções dedicadas a atualização da tela durante o jogo
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

var Timer = {
    Value: 0,
    Interval: null
}
//var timerValue = 0;
//var timerInterval;

// Function to update the timer
function updateTimer() 
{
    Timer.Value++;
    document.getElementById('timer-value').textContent = Timer.Value;
}

// Function to start the timer
function startTimer() 
{
    Timer.Value = 0;	
    Timer.Interval = setInterval(updateTimer, 1000); // Update timer every second (1000 milliseconds)
}

// Function to stop the timer
function stopTimer() 
{
    clearInterval(Timer.Interval);
}
