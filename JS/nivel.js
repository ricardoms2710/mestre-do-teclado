/*******************************************************************************
 * @author Ricardo de Magalhães Simões (https://www.instagram.com/ricardoms2710)
 * @license  CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0) 
 * @link https://ricardoms2710.github.io/mestre-do-teclado
 * 
 * @file Arquivo com as funções dedicadas ao ajuste de nível durante o jogo
 * @version 0.5 (20/06/2024)
 * 
 * @tutorial
 * @link https://jsdoc.app
 * @link https://mermaid.live (https://mermaid.js.org/syntax/flowchart.html)
 */

//===========
"use strict";
//===========

var CORES = [ '#777AFF','#77AAFF','#77CCAA','#77FFAA','#77FF7A',
			   '#5AFF50','#9AFF50','#FFFF50','#FF9A50','#FF5A50' ];

/**********************************************************************
 * @function bto_Nivel
 * @version 0.5 (20/06/2024)
 * @description
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function bto_Nivel()
{
	//_LOG_INI( "nivel.js", arguments.callee.name, arguments );

	var nivel = parseInt(_ByID("inp-nivel").value);
	Nivel_Desativar_Todos();
	Nivel_Ativar(nivel);
}

/**********************************************************************
 * @function Nivel_Piscar
 * @version 0.5 (20/06/2024)
 * @description
 *
 * @param {*} nivel
 * @returns 
 *! @throws 
 * @summary 
 */
function Nivel_Piscar( nivel )
{
	//_LOG_INI( "nivel.js", arguments.callee.name, arguments );

	//console.log("Nivel_Piscar", nivel);
	var celula = _ByID("cel_" + nivel);
		celula.style.visibility = (celula.style.visibility === 'hidden') ? 'visible' : 'hidden';
}

var Nivel_Piscando = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

/**********************************************************************
 * @function Nivel_Definir
 * @version 0.5 (20/06/2024)
 * @description
 *
 * @param {number} [nivel=0]
 * @returns 
 *! @throws 
 * @summary 
 */
function Nivel_Definir( nivel=0 )
{
	//_LOG_INI( "nivel.js", arguments.callee.name, arguments );

	//? clearInterval(Nivel_Piscando[nivel]);
	var celula = _ByID("cel_" + nivel);
		celula.style.visibility = 'visible'; 
		celula.style.color = 'black';
		celula.style.backgroundColor = CORES[nivel];
		
	Mestre.velocidade = (nivel>0?nivel:1);
}

/**********************************************************************
 * @function Nivel_Ativar
 * @version 0.5 (20/06/2024)
 * @description
 *
 * @param {number} [nivel=0]
 * @returns 
 *! @throws 
 * @summary 
 */
function Nivel_Ativar(nivel=0) 
{
	//_LOG_INI( "nivel.js", arguments.callee.name, arguments );

	//console.log("Nivel_Ativar", Nivel_Piscando);
	for(let i=1;i<=nivel;i++)
	{
		//? Nivel_Piscando[i] = setInterval(function(){Nivel_Piscar(i);}, 100);
		//? setTimeout( function(){Nivel_Definir(i);}, 1000);
		
		Nivel_Definir(i);
	}
}

/**********************************************************************
 * @function Nivel_Desativar_Todos
 * @version 0.5 (20/06/2024)
 * @description
 *
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Nivel_Desativar_Todos()
{
	_LOG_INI( "nivel.js", "Nivel_Desativar_Todos()", "INI" );

	for(let i=1;i<=10;i++)
	{
		_LOG_INI( "nivel.js", "Nivel_Desativar_Todos()", "cellId: "+"cel_" + i );
		var celula = _ByID("cel_" + i);
			celula.style.visibility = 'visible'; // forçar visibilidade, pois altera ao piscar
			celula.style.color = 'white';
			celula.style.backgroundColor = "black";
		
		//? clearInterval(Nivel_Piscando[i]);
	}
}

/**********************************************************************
 * @function Nivel_Calcular
 * @version 0.5 (20/06/2024)
 * @description
 *
 * @param {number} [p_Pontuacao=0]
 * @param {number} [timer=1]
 * @returns 
 *! @throws 
 * @summary 
 */
function Nivel_Calcular( pontuacao=0, cronometro=1 )
{
	//_LOG_INI( "nivel.js", arguments.callee.name, arguments );

	var fator = pontuacao / cronometro;

	Nivel_Desativar_Todos();
	
	if ( fator > 0.1 )
	{
		     if ( fator > (4.50) ) { Nivel_Ativar(10); }
		else if ( fator > (3.60) ) { Nivel_Ativar(9); }
		else if ( fator > (2.90) ) { Nivel_Ativar(8); }
		else if ( fator > (2.20) ) { Nivel_Ativar(7); }
		else if ( fator > (1.60) ) { Nivel_Ativar(6); }
		else if ( fator > (1.10) ) { Nivel_Ativar(5); }
		else if ( fator > (0.70) ) { Nivel_Ativar(4); }
		else if ( fator > (0.40) ) { Nivel_Ativar(3); }
		else if ( fator > (0.20) ) { Nivel_Ativar(2); }
		else if ( fator > (0.10) ) { Nivel_Ativar(1); }
	}
	
}

/**********************************************************************
 * @function Nivel_Atualizar
 * @version 0.5 (20/06/2024)
 * @description
 *
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Nivel_Atualizar() 
{
	//_LOG_INI( "nivel.js", arguments.callee.name, arguments );

	var pontuacao = parseInt(_ByID('int_Pontuacao').innerText);
	var cronometro = parseInt(_ByID('int_Cronometro').innerText);

	if (cronometro !== 0) 
	{
		Nivel_Calcular( pontuacao, cronometro );
	} 
}

/**********************************************************************
 * @function Nivel_Cronometro
 * @version 0.5 (20/06/2024)
 * @description
 *
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Nivel_Cronometro()
{
	//_LOG_INI( "nivel.js", arguments.callee.name, arguments );
	
	setInterval( Nivel_Atualizar, 10000); // Update every 10 seconds
}
