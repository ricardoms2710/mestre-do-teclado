/*******************************************************************************
 * @author Ricardo de Magalhães Simões (https://www.instagram.com/ricardoms2710)
 * @license  CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0)
 * @link https://ricardoms2710.github.io/mestre-do-teclado
 * 
 * @file Arquivo com os vetores das palavras utilizadas durante o jogo
 * @version 0.4
 * 
 * @tutorial
 * @link https://jsdoc.app
 * @link https://mermaid.live (https://mermaid.js.org/syntax/flowchart.html)
 */

//===========
"use strict";
//===========

var tres = ["sol", "lua", "rio", "mar", "rua", "paz", "som", "dna", "sal", "pão", "mel"];
var quatro = ["casa", "gato", "água", "jogo", "amor", "frio", "vila", "medo", "arte", "soma", "área", "raiz", "bang", "miau", "boxe", "judô", "surf", "remo", "luta", "rede", "site", "byte", "óleo", "lula", "atum", "bolo", "sobá", "udon", "bobó", "bala", "sofá", "mesa", "copo", "cama", "fios", "lona", "Mauá", "Magé", "Bagé"];
var cinco = ["amigo", "livro", "filme", "praia", "sonho", "calor", "chuva", "praça", "festa", "união", "força", "massa", "ondas", "lente", "carga", "genes", "órgão", "verbo", "tchau", "ronco", "tique", "vôlei", "tênis", "skate", "rúgbi", "mouse", "modem", "email", "senha", "pasta", "arroz", "leite", "creme", "bacon", "carne", "peixe", "polvo", "torta", "pizza", "crepe", "sushi", "ramen", "natto", "curau", "fogão", "prato", "pente", "papel", "lápis", "rádio", "chave", "cabos", "joias", "tinta", "easel", "gesso", "telas", "Belém", "Natal", "Serra", "Cotia"];
var seis = ["escola", "música", "viagem", "comida", "bebida", "cidade", "prédio", "jardim", "parque", "bairro", "igreja", "templo", "guerra", "física", "ensino", "número", "adição", "volume", "ângulo", "função", "matriz", "célula", "núcleo", "tecido", "sangue", "figura", "ironia", "splash", "clique", "estalo", "karatê", "hóquei", "hacker", "backup", "feijão", "açúcar", "azeite", "queijo", "frango", "salame", "pastel", "risoto", "vatapá", "caruru", "cuscuz", "manjar", "picolé", "mousse", "geleia", "panela", "talher", "escova", "toalha", "abajur", "lençol", "cabide", "caneta", "tapete", "janela", "tablet", "câmera", "trinco", "tomada", "cartão", "agenda", "óculos", "pincel", "paleta", "tintas", "Manaus", "Recife", "Maceió", "Cuiabá", "Macapá", "Palmas", "Osasco", "Suzano", "Canoas", "Ilhéus", "Marabá", "Sumaré", "Maricá"];
var sete = ["estrela", "família", "celular", "futebol", "sorriso", "deserto", "caminho", "estrada", "avenida", "vizinho", "esquina", "alegria", "saudade", "coragem", "justiça", "cultura", "ciência", "química", "divisão", "equação", "gráfico", "energia", "momento", "inércia", "pressão", "espelho", "sistema", "músculo", "sintaxe", "tic-tac", "pipocar", "zum-zum", "toc-toc", "natação", "hipismo", "teclado", "monitor", "scanner", "arquivo", "memória", "farinha", "iogurte", "camarão", "lagosta", "bolacha", "torrada", "coxinha", "baguete", "tapioca", "lasanha", "sashimi", "tempura", "moqueca", "acarajé", "pamonha", "munguzá", "canjica", "sorvete", "compota", "cadeira", "shampoo", "secador", "perfume", "lâmpada", "armário", "caderno", "revista", "estante", "cortina", "relógio", "bateria", "pincéis", "Goiânia", "Aracaju", "Vitória", "Niterói", "Barueri", "Pelotas", "Uberaba", "Caucaia", "Limeira", "Guarujá", "Marília", "Itabuna", "Mossoró", "Itapevi", "Colombo"];
var oito = ["cachorro", "trabalho", "montanha", "floresta", "hospital", "mesquita", "sinagoga", "batizado", "tristeza", "natureza", "história", "biologia", "educação", "inovação", "problema", "potência", "derivada", "integral", "refração", "corrente", "organela", "membrana", "neurônio", "genética", "adjetivo", "advérbio", "sinônimo", "antônimo", "metáfora", "tilintar", "basquete", "handebol", "ciclismo", "escalada", "beisebol", "roteador", "firewall", "software", "hardware", "internet", "macarrão", "manteiga", "coalhada", "presunto", "linguiça", "salsicha", "sardinha", "azeitona", "biscoito", "panqueca", "feijoada", "chiclete", "pirulito", "gelatina", "rapadura", "sabonete", "cobertor", "notebook", "borracha", "controle", "aparelho", "persiana", "telefone", "maçaneta", "dinheiro", "espátula", "aquarela", "cavalete", "Brasília", "Salvador", "Curitiba", "São Luís", "Teresina", "São José", "Sorocaba", "Londrina", "Anápolis", "Santarém", "Paulista", "Dourados", "Camaçari", "Valinhos", "Cascavel"];
var nove = ["esperança", "arco-íris", "casamento", "violência", "liberdade", "geografia", "progresso", "subtração", "geometria", "perímetro", "proporção", "logaritmo", "movimento", "gravidade", "densidade", "amplitude", "ribossomo", "clorofila", "gramática", "semântica", "conjunção", "linguagem", "metonímia", "hipérbole", "eufemismo", "plim-plim", "atletismo", "ginástica", "taekwondo", "patinação", "triathlon", "antivírus", "requeijão", "mortadela", "croissant", "sanduíche", "espaguete", "canelloni", "yakissoba", "cajuzinho", "chocolate", "geladeira", "televisão", "sofá-cama", "aquecedor", "fechadura", "documento", "São Paulo", "Fortaleza", "Boa Vista", "Cariacica", "Petrolina", "Paranaguá", "Americana", "Barreiras"];
var dez = ["computador", "felicidade", "celebração", "democracia", "matemática", "tecnologia", "velocidade", "aceleração", "frequência", "citoplasma", "cromossomo", "respiração", "ortografia", "acentuação", "conjugação", "preposição", "polissemia", "impressora", "caranguejo", "hambúrguer", "arroz-doce", "brigadeiro", "torradeira", "prateleira", "ventilador", "carregador", "Rio Branco", "Vila Velha", "Piracicaba", "São Carlos", "Petrópolis", "Uruguaiana", "Rio Grande", "Maranguape"];
var onze = ["apartamento", "aniversário", "resiliência", "exponencial", "temperatura", "mitocôndria", "fermentação", "metabolismo", "substantivo", "interjeição", "ambiguidade", "onomatopeia", "có-có-ri-có", "processador", "pão-francês", "shabu-shabu", "micro-ondas", "travesseiro", "interruptor", "João Pessoa", "Porto Velho", "Santo André", "Santa Maria", "Sete Lagoas", "Carapicuíba", "Santa Luzia"];
var doze = ["aprendizagem", "conhecimento", "eletricidade", "fotossíntese", "pão-de-forma", "pão-integral", "guarda-roupa", "escrivaninha", "Porto Alegre", "Campo Grande", "São Bernardo", "Ponta Grossa", "São Leopoldo"];
var treze = ["solidariedade", "multiplicação", "probabilidade", "pão-de-queijo", "pé-de-moleque", "doce-de-leite", "condicionador", "Florianópolis", "Montes Claros", "Caxias do Sul", "Volta Redonda", "Novo Hamburgo", "Várzea Grande"];
var catorze = ["circunferência", "liquidificador", "mesa-de-centro", "Rio de Janeiro", "Belo Horizonte", "Ribeirão Preto", "Campina Grande"];
var quinze = ["ar-condicionado", "controle-remoto", "Duque de Caxias", "Mogi das Cruzes", "Taboão da Serra", "Itaquaquecetuba"];
var dezesseis = ["sustentabilidade", "Feira de Santana", "Lauro de Freitas", "Francisco Morato"];
var dezessete = ["Governador Valadares"];
var dezoito = ["São José do Rio Preto"];
var dezenove = ["Jaboatão dos Guararapes"];
var vinte = ["Nossa Senhora do Socorro"]; 

var PALAVRAS = [];

var FACIL = [];
    FACIL = tres.concat(quatro.concat(cinco));

var MEDIO = [];
    MEDIO = seis.concat(sete);

var DIFICIL = [];
    DIFICIL = oito.concat(nove);

var PALAVROES = [];
    PALAVROES = dez.concat(onze.concat(doze.concat(treze.concat(catorze.concat(quinze.concat(dezesseis.concat(dezessete.concat(dezoito))))))));


/**********************************************************************
 * @function removerPrimeiraOcorrencia
 * @version 0.4 (18/06/2024)
 * @description
 *
 * @param {string} [palavra=""]
 * @param {*} [PALAVRAS=[]]
 * @returns {*} 
 *! @throws 
 * @summary
 */
function removerPrimeiraOcorrencia(palavra="", PALAVRAS=[]) 
{
  // Encontra o índice da primeira ocorrência da palavra no vetor
  var indice = PALAVRAS.indexOf(palavra);
  
  // Verifica se alguma ocorrência da palavra foi encontrada
  if (indice !== -1) 
  {
    // Remove a palavra do vetor na posição do índice encontrado
    PALAVRAS.splice(indice, 1);
  }
  
  // Retorna o vetor modificado
  return PALAVRAS;
}
