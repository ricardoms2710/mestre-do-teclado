document.getElementById('digitacao').addEventListener('input', function (e){ Digitacao(e); });

function Digitacao( evento )
{
    if (evento.target.value === currentWord) 
    {
        document.getElementById("correctWords").innerHTML += currentWord+"<br>";
		var pontos = calculateScore(currentWord);
		if (pontos < 20 ) 
		{ 
			Tocar('Acertar_Facil');
		}
		else   
		{
			Tocar('Acertar_Dificil');
		}
		
        score += pontos;
        updateScore();
        evento.target.value = '';
        currentWord = undefined;
        atualizando_palavra = false;
    }
}
