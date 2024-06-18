// ----------------------------------------------------------------------
function Carregar( nome_Audio="", volume=1 )
{
    //_LOG_INI( "audio.js", "Carregar()", "INI", arguments );
    
    var audio = _ByID(nome_Audio);
    var abriu = false;

    if ( audio ) { audio.volume = volume; abriu = true; }

    return audio;
}

// ----------------------------------------------------------------------
var Acertar_Facil = Carregar('Acertar_Facil');
var Acertar_Medio = Carregar('Acertar_Medio');
var Acertar_Dificil = Carregar('Acertar_Dificil');
var Ativar = Carregar('Ativar');
var Palavra = Carregar('Palavra');
var Falhar = Carregar('Falhar');
var Perder = Carregar('Perder');
var Passar_de_Fase = Carregar('Passar_de_Fase');
var Fase_1 = Carregar('Fase_1', 0.35);

// ----------------------------------------------------------------------
function Tocar( audio="", tempo=0 )
{
    //_LOG_INI( "audio.js", "Tocar()", "INI", arguments );

    if ( audio != "Fase_1" ) { Parar( audio ); }

    switch(audio)
    {
        case 'Acertar_Facil': Acertar_Facil.play(); break;
        case 'Acertar_Medio': Acertar_Medio.play(); break;
        case 'Acertar_Dificil': Acertar_Dificil.play(); break;
        case 'Ativar': Ativar.play(); break;
        case 'Palavra': Palavra.play(); break;
        case 'Falhar': Falhar.play(); break;
        case 'Perder': Perder.play(); break;
        case 'Passar_de_Fase': Passar_de_Fase.play(); break;
        case 'Fase_1': Fase_1.play(); break;
        default: _LOG_INI( "audio.js", "Tocar()", "ERRO", "arquivo de música não existe..." );
    }
}

// ----------------------------------------------------------------------
function Parar( audio="" )
{
    _LOG_INI( "audio.js", "Parar()", "INI", arguments );

    var elemHTML = null;
    var musica = "";

    switch(audio)
    {
        case 'Acertar_Facil': elemHTML = Acertar_Facil; break;
        case 'Acertar_Medio': elemHTML = Acertar_Medio; break;
        case 'Acertar_Dificil': elemHTML = Acertar_Dificil; break;
        case 'Ativar': elemHTML = Ativar; break;
        case 'Palavra': elemHTML = Palavra; break;
        case 'Falhar': elemHTML = Falhar; break;
        case 'Perder': elemHTML = Perder; break;
        case 'Passar_de_Fase': elemHTML = Passar_de_Fase; break;
        case 'Fase_1': elemHTML = Fase_1; break;
        default: _LOG_INI( "audio.js", "Parar()", "ERRO", "arquivo de música não existe..." );
    }

    if ( elemHTML != null )
    {
        musica = elemHTML.scr;

        elemHTML.pause();
        elemHTML.currentTime = 0;
        elemHTML.scr = "";

        elemHTML.scr = musica;
    }
}

// ----------------------------------------------------------------------
function Pausar( audio="" )
{
    _LOG_INI( "audio.js", "Pausar()", "INI", arguments );

    switch(audio)
    {
        case 'Fase_1': Fase_1.pause(); break;
        default: _LOG_INI( "audio.js", "Pausar()", "ERRO", "arquivo de música não existe..." );
    }
}