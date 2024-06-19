/**********************************************************************
 * @file Arquivo com os vetores das palavras utilizadas durante o jogo
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

function removerPrimeiraOcorrencia(palavra, PALAVRAS) 
{
  // Encontra o índice da primeira ocorrência da palavra no vetor
  var index = PALAVRAS.indexOf(palavra);
  
  // Verifica se a palavra foi encontrada
  if (index !== -1) 
  {
    // Remove a palavra do vetor na posição do índice encontrado
    PALAVRAS.splice(index, 1);
  }
  
  // Retorna o vetor modificado
  return PALAVRAS;
}

/*
const words = [
    "casa", "cachorro", "gato", "água", "sol", "lua", "estrela", "família", "amigo", "trabalho",
    "escola", "computador", "celular", "livro", "música", "filme", "jogo", "praia", "viagem", "futebol",
    "amor", "felicidade", "sorriso", "esperança", "sonho", "comida", "bebida", "frio", "calor", "chuva",
    "arco-íris", "montanha", "rio", "mar", "floresta", "deserto", "cidade", "vila", "caminho", "estrada",
    "avenida", "prédio", "apartamento", "jardim", "parque", "praça", "bairro", "vizinho", "rua", "esquina",
    "hospital", "igreja", "templo", "mesquita", "sinagoga", "festa", "aniversário", "casamento", "batizado",
    "celebração", "alegria", "tristeza", "saudade", "esperança", "medo", "coragem", "resiliência", "paz",
    "guerra", "violência", "solidariedade", "união", "justiça", "liberdade", "democracia", "natureza", "arte",
    "cultura", "história", "geografia", "ciência", "matemática", "física", "química", "biologia", "educação",
    "ensino", "aprendizagem", "conhecimento", "tecnologia", "inovação", "progresso", "sustentabilidade"
  ];
  
const Matematica = ["número", "soma", "subtração", "multiplicação", "divisão", "adição", "equação", "problema", "geometria", "área", "perímetro", "volume", "raiz", "potência", "ângulo", "gráfico", "circunferência", "função", "proporção", "matriz", "derivada", "integral", "exponencial", "logaritmo", "probabilidade"];
const Fisica = ["energia", "força", "movimento", "velocidade", "aceleração", "trabalho", "potência", "momento", "inércia", "gravidade", "massa", "densidade", "pressão", "temperatura", "calor", "som", "ondas", "frequência", "amplitude", "refração", "espelho", "lente", "eletricidade", "carga", "corrente"];
const Biologia = ["célula", "dna", "genes", "mitocôndria", "organela", "membrana", "citoplasma", "núcleo", "ribossomo", "cromossomo", "clorofila", "fotossíntese", "respiração", "fermentação", "metabolismo", "sistema", "tecido", "órgão", "órgão", "sangue", "tecido", "músculo", "neurônio", "cromossomo", "genética"];
const Portugues = ["gramática", "sintaxe", "semântica", "ortografia", "acentuação", "conjugação", "substantivo", "adjetivo", "verbo", "advérbio", "preposição", "conjunção", "interjeição", "sinônimo", "antônimo", "polissemia", "ambiguidade", "figura", "linguagem", "metáfora", "metonímia", "hipérbole", "ironia", "eufemismo", "onomatopeia"];
const onomatopeias = ["tic-tac", "tilintar", "splash", "bang", "pipocar", "zum-zum", "clique", "tchau", "ronco", "estalo", "plim-plim", "miau", "có-có-ri-có", "toc-toc", "tique" ];
const esportes = ["futebol", "vôlei", "natação", "basquete", "handebol", "atletismo", "ginástica", "ciclismo", "boxe", "judô", "tênis", "surf", "remo", "hipismo", "taekwondo", "karatê", "skate", "patinação", "escalada", "hóquei", "rúgbi", "luta", "triathlon", "ginástica", "beisebol"];
const informatica = ["computador", "teclado", "mouse", "monitor", "impressora", "scanner", "roteador", "modem", 
"hacker", "firewall", "antivírus", "software", "hardware", "rede", "internet", "site", "email", "senha", "backup", 
"arquivo", "pasta", "byte", "processador", "memória"];

const produtosAlimenticios = ["arroz", "feijão", "macarrão", "farinha", "açúcar", "sal", "óleo", "azeite", "manteiga", "leite", 
"queijo", "iogurte", "creme", "coalhada", "requeijão", "presunto", "mortadela", "linguiça", "salsicha", "bacon", "frango", 
"carne", "peixe", "camarão", "lagosta", "caranguejo", "polvo", "lula", "atum", "sardinha", "salame", "azeitona", "pão", 
"biscoito", "bolacha", "torrada", "pão-de-queijo", "bolo", "torta", "pastel", "coxinha", "pão-francês", "pão-de-forma", 
"pão-integral", "croissant", "baguete", "sanduíche", "hambúrguer", "pizza", "tapioca", "crepe", "panqueca", "lasanha", 
"espaguete", "canelloni", "risoto", "sushi", "sashimi", "tempura", "sobá", "udon", "ramen", "natto", "shabu-shabu", "yakissoba", 
"moqueca", "bobó", "feijoada", "acarajé", "vatapá", "caruru", "tapioca", "pamonha", "curau", "cuscuz", "munguzá", "canjica", 
"arroz-doce", "manjar", "brigadeiro", "cajuzinho", "pé-de-moleque", "doce-de-leite", "bala", "chiclete", "pirulito", 
"chocolate", "sorvete", "picolé", "gelatina", "mousse", "compota", "geleia", "mel", "rapadura", "cuscuz", 
"tapioca"];

const coisasEmCasa = ["sofá", "cadeira", "mesa", "geladeira", "fogão", "micro-ondas", "liquidificador", "torradeira", "panela", 
"prato", "copo", "talher", "escova", "pente", "shampoo", "condicionador", "sabonete", "toalha", "espelho", "secador", 
"perfume", "lâmpada", "abajur", "cama", "travesseiro", "cobertor", "lençol", "armário", "guarda-roupa", "cabide", 
"escrivaninha", "computador", "notebook", "teclado", "mouse", "impressora", "papel", "caneta", "lápis", "borracha", 
"caderno", "livro", "revista", "televisão", "controle", "som", "aparelho", "sofá-cama", "mesa-de-centro", 
"estante", "prateleira", "abajur", "tapete", "cortina", "janela", "persiana", "ventilador", "ar-condicionado", 
"aquecedor", "relógio", "rádio", "telefone", "celular", "tablet", "câmera", "chave", "fechadura", "maçaneta", 
"trinco", "tomada", "interruptor", "cabos", "fios", "carregador", "bateria", "controle-remoto", "cartão", "dinheiro", 
"documento", "agenda", "óculos", "relógio", "joias", "pincel", "tinta", "lona", "easel", "paleta", "tintas", 
"espátula", "aquarela", "óleo", "gesso", "papel", "cavalete", "telas", "pincéis"];


const cidadesBrasil = ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Goiânia", "Belém", "Porto Alegre", "São Luís", "Maceió", "Campo Grande", "Natal", "Teresina", "João Pessoa", "Cuiabá", "Aracaju", "Florianópolis", "Macapá", "Vitória", "Rio Branco", "Palmas", "Boa Vista", "Porto Velho", "São José", "Santo André", "Osasco", "São Bernardo", "Duque de Caxias", "Serra", "Sorocaba", "Ribeirão Preto", "Cariacica", "Londrina", "Vila Velha", "Jaboatão dos Guararapes", "Feira de Santana", "Anápolis", "Niterói", "Campina Grande", "Montes Claros", "Mogi das Cruzes", "São José do Rio Preto", "Piracicaba", "Barueri", "Suzano", "Mauá", "Santa Maria", "Ponta Grossa", "Canoas", "Ilhéus", "Pelotas", "Santarém", "Marabá", "Caxias do Sul", "Petrolina", "Uberaba", "Volta Redonda", "Caucaia", "Governador Valadares", "Novo Hamburgo", "Limeira", "São Carlos", "Petrópolis", "Taboão da Serra", "Magé", "Itaquaquecetuba", "Lauro de Freitas", "Paulista", "Sete Lagoas", "Guarujá", "Cotia", "Sumaré", "Marília", "Carapicuíba", "Itabuna", "Uruguaiana", "Várzea Grande", "Dourados", "Santa Luzia", "Paranaguá", "Rio Grande", "Camaçari", "Bagé", "Valinhos", "Maricá", "Cascavel", "Mossoró", "Nossa Senhora do Socorro", "Americana", "Itapevi", "Barreiras", "São Leopoldo", "Maranguape", "Francisco Morato", "Colombo"];


//const words = ["Tokyo","Delhi","Shanghai","Sao Paulo","Mumbai","Beijing","Mexico City","Osaka","Cairo","New York City","Dhaka","Karachi","Buenos Aires","Istanbul","Kolkata","Manila","Lagos","Rio de Janeiro","Tianjin","Kinshasa","Guangzhou","Los Angeles","Moscow","Shenzhen","Lahore","Bangalore","Paris","Bogota","Jakarta","Chennai","Lima","Bangkok","Seoul","Nagoya","Hyderabad","London","Tehran","Chicago","Chengdu","Nanjing","Wuhan","Ho Chi Minh City","Luanda","Ahmedabad","Kuala Lumpur","Hangzhou","Hong Kong","Riyadh","Baghdad","Toronto","Santiago","Dallas","San Francisco","Singapore","Philadelphia","Atlanta","Boston","Miami","Phoenix","Detroit","Seattle","Minneapolis","San Diego","Tampa","Denver","Baltimore","Orlando","Saint Petersburg","Charlotte","San Antonio","Austin","Columbus","Indianapolis","Fort Worth","Nashville","Portland","Las Vegas","Milwaukee","Albuquerque","Tucson","Fresno","Sacramento","Long Beach","Kansas City","Omaha","Virginia Beach","Miami","Oakland","Tulsa","Honolulu","Minneapolis","Arlington","Wichita","Raleigh","St. Louis","Santa Ana","Anaheim","Tampa","Pittsburgh","Cincinnati"];
//const words = ['apple', 'banana', 'cherry', 'orange', 'grape', 'watermelon', 'pineapple', 'strawberry', 'blueberry', 'kiwi'];
*/