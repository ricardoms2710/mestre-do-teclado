/*******************************************************************************
 * @author Ricardo de Magalhães Simões (https://www.instagram.com/ricardoms2710)
 * @license  CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0)
 * @link https://ricardoms2710.github.io/mestre-do-teclado
 * 
 * @file Arquivo com as funções dedicadas ao tratamento da tela de jogo,
 *       a rolagem das palavras, durante o jogo
 * @version 0.5 (21/06/2024)
 * 
 * @tutorial
 * @link https://jsdoc.app
 * @link https://mermaid.live (https://mermaid.js.org/syntax/flowchart.html)
 */

//===========
"use strict";
//===========

// ********************************************************************
var Mestre = {
                pontos: 0,
                velocidade: 1,
                Palavra_Atual: "",
                Palavra_Pos_X: 0,
                Palavra_Pos_Y: 0,
                Atualiz_Tela: null
            }

// --------------------------------------------------------------------
var fator_DPR = window.devicePixelRatio || 1;

// --------------------------------------------------------------------
var canvas_html = _ByID('canvas_html');
    canvas_html.width = 480 * fator_DPR;
    canvas_html.height = 640 * fator_DPR;
    canvas_html.style.width = '480px';
    canvas_html.style.height = '640px';

//? fazer a pontuação proporcional à altura que a palavra desceu ??
var quinta_parte = canvas_html.height / 5;

// --------------------------------------------------------------------
var Canvas_2D = canvas_html.getContext('2d');
    Canvas_2D.scale(fator_DPR, fator_DPR);
var Tam_Fonte = 32 * fator_DPR; 
    Canvas_2D.font = Tam_Fonte + "px Arial";

/**********************************************************************
 * @function Gradiente
 * @version 0.5 (21/06/2024)
 * @description
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Gradiente()
{
    //_LOG_INI( "mestre.js", arguments.callee.name, arguments );

    var fundo = Canvas_2D.createLinearGradient(0, 0, 0, canvas_html.height);
        fundo.addColorStop(0.00, '#FF7777');    
		fundo.addColorStop(0.25, '#FFAA77'); 
		fundo.addColorStop(0.50, '#FFFF77'); 
		fundo.addColorStop(0.75, '#77FF77'); 
        fundo.addColorStop(1.00, '#7777FF'); 
		
    Canvas_2D.fillStyle = fundo;
    Canvas_2D.fillRect(0, 0, canvas_html.width, canvas_html.height);
}

/**********************************************************************
 * @function Desenhar_Palavra
 * @version 0.5 (21/06/2024)
 * @description
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Desenhar_Palavra() 
{
    //_LOG_INI( "mestre.js", "Desenhar_Palavra()", [] );

    var pos_X = 0;
    var pos_Y = 0;

    Canvas_2D.clearRect(0, 0, canvas_html.width, canvas_html.height);
    Gradiente();

    if(Mestre.Palavra_Atual != undefined )
    {
        pos_X = Mestre.Palavra_Pos_X; //canvas_html.width / 2 - Canvas_2D.measureText(Palavra_Atual).width / 2;
        pos_Y = Mestre.Palavra_Pos_Y;
        
        Canvas_2D.fillStyle = 'black';
        Canvas_2D.fillText(Mestre.Palavra_Atual, pos_X, pos_Y);
    }

}
Desenhar_Palavra();

// ********************************************************************
var t_FACIL = [];
var t_MEDIO = [];
var t_DIFICIL = [];
var t_PALAVROES = [];
var complexidade = 0;
var escolha_complex = 0;

/**********************************************************************
 * @function getRandomWord
 * @version 0.5 (21/06/2024)
 * @description
 * @param {*} [callback=null]
 * @returns 
 *! @throws 
 * @summary 
 */
function getRandomWord(callback=null) 
{
    //_LOG_INI( "mestre.js", "getRandomWord()", callback );

    if (( 1 <= complexidade && complexidade <= 4 ) != true)
    {
        complexidade = 1;
    }

    if ( escolha_complex != complexidade )
    {
        escolha_complex = complexidade;
        PALAVRAS = [];
        switch(complexidade)
        {
            case 1: PALAVRAS = FACIL; break;
            case 2: PALAVRAS = MEDIO; break;
            case 3: PALAVRAS = DIFICIL; break;
            case 4: PALAVRAS = PALAVROES; break;
        }
    }

    callback(PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)]);
}

// ******************************************************************************
//var fator_queda = 3;
var taxa_queda = (Mestre.velocidade*25)/60; // taxa_queda = pixels / quadros_por_segundos
var limite_altura = canvas_html.height + (Tam_Fonte/2);
var atualizando_palavra = false;
var Palavra_Max_Pos_X = 0;
var tempo_nova_palavra = 250;

/**********************************************************************
 * @function Mestre_Atualizar_Jogo
 * @version 0.5 (21/06/2024)
 * @description
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Mestre_Atualizar_Jogo() 
{
    //_LOG_INI( "mestre.js", "Mestre_Atualizar_Jogo() ", [] );
    //_LOG( "mestre.js", arguments.callee.name, "Mestre", Mestre.Palavra_Atual, typeof(Mestre.Palavra_Atual) );

	//velocidade = parseInt(_ByID('velocidade').value);
	taxa_queda = (Mestre.velocidade*25)/60; // taxa_queda = pixels / segundos
	
    Desenhar_Palavra();
    if ( (Mestre.Palavra_Atual === undefined) || (Mestre.Palavra_Atual === null) || (Mestre.Palavra_Atual === "") )
    {
		_ByID("txt_Digitacao").value = "";
        if ( atualizando_palavra === false )
        {
            atualizando_palavra = true;
            Mestre.Palavra_Pos_Y = 0;
            setTimeout(function() 
			{
                getRandomWord(function(p_Nova_Palavra) 
                {
					Tocar("Palavra");
                    Mestre.Palavra_Atual = p_Nova_Palavra;
                    Palavra_Max_Pos_X = canvas_html.width / 2 - Canvas_2D.measureText(Mestre.Palavra_Atual).width / 2; 
                    Mestre.Palavra_Pos_X = Math.floor(Math.random() * (Palavra_Max_Pos_X - 20)) + 20;

                    _LOG( "mestre.js", "Mestre_Atualizar_Jogo()", "Mestre", Mestre.Palavra_Atual, Mestre.velocidade );
                });
            }, tempo_nova_palavra);
        }
    } 
    else 
    {
        Mestre.Palavra_Pos_Y += taxa_queda; // Move the word downward at a rate of 150 pixels per second (assuming 60 frames per second)
        if (Mestre.Palavra_Pos_Y > limite_altura ) 
        {
            _ByID("Erros").innerHTML += Mestre.Palavra_Atual+"<br>";

            if ( Mestre.pontos > 0 ) { Mestre.pontos -= (Palavra_Pontuacao(Mestre.Palavra_Atual)/2); }
            if ( Mestre.pontos < 0 ) { Mestre.pontos = 0; }
            Pontuacao_Atualizar();
            
            Mestre.Palavra_Atual = undefined; // Reset current word if it goes below the canvas
            atualizando_palavra = false;
            
            Tocar('Falhar');
        }
    }
}

/**********************************************************************
 * @function Palavra_Pontuacao
 * @version 0.5 (21/06/2024)
 * @description Calcula a pontuação de uma palavra específica, fornecendo mais pontos
 *              para palavras com mais letras
 * @param {string} [palavra=""]
 * @returns {*} 
 *! @throws 
 * @summary 
 */
function Palavra_Pontuacao( palavra="" ) 
{
    //_LOG_INI( "mestre.js", "Palavra_Pontuacao()", palavra );

	// Equação com crescimento exponencial:
	// y=2^((x−10)/2);
	// y(1) = 2^((1−10)/2)  ≈ 0.04419...
	// y(4) = 2^((4−10)/2)  ≈ 0.12500
	// y(8) = 2^((8−10)/2)  ≈ 0.50000
	// y(12)= 2^((12−10)/2) ≈ 2.00000
	
	var tam = palavra.length;
	var fator = Math.floor(tam/10);
	var calc = 1 + fator+Math.pow(2, (tam - (fator+1)*10) ); //? exagero matemático!
	// 1		0		0.0019531250
	// 4		0		0.0156250000
	// 8		0		0.2500000000
	//12		1		1.0039062500
	//16		1		1.0625000000
	
	//console.log("Palavra_Pontuacao:", tam, fator, calc, calc*tam );
    return Math.floor( calc*tam );
}

/**********************************************************************
 * @function Pontuacao_Atualizar
 * @version 0.5 (21/06/2024)
 * @description
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Pontuacao_Atualizar() 
{
    //_LOG_INI( "mestre.js", "Pontuacao_Atualizar() ", [] );

    _ByID('int_Pontuacao').innerText = Mestre.pontos;
	Nivel_Atualizar();
    
	//if ( pontos > 25 )
    //{
    //    Passar_de_Fase.play();
    //}
}

/**********************************************************************
 * @function Dificuldade
 * @version 0.5 (21/06/2024)
 * @description
 *
 * @param {*} [html_select=null]
 * @returns 
 *! @throws 
 * @summary 
 */
function Dificuldade( html_select=null )
{
    //_LOG_INI( "mestre.js", "Dificuldade()",  html_select  );

    try
    {
        complexidade = parseInt(html_select.selectedOptions[0].value);

    }
    catch(error)
    {
        complexidade = 0;
        console.log("Dificuldade( html_select )", html_select, error);
    }
    finally
    {
        if ( complexidade === 0 )
        {
            complexidade = 1;
        }
    }
    
}
