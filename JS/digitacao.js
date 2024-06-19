/**********************************************************************
 * @file Arquivo com as funções dedicadas ao tratamento da digitação 
 *       das palavras durante o jogo
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

document.getElementById('digitacao').addEventListener('input', function (e){ Digitacao(e); });
function Digitacao( evento )
{
    //_LOG_INI( "mestre.js", arguments.callee.name, arguments );
    
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
