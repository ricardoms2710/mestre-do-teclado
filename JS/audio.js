/**********************************************************************
 * @file Arquivo com as funções dedicadas ao tratamento do áudio
 *       durante o jogo
 * @author Ricardo de Magalhães Simões
 * @version 0.4
 * 
 * @requires
 * @link https://jsdoc.app
 * @link https://mermaid.live (https://mermaid.js.org/syntax/flowchart.html)
 * @link https://www.w3schools.com/jsref/dom_obj_audio.asp
 * @link https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/audio
 */

//===========
"use strict";
//===========

/**********************************************************************
 * @function Carregar
 * @description Carrega o elemento HTMl responsável por um áudio específico
 * @param {string} [nome_Audio=""] Indica o nome do Elemento HTML que será utilizado
 * @param {number} [volume=1] Indica a intensidade do volume do áudio ao ser executado
 *                            Possui valores decimais, variando de 0.00 à 1.00, ex: 0.35
 * @return {HTMLElement:Audio} Um objeto HTML Element do tipo Audio
 * @throws .
 * @summary fluxograma de execução
            flowchart TD
                func{{"Carregar(nome,volume)"}}
                i((Início)) --> _ByID[["audio = _ByID(nome)"]]
                _ByID --> if{"Carregou ?"}
                if -->|Sim| then(["HTMLElement:Audio"])
                    then -->vol>"ajusta volume"]
                    vol -->f(((Fim)))    
                if -->|Não| else>null]
                    else -->f
 */
function Carregar( nome_Audio="", volume=1 )
{
    //_LOG_INI( "audio.js", "Carregar()", "INI", arguments );
    
    var audio = _ByID(nome_Audio);
    var abriu = false;

    if ( audio ) { audio.volume = volume; abriu = true; }

    return audio;
}

var Acertar_Facil   = Carregar('Acertar_Facil');
var Acertar_Medio   = Carregar('Acertar_Medio');
var Acertar_Dificil = Carregar('Acertar_Dificil');
var Ativar          = Carregar('Ativar');
var Palavra         = Carregar('Palavra');
var Falhar          = Carregar('Falhar');
var Perder          = Carregar('Perder');
var Passar_de_Fase  = Carregar('Passar_de_Fase');
var Fase_1          = Carregar('Fase_1', 0.35);

/**********************************************************************
 * @function Tocar
 * @description Executar o áudio correspondente ao que for passado como
 *              parâmetro.
 *              Para evitar sobreposição, o áudio será sempre interrompido
 *              e depois executado.
 * @param {string} [audio=""] Nome do componente HTML que possui o áudio
 * @param {number} [tempo=0] Tempo em que o áudio será executado
 * @return .
 * @throws .
 * @summary fluxograma de execução
            flowchart TD
                func{{"Tocar(audio,tempo)"}}
                i((Início)) --> if{"Parar audio ?"}
                if -->|Sim| then[["Parar( audio )"]]
                    then --> id
                if -->|Não| id

                id[["elemHTML = Identificar(audio)"]] --> play["elemHTML.play()"]

                play --> f(((Fim)))
 */
function Tocar( audio="", tempo=0 )
{
    //_LOG_INI( "audio.js", "Tocar()", "INI", arguments );

    var elemHTML = null;

    if ( audio != "Fase_1" ) { Parar( audio ); }

    elemHTML = Identificar(audio);
    elemHTML.play();
}

/**********************************************************************
 * @function Parar
 * @description Interrompe a execução de um áudio específico
 * @param {string} [audio=""] Nome do componente HTML que possui o áudio
 * @return .
 * @throws .
 * @summary fluxograma de execução
            flowchart TD
                func{{"Parar(audio)"}}
                i((Início)) -->  e["elemHTML = null"] 
                e--> mus["musica = '' ''"]
                mus --> id[["elemHTML = Identificar(audio)"]]
                id --> if{"elemHTML != null ?"}
                
                if -->|Sim| then["guardar nome do áudio na variável 'musica'"]
                    then --> pause["pausar audio tocando em 'elemHTML'"]
                    pause --> zero["zerar tempo do audio tocando em 'elemHTML'"]
                    zero --> limpa["limpar nome do áudio tocando em 'elemHTML'"]
                    limpa --> rest["restaurar nome do áudio em 'elemHTML' a partir de 'musica'"]
                    rest --> f
                if -->|Não| f

                f(((Fim)))
 */
function Parar( audio="" )
{
    _LOG_INI( "audio.js", "Parar()", "INI", arguments );

    var elemHTML = null;
    var musica = "";

    elemHTML = Identificar(audio);

    if ( elemHTML != null )
    {
        musica = elemHTML.scr;

        elemHTML.pause();
        elemHTML.currentTime = 0;
        elemHTML.scr = "";

        elemHTML.scr = musica;
    }
}

/**********************************************************************
 *
 *
 * @param {string} [audio=""]
 */
function Pausar( audio="" )
{
    _LOG_INI( "audio.js", "Pausar()", "INI", arguments );

    var elemHTML = null;

    elemHTML = Identificar(audio);
    if ( elemHTML != null )
    {
        elemHTML.pause();
    }
}

/**********************************************************************
 *
 *
 * @param {*} audio
 * @return {*} 
 * @summary fluxograma
            flowchart LR
                func{{"Identificar(audio)"}}

                i((Início)) --> eHTML["elemHTML = null"] --> switch

                switch{{"audio"}} -->|Facil| AF["elemHTML = Acertar_Facil"] --> ret["return elemHTML"]
                switch -->|Medio| AM["elemHTML = Acertar_Medio"] --> ret
                switch -->|Dificil| AD["elemHTML = Acertar_Dificil"] --> ret
                switch -->|Ativar| At["elemHTML = Ativar"] --> ret
                switch --> Pl["elemHTML = Palavra"] --> ret
                switch --> Fl["elemHTML = Falhar"] --> ret
                switch --> Pd["elemHTML = Perder"] --> ret
                switch --> PF["elemHTML = Passar_Fase"] --> ret
                switch --> F1["elemHTML = Fase_1"] --> ret
                switch -->|default| dft[/"_LOG()"/] --> ret

                ret --> f(((Fim)))
 */
function Identificar(audio)
{
    var elemHTML = null;

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
        default: _LOG( "audio.js", "Parar()", "ERRO", "arquivo de música não existe..." );
    }

    return elemHTML;
}