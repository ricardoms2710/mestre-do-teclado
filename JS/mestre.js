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
var velocidade = 1;
let currentWord;
let score = 0;
let wordXPosition = 0;
let wordYPosition = 0; // Initial position for word
let gameInterval;

function draw() 
{
    var pos_X = 0;
    var pos_Y = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Gradiente();

    if(currentWord != undefined )
    {
        pos_X = wordXPosition; //canvas.width / 2 - ctx.measureText(currentWord).width / 2;
        pos_Y = wordYPosition;
        
        ctx.fillStyle = 'black';
        ctx.fillText(currentWord, pos_X, pos_Y);
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
let t_FACIL = [];
let t_MEDIO = [];
let t_DIFICIL = [];
let t_PALAVROES = [];
let escolha_complex = 0;
function getRandomWord(callback) 
{
    if (( 1 <= complexidade && complexidade <= 4 ) != true)
    {
        complexidade = 1;
    }

    if ( escolha_complex != complexidade )
    {
        escolha_complex = complexidade;
        let PALAVRAS = [];
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
var taxa_queda = velocidade*25/60; // taxa_queda = pixels / segundos
var limite_altura = canvas.height + (fontSize/2);
var atualizando_palavra = false;
var wordX_MaxPos = 0;
var tempo_nova_palavra = 250;
function update() 
{
	//velocidade = parseInt(document.getElementById('velocidade').value);
	taxa_queda = (velocidade*25)/60; // taxa_queda = pixels / segundos
	
    draw();
    if (currentWord === undefined) 
    {
		document.getElementById("digitacao").value = "";
        if ( atualizando_palavra == false )
        {
            atualizando_palavra = true;
            wordYPosition = 0; // Reset word position when a new word appears
            // currentWord = getRandomWord();
            setTimeout(function() 
			{
                getRandomWord(function(word) 
                {
					Tocar("Palavra");
                    currentWord = word;
                    wordX_MaxPos = canvas.width / 2 - ctx.measureText(currentWord).width / 2; 
                    wordXPosition = Math.floor(Math.random() * (wordX_MaxPos - 20)) + 20;
                });
            }, tempo_nova_palavra);
        }
    } 
    else 
    {
        wordYPosition += taxa_queda; // Move the word downward at a rate of 150 pixels per second (assuming 60 frames per second)
        if (wordYPosition > limite_altura ) 
        {
            document.getElementById("wrongWords").innerHTML += currentWord+"<br>";

            if ( score > 0 ) { score -= (calculateScore(currentWord)/2); }
            if ( score < 0 ) { score = 0; }
            updateScore();
            
            currentWord = undefined; // Reset current word if it goes below the canvas
            atualizando_palavra = false;
            
            Tocar('Falhar');
        }
    }
}

// ******************************************************************************
function calculateScore(word) 
{
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
    document.getElementById('score-value').innerText = score;
	updateLevel();
    
	//if ( score > 25 )
    //{
    //    Passar_de_Fase.play();
    //}
}

// ******************************************************************************
var complexidade = 0;
function Dificuldade( html_select )
{
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
