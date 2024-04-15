var Acertar_Facil = document.getElementById('Acertar_Facil');
var Acertar_Medio = document.getElementById('Acertar_Medio');
var Acertar_Dificil = document.getElementById('Acertar_Dificil');
var Ativar = document.getElementById('Ativar');
var Palavra = document.getElementById('Palavra');
var Falhar = document.getElementById('Falhar');
var Perder = document.getElementById('Perder');
var Passar_de_Fase = document.getElementById('Passar_de_Fase');
var Fase_1 = document.getElementById('Fase_1');
    if ( Fase_1 ) Fase_1.volume = 0.35;

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

function Gradiente()
{
    // Create a linear gradient from top to bottom
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#7777FF');  
        gradient.addColorStop(0.25, '#77FF77'); 
        gradient.addColorStop(0.5, '#FFFF77'); 
        gradient.addColorStop(0.75, '#FFAA77'); 
        gradient.addColorStop(1, '#FF7777');    

    // Fill the canvas with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
//Gradiente();

// Adjust the base font size as needed
const fontSize = 32 * pixelRatio; 
ctx.font = fontSize + "px Arial";

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

let currentWord;
let score = 0;
let wordXPosition = 0;
let wordYPosition = 0; // Initial position for word
let gameInterval;

// ******************************************************************************
// function getRandomWord_3segs(callback) {
//     setTimeout(function() {
//         var words = ['apple', 'banana', 'orange', 'grape', 'pineapple'];
//         var randomIndex = Math.floor(Math.random() * words.length);
//         var randomWord = words[randomIndex];
//         callback(randomWord);
//     }, 3000); // Wait for 3 seconds before returning a word
// }

function getRandomWord(callback) 
{
    callback(words[Math.floor(Math.random() * words.length)]);
}

// ******************************************************************************
var taxa_queda = 100/60; // taxa_queda = pixels / segundos
var limite_altura = canvas.height + (fontSize/2);
var atualizando_palavra = false;
var wordX_MaxPos = 0;
function update() 
{
    draw();
    if (currentWord === undefined) 
    {
        if ( atualizando_palavra == false )
        {
            atualizando_palavra = true;
            wordYPosition = 0; // Reset word position when a new word appears
            // currentWord = getRandomWord();
            setTimeout(function() {
                getRandomWord(function(word) 
                {
                    Palavra.play();
                    currentWord = word;
                    console.log('New word:', currentWord); 

                    wordX_MaxPos = canvas.width / 2 - ctx.measureText(currentWord).width / 2; 
                                  //ctx.measureText(currentWord).width;

                    wordXPosition = Math.floor(Math.random() * (wordX_MaxPos - 20)) + 20;
                    
                });
            }, 3000);
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
            
            Falhar.play();
        }
    }
}

// ******************************************************************************
function calculateScore(word) 
{
    return word.length;
}

// ******************************************************************************
function updateScore() 
{
    document.getElementById('score-value').innerText = score;
    if ( score > 25 )
    {
        Passar_de_Fase.play();
    }
}

// ******************************************************************************
document.getElementById('input').addEventListener('input', function (e) {
    if (e.target.value === currentWord) 
    {
        document.getElementById("correctWords").innerHTML += currentWord+"<br>";
        score += calculateScore(currentWord);
        updateScore();
        e.target.value = '';
        currentWord = undefined;
        atualizando_palavra = false;
        Acertar_Medio.play();
    }
});

// ******************************************************************************
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
function Iniciar()
{
    if (!gameInterval) 
    {
        gameInterval = setInterval(function() { update(); }, 1000 / 60); // 60 frames per second
        startTimer();
        if ( Fase_1 ) Fase_1.play();

    }
}
// document.getElementById('startBtn').addEventListener('click', function(){Iniciar();});

document.getElementById('startBtn').addEventListener('click', function() {
    var countdownElement = document.getElementById('countdown');
    countdownElement.style.display = 'block';
    startCountdown(countdownElement, 3, function() 
    {
        // Callback function after countdown
        countdownElement.style.display = 'none';
        Iniciar();
    });
});

function startCountdown(element, count, callback) 
{
    Ativar.play();
    update();

    var timer = setInterval(function() {
        element.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(timer);
            callback();
        }
    }, 1000);
}

// ******************************************************************************
document.getElementById('pauseBtn').addEventListener('click', function() {
    clearInterval(gameInterval);
    gameInterval = null;
});

// ******************************************************************************
document.getElementById('continueBtn').addEventListener('click', function() {
    if (!gameInterval) {
        gameInterval = setInterval(function() {
            update();
        }, 1000 / 60); // 60 frames per second
    }
});

// ******************************************************************************
var resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', function() 
{
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
});

// ******************************************************************************
var timerValue = 0;
var timerInterval;

// Function to update the timer
function updateTimer() {
    timerValue++;
    document.getElementById('timer-value').textContent = timerValue;
}

// Function to start the timer
function startTimer() {
    timerValue = 0;
    timerInterval = setInterval(updateTimer, 1000); // Update timer every second (1000 milliseconds)
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
}
