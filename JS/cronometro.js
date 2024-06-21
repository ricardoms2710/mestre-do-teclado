/*******************************************************************************
 * @author Ricardo de Magalhães Simões (https://www.instagram.com/ricardoms2710)
 * @license  CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0)
 * @link https://ricardoms2710.github.io/mestre-do-teclado
 * 
 * @file Arquivo com as funções dedicadas a atualização da tela durante o jogo
 * @version 0.5 (20/06/2024)
 *
 * 
 * @tutorial
 * @link https://jsdoc.app
 * @link https://mermaid.live (https://mermaid.js.org/syntax/flowchart.html)
 */

//===========
"use strict";
//===========

var Cronometro = {
    Valor: 0,
    Intervalo: null
}

/**********************************************************************
 * @function Crono_Incrementa
 * @version 0.5 (20/06/2024)
 * @description Incrementa o valor do cronômetro, e mostra o valor atual
 *              na tela do jogo
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Crono_Incrementa() 
{
    Cronometro.Valor++;
    _ByID('int_Cronometro').textContent = Cronometro.Valor;
}

/**********************************************************************
 * @function Crono_Iniciar
 * @version 0.5 (20/06/2024)
 * @description Zera o valor do cronômetro, e inicia o seu funcionamento,
 *              ativando o intervalo de execução da função 'Crono_Incrementa()'
 *              para ser executada a cada 1000ms (milissegundos)
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Crono_Iniciar() 
{
    Cronometro.Valor = 0;	
    Cronometro.Intervalo = setInterval(Crono_Incrementa, 1000); 
}

/**********************************************************************
 * @function Crono_Parar
 * @version 0.5 (20/06/2024)
 * @description Para o funcionamento do relógio, e ZERA o seu valor
 * @param 
 * @returns 
 *! @throws 
 * @summary 
 */
function Crono_Parar() 
{
    clearInterval(Cronometro.Intervalo);
    Cronometro.Valor = 0;
    _ByID('int_Cronometro').textContent = Cronometro.Valor;
}
