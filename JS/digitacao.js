/*******************************************************************************
 * @author Ricardo de Magalhães Simões (https://www.instagram.com/ricardoms2710)
 * @license  CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0)
 * @link https://ricardoms2710.github.io/mestre-do-teclado
 * 
 * @file Arquivo com as funções dedicadas ao tratamento da digitação 
 *       das palavras durante o jogo
 * @version 0.5 (20/06/2024)
 * 
 * @tutorial
 * @link https://jsdoc.app
 * @link https://mermaid.live (https://mermaid.js.org/syntax/flowchart.html)
 */

//===========
"use strict";
//===========

/**********************************************************************
 * @function Digitacao
 * @version 0.5 (20/06/2024)
 * @description
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event
 * @param {*} [evento=null]
 * @returns 
 *! @throws 
 * @summary 
 */
function Digitacao( evento=null )
{
    //_LOG_INI( "digitacao.js", "Digitacao( e=null )", evento );
    
    if (evento.target.value === Mestre.Palavra_Atual) 
    {
        document.getElementById("Acertos").innerHTML += Mestre.Palavra_Atual+"<br>";
		var pontuacao = calculateScore(Mestre.Palavra_Atual);
		if (pontuacao < 20 ) 
		{ 
			Tocar('Acertar_Facil');
		}
		else   
		{
			Tocar('Acertar_Dificil');
		}
		
        Mestre.pontos += pontuacao;
        updateScore();
        evento.target.value = '';
        Mestre.Palavra_Atual = undefined;
        atualizando_palavra = false;
    }
}
