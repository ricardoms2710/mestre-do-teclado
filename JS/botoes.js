
function Iniciar()
{
    //if ( gameInterval == null ) 
    {
		//console.log("dificuldade", dificuldade);
		
        document.getElementById('digitacao').focus();
		
		gameInterval = setInterval(function() { update(); }, 1000 / 60); // 60 frames per second
        
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
	//console.log("gameInterval", gameInterval, typeof(gameInterval) );
	if ( ( gameInterval == null ) || ( gameInterval == undefined ) )
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
document.getElementById('pauseBtn').addEventListener('click', function() 
{
    clearInterval(gameInterval);
    gameInterval = null;
	
	Pausar('Fase_1');
	
	blinkTimer();
});

// ----------------------------------------------------------------------
var blinkInterval;

function stopBlinkingTimer() 
{
	var timerSpan = document.getElementById('timer-value');
		timerSpan.style.color = "black";
		
	clearInterval(blinkInterval);
}

// ----------------------------------------------------------------------
function blinkTimer() 
{
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
document.getElementById('continueBtn').addEventListener('click', function() 
{
    if (!gameInterval) 
	{
        gameInterval = setInterval(function() 
						{
							update();
						}, 1000 / 60); 
						
		Tocar("Fase_1");
						
		stopBlinkingTimer();
    }
});

// ******************************************************************************
var resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', function() 
{
	location.reload(true);
/*
    stopTimer();

    document.getElementById("correctWords").innerHTML = "";
    document.getElementById("wrongWords").innerHTML = "";

    gameInterval = null;
    currentWord = undefined;
    atualizando_palavra = false;
    document.getElementById('countdown').textContent = 3;
    
    // Clear the canvas
    draw();
    
    // Stop all sounds
    // Assuming you have an array of audio elements named "sounds"
    // sounds.forEach(function(audio) {
    //     audio.pause();
    //     audio.currentTime = 0;
    // });
    
    // Set score to 0
    document.getElementById('score-value').textContent = '0';
	
*/
});
