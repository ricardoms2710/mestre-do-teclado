/*******************************************************************************
 * @author Ricardo de Magalhães Simões (https://www.instagram.com/ricardoms2710)
 * @license  CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0)
 * @link https://ricardoms2710.github.io/mestre-do-teclado
 * 
 * @file Arquivo com as funções dedicadas ao tratamento do Começo e
 *       Reinício do jogo
 * @version 0.5 (20/06/2024)
 * 
 * @tutorial
 * @link https://jsdoc.app
 * @link https://mermaid.live (https://mermaid.js.org/syntax/flowchart.html)
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 * @link https://www.w3schools.com/jsref/dom_obj_event.asp
 */

//===========
"use strict";
//===========

var Cronometro_Piscando;

/**********************************************************************
 * @function Iniciar
 * @version 0.5 (20/06/2024)
 * @description
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Iniciar()
{
	//_LOG_INI( "botoes.js", arguments.callee.name, arguments );

	_ByID('txt_Digitacao').focus();
	
	let Quadros_por_Segundo = 60;
	let Taxa_Atualizacao = 1/Quadros_por_Segundo;
	let Taxa_Atualiz_Milissegundo = Taxa_Atualizacao*1000;
	
	Mestre.Atualiz_Tela = setInterval(function() { Mestre_Atualizar_Jogo(); }, Taxa_Atualiz_Milissegundo); 
	
	Crono_Iniciar();
	
	if ( Fase_1 ) Tocar('Fase_1');
}

/**********************************************************************
 * @function Comecar
 * @version 0.5 (20/06/2024)
 * @description
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
//_ByID('startBtn').addEventListener( 'click', function() { ... } );
function Comecar()
{
	//_LOG_INI( "botoes.js", arguments.callee.name, arguments );

	//_LOG("Mestre.Atualiz_Tela", Mestre.Atualiz_Tela, typeof(Mestre.Atualiz_Tela) );

	if ( ( Mestre.Atualiz_Tela === null ) || ( Mestre.Atualiz_Tela === undefined ) )
	{
		var int_3_2_1 = _ByID('int_3_2_1');
			int_3_2_1.style.display = 'block';
		
			//! A contagem regressiva inicial é executada com uma função de
			//! 'desligamento' do contador 3,2,1, e que também iniciará o jogo em si!
			Contagem_3_2_1(int_3_2_1, 3, function() 
			{
				int_3_2_1.style.display = 'none';
				Iniciar();
			});
	}
}

/**********************************************************************
 * @function Contagem_3_2_1
 * @version 0.5 (20/06/2024)
 * @description
 * @param {*} [cont_3_2_1=null]
 * @param {number} [count=0]
 * @param {*} func_Iniciar_Jogo
 * @returns 
 *! @throws 
 * @summary 
 */
function Contagem_3_2_1(cont_3_2_1=null, contagem=0, func_Iniciar_Jogo) 
{
	//_LOG_INI( "botoes.js", arguments.callee.name, arguments );

	Tocar('Ativar');
    Mestre_Atualizar_Jogo();

    var contador = setInterval(function() 
					{
						cont_3_2_1.textContent = contagem;
						contagem--;
						if (contagem < 0) 
						{
							clearInterval(contador);
							func_Iniciar_Jogo();
						}
					}, 1000);
}

/**********************************************************************
 * @function Cronometro_Ativo
 * @version 0.5 (20/06/2024)
 * @description Função acionada depois de uma PAUSA do jogo, quando é reiniciado
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Cronometro_Ativo() 
{
	//_LOG_INI( "botoes.js", arguments.callee.name, arguments );

	var cronometro = _ByID("int_Cronometro");
		cronometro.style.color = "black";
		
	clearInterval(Cronometro_Piscando);
}

/**********************************************************************
 * @function Cronometro_Piscar
 * @version 0.5 (20/06/2024)
 * @description Função acionada para piscar o relógio enquanto o jogo 
 *              está PAUSADO.
 * 				Durante a PAUSA, a palavra para de cair, mas o relógio
 * 				não para de contar
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Cronometro_Piscar() 
{
  //_LOG_INI( "botoes.js", arguments.callee.name, arguments );

  var int_Cronometro = _ByID('int_Cronometro');
  var Vrm_Azl = ['red', 'blue'];
  var indice = 0;

  Cronometro_Piscando = setInterval(function() 
						{
							var cor = Vrm_Azl[indice];
							int_Cronometro.style.color = cor;
							indice = (indice + 1) % Vrm_Azl.length;
						}, 100); 
}


/**********************************************************************
 * @function Reiniciar
 * @version 0.5 (20/06/2024)
 * @description
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
// var resetButton = _ByID('resetBtn');
// resetButton.addEventListener('click', function() { ... } );
function Reiniciar()
{
	//_LOG_INI( "botoes.js", arguments.callee.name, arguments );
	
	location.reload(true);
/*
    Crono_Parar();

    _ByID("Acertos").innerHTML = "";
    _ByID("Erros").innerHTML = "";

    Mestre.Atualiz_Tela = null;
    Palavra_Atual = undefined;
    atualizando_palavra = false;
    _ByID('int_3_2_1').textContent = 3;
    
    // Clear the canvas
    Desenhar_Palavra();
    
    // Set score to 0
    _ByID('int_Pontuacao').textContent = '0';
	
*/
}
