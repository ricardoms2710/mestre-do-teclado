/*******************************************************************************
 * @author Ricardo de Magalhães Simões (https://www.instagram.com/ricardoms2710)
 * @license  CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0)
 * @link https://ricardoms2710.github.io/mestre-do-teclado
 * 
 * @file Arquivo com as funções dedicadas ao tratamento básico dos
 *       Elementos HTML, e às mensagens de Log no Console JS
 * @version 0.5 (20/06/2024)
 * 
 * @tutorial
 * @link https://jsdoc.app
 * @link https://mermaid.live (https://mermaid.js.org/syntax/flowchart.html)
 * @link https://developer.mozilla.org/en-US/docs/Web/API/console
 */

//===========
"use strict";
//===========

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

/**********************************************************************
 * @function _ByID
 * @version 0.5 (20/06/2024)
 * @description Captura um Elemento HTML no documento utilizando a propriedade "id"
 * @param {string} [id_HTML=""]
 * @returns {HTMLElement} 
 *! @throws 
 * @summary 
 */
function _ByID( id_HTML="" )
{
    return document.getElementById(id_HTML);
}

/**********************************************************************
 * @function _LOG_INI
 * @version 0.5 (20/06/2024)
 * @description Função com nome diferenciado para ser utilizada em todas as chamadas
 *              de função no projeto, e facilmente 'neutralizada' com comentário
 * @param {string} [Arquivo=""]
 * @param {string} [Funcao=""]
 * @param {*} [parametros=[]] Demais parâmetros que podem ser passados na chamada da função
 * @returns 
 *! @throws 
 * @summary 
 */
function _LOG_INI( Arquivo="", Funcao="", ...parametros )
{
    //console.log(Arquivo, Funcao, parametros );
}

/**********************************************************************
 * @function _LOG
 * @version 0.5 (20/06/2024)
 * @description Função principal de registro de log de execução no projeto
 *              para acompanhar o processamento de dados
 * @param {string} [Arquivo=""]
 * @param {string} [Funcao=""]
 * @param {*} [parametros=[]] Demais parâmetros que podem ser passados na chamada da função
 * @returns 
 *! @throws 
 * @summary 
 */
function _LOG( Arquivo="", Funcao="", ...parametros )
{
    console.log(Arquivo, Funcao, parametros );
}
