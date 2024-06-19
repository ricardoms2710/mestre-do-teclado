/**********************************************************************
 * @file Arquivo com as funções dedicadas ao tratamento básico dos
 *       Elementos HTML, e às mensagens de Log no Console JS
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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

/**********************************************************************
 * 
 * @summary Captura um Elemento HTML no documento utilizando a propriedade "id"
 * @param {string} [id_HTML=""]
 * @return {HTMLElement} 
 */
function _ByID( id_HTML="" )
{
    return document.getElementById(id_HTML);
}

// ----------------------------------------------------------------------
function _LOG_INI( Arquivo, Funcao, ...parametros )
{
    //console.log(Arquivo, Funcao, parametros );
}

// ----------------------------------------------------------------------
function _LOG( Arquivo, Funcao, ...parametros )
{
    console.log(Arquivo, Funcao, parametros );
}