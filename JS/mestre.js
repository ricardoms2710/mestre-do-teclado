/**********************************************************************
 * @file Arquivo com as funções dedicadas ao tratamento da tela de jogo,
 *       a rolagem das palavras, durante o jogo
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

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const pixelRatio = window.devicePixelRatio || 1;
canvas.width = 480 * pixelRatio;
canvas.height = 640 * pixelRatio;
canvas.style.width = '480px';
canvas.style.height = '640px';
ctx.scale(pixelRatio, pixelRatio);

// Divide the canvas height into 5 equal sections
var sectionHeight = canvas.height / 5;

// ----------------------------------------------------------------------
// Adjust the base font size as needed
const fontSize = 32 * pixelRatio; 
ctx.font = fontSize + "px Arial";


// ----------------------------------------------------------------------
function Gradiente()
{
    //_LOG_INI( "mestre.js", arguments.callee.name, arguments );

    // Create a linear gradient from top to bottom
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0.00, '#FF7777');    
		gradient.addColorStop(0.25, '#FFAA77'); 
		gradient.addColorStop(0.50, '#FFFF77'); 
		gradient.addColorStop(0.75, '#77FF77'); 
        gradient.addColorStop(1.00, '#7777FF'); 
		
    // Fill the canvas with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
//Gradiente();

// ******************************************************************************
var Mestre = {
    velocidade: 1,
    Palavra_Atual: "",
    Palavra_Pos_X: 0,
    Palavra_Pos_Y: 0,
    pontos: 0,
    Atualiz_Tela: null
}
Mestre.velocidade = 1;
Mestre.Palavra_Atual;
Mestre.pontos = 0;
Mestre.Palavra_Pos_X = 0;
Mestre.Palavra_Pos_Y = 0; // Initial position for word
Mestre.Atualiz_Tela = null;

function draw() 
{
    //_LOG_INI( "mestre.js", "draw()", [] );

    var pos_X = 0;
    var pos_Y = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Gradiente();

    if(Mestre.Palavra_Atual != undefined )
    {
        pos_X = Mestre.Palavra_Pos_X; //canvas.width / 2 - ctx.measureText(Palavra_Atual).width / 2;
        pos_Y = Mestre.Palavra_Pos_Y;
        
        ctx.fillStyle = 'black';
        ctx.fillText(Mestre.Palavra_Atual, pos_X, pos_Y);
    }

}
draw();

// ******************************************************************************
// function getRandomWord_3segs(callback) {
//     setTimeout(function() {
//         var words = ['apple', 'banana', 'orange', 'grape', 'pineapple'];
//         var randomIndex = Math.floor(Math.random() * words.length);
//         var randomWord = words[randomIndex];
//         callback(randomWord);
//     }, 3000); // Wait for 3 seconds before returning a word
// }
// ----------------------------------------------------------------------
var t_FACIL = [];
var t_MEDIO = [];
var t_DIFICIL = [];
var t_PALAVROES = [];
var escolha_complex = 0;
function getRandomWord(callback) 
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
var taxa_queda = Mestre.velocidade*25/60; // taxa_queda = pixels / segundos
var limite_altura = canvas.height + (fontSize/2);
var atualizando_palavra = false;
var wordX_MaxPos = 0;
var tempo_nova_palavra = 250;
function update() 
{
    //_LOG_INI( "mestre.js", "update() ", [] );
    //_LOG( "mestre.js", arguments.callee.name, "Mestre", Mestre.Palavra_Atual, typeof(Mestre.Palavra_Atual) );

	//velocidade = parseInt(document.getElementById('velocidade').value);
	taxa_queda = (Mestre.velocidade*25)/60; // taxa_queda = pixels / segundos
	
    draw();
    if ( (Mestre.Palavra_Atual === undefined) || (Mestre.Palavra_Atual === null) || (Mestre.Palavra_Atual === "") )
    {
		document.getElementById("digitacao").value = "";
        if ( atualizando_palavra == false )
        {
            atualizando_palavra = true;
            Mestre.Palavra_Pos_Y = 0;
            setTimeout(function() 
			{
                getRandomWord(function(p_Nova_Palavra) 
                {
					Tocar("Palavra");
                    Mestre.Palavra_Atual = p_Nova_Palavra;
                    wordX_MaxPos = canvas.width / 2 - ctx.measureText(Mestre.Palavra_Atual).width / 2; 
                    Mestre.Palavra_Pos_X = Math.floor(Math.random() * (wordX_MaxPos - 20)) + 20;
                });
            }, tempo_nova_palavra);
        }
    } 
    else 
    {
        Mestre.Palavra_Pos_Y += taxa_queda; // Move the word downward at a rate of 150 pixels per second (assuming 60 frames per second)
        if (Mestre.Palavra_Pos_Y > limite_altura ) 
        {
            document.getElementById("Erros").innerHTML += Mestre.Palavra_Atual+"<br>";

            if ( Mestre.pontos > 0 ) { Mestre.pontos -= (calculateScore(Mestre.Palavra_Atual)/2); }
            if ( Mestre.pontos < 0 ) { Mestre.pontos = 0; }
            updateScore();
            
            Mestre.Palavra_Atual = undefined; // Reset current word if it goes below the canvas
            atualizando_palavra = false;
            
            Tocar('Falhar');
        }
    }
}

// ******************************************************************************
function calculateScore(word) 
{
    //_LOG_INI( "mestre.js", "calculateScore()", word );

	// Equação com crescimento exponencial:
	// y=2^((x−10)/2);
	// y(1) = 2^((1−10)/2)  ≈ 0.04419...
	// y(4) = 2^((4−10)/2)  ≈ 0.12500
	// y(8) = 2^((8−10)/2)  ≈ 0.50000
	// y(12)= 2^((12−10)/2) ≈ 2.00000
	
	var tam = word.length;
	var fator = Math.floor(tam/10);
	var calc = 1 + fator+Math.pow(2, (tam - (fator+1)*10) );
	// 1		0		0.0019531250
	// 4		0		0.0156250000
	// 8		0		0.2500000000
	//12		1		1.0039062500
	//16		1		1.0625000000
	
	//console.log("calculateScore:", tam, fator, calc, calc*tam );
    return Math.floor( calc*tam );
}

// ******************************************************************************
function updateScore() 
{
    //_LOG_INI( "mestre.js", "updateScore() ", [] );

    document.getElementById('int_Pontuacao').innerText = Mestre.pontos;
	updateLevel();
    
	//if ( pontos > 25 )
    //{
    //    Passar_de_Fase.play();
    //}
}

// ******************************************************************************
var complexidade = 0;
function Dificuldade( html_select )
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
        if ( complexidade == 0 )
        {
            complexidade = 1;
        }
    }
    
}
