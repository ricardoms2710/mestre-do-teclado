/**********************************************************************
 * @file Arquivo com as funções dedicadas ao tratamento do Começo e
 *       Reinício do jogo
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

function Iniciar()
{
	//_LOG_INI( "botoes.js", arguments.callee.name, arguments );

    //if ( Atualiz_Tela == null ) 
    {
		//console.log("dificuldade", dificuldade);
		
        document.getElementById('digitacao').focus();
		
		let Quadros_por_Segundo = 60;
		let Taxa_Atualizacao = 1/Quadros_por_Segundo;
		let Taxa_Atualiz_Milissegundo = Taxa_Atualizacao*1000;
		Mestre.Atualiz_Tela = setInterval(function() { update(); }, Taxa_Atualiz_Milissegundo); 
        
		startTimer();
		
		//updateLevel();
		//intervalLevel();
		
        if ( Fase_1 ) Tocar('Fase_1');

    }
}
// document.getElementById('startBtn').addEventListener('click', function(){Iniciar();});

// ----------------------------------------------------------------------
document.getElementById('startBtn').addEventListener('click', function() 
{
	//_LOG_INI( "botoes.js", arguments.callee.name, arguments );

	//_LOG("Mestre.Atualiz_Tela", Mestre.Atualiz_Tela, typeof(Mestre.Atualiz_Tela) );

	if ( ( Mestre.Atualiz_Tela == null ) || ( Mestre.Atualiz_Tela == undefined ) )
	{
		var countdownElement = document.getElementById('countdown');
		countdownElement.style.display = 'block';
		
		startCountdown(countdownElement, 3, function() 
		{
			// Callback function after countdown
			countdownElement.style.display = 'none';
			Iniciar();
		});
	}
});

// ----------------------------------------------------------------------
function startCountdown(element, count, callback) 
{
	//_LOG_INI( "botoes.js", arguments.callee.name, arguments );

	Tocar('Ativar');
    update();

    var timer = setInterval(function() 
				{
					element.textContent = count;
					count--;
					if (count < 0) {
						clearInterval(timer);
						callback();
					}
				}, 1000);
}

// ******************************************************************************
/*
document.getElementById('pauseBtn').addEventListener('click', function() 
{
    clearInterval(Mestre.Atualiz_Tela);
    Mestre.Atualiz_Tela = null;
	
	Pausar('Fase_1');
	
	blinkTimer();
});
*/
// ----------------------------------------------------------------------
var blinkInterval;

function stopBlinkingTimer() 
{
	//_LOG_INI( "botoes.js", arguments.callee.name, arguments );

	var timerSpan = document.getElementById('timer-value');
		timerSpan.style.color = "black";
		
	clearInterval(blinkInterval);
}

// ----------------------------------------------------------------------
function blinkTimer() 
{
  //_LOG_INI( "botoes.js", arguments.callee.name, arguments );

  var timerSpan = document.getElementById('timer-value');
  var colors = ['red', 'blue'];
  var index = 0;

  blinkInterval = setInterval(function() 
				  {
					var color = colors[index];
					timerSpan.style.color = color;
					index = (index + 1) % colors.length;
				  }, 100); 
}


// ******************************************************************************
/*
document.getElementById('continueBtn').addEventListener('click', function() 
{
    if (!Mestre.Atualiz_Tela) 
	{
        Mestre.Atualiz_Tela = setInterval(function() 
							{
								update();
							}, 1000 / 60); 
						
		Tocar("Fase_1");
						
		stopBlinkingTimer();
    }
});
*/
// ******************************************************************************
var resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', function() 
{
	//_LOG_INI( "botoes.js", arguments.callee.name, arguments );
	
	location.reload(true);
/*
    stopTimer();

    document.getElementById("Acertos").innerHTML = "";
    document.getElementById("Erros").innerHTML = "";

    Mestre.Atualiz_Tela = null;
    Palavra_Atual = undefined;
    atualizando_palavra = false;
    document.getElementById('countdown').textContent = 3;
    
    // Clear the canvas
    draw();
    
    // Set score to 0
    document.getElementById('int_Pontuacao').textContent = '0';
	
*/
});
