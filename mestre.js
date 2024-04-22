var Acertar_Facil=document.getElementById("Acertar_Facil"),Acertar_Medio=document.getElementById("Acertar_Medio"),Acertar_Dificil=document.getElementById("Acertar_Dificil"),Ativar=document.getElementById("Ativar"),Palavra=document.getElementById("Palavra"),Falhar=document.getElementById("Falhar"),Perder=document.getElementById("Perder"),Passar_de_Fase=document.getElementById("Passar_de_Fase"),Fase_1=document.getElementById("Fase_1");console.log(Fase_1),Fase_1&&(Fase_1.volume=.35);const canvas=document.getElementById("gameCanvas"),ctx=canvas.getContext("2d"),pixelRatio=window.devicePixelRatio||1;canvas.width=480*pixelRatio,canvas.height=640*pixelRatio,canvas.style.width="480px",canvas.style.height="640px",ctx.scale(pixelRatio,pixelRatio);var sectionHeight=canvas.height/5;function Gradiente(){var a=ctx.createLinearGradient(0,0,0,canvas.height);a.addColorStop(0,"#7777FF"),a.addColorStop(.25,"#77FF77"),a.addColorStop(.5,"#FFFF77"),a.addColorStop(.75,"#FFAA77"),a.addColorStop(1,"#FF7777"),ctx.fillStyle=a,ctx.fillRect(0,0,canvas.width,canvas.height)}const fontSize=32*pixelRatio;ctx.font=fontSize+"px Arial";const words=["casa","cachorro","gato","água","sol","lua","estrela","família","amigo","trabalho","escola","computador","celular","livro","música","filme","jogo","praia","viagem","futebol","amor","felicidade","sorriso","esperança","sonho","comida","bebida","frio","calor","chuva","arco-íris","montanha","rio","mar","floresta","deserto","cidade","vila","caminho","estrada","avenida","prédio","apartamento","jardim","parque","praça","bairro","vizinho","rua","esquina","hospital","igreja","templo","mesquita","sinagoga","festa","aniversário","casamento","batizado","celebração","alegria","tristeza","saudade","esperança","medo","coragem","resiliência","paz","guerra","violência","solidariedade","união","justiça","liberdade","democracia","natureza","arte","cultura","história","geografia","ciência","matemática","física","química","biologia","educação","ensino","aprendizagem","conhecimento","tecnologia","inovação","progresso","sustentabilidade"],Matematica=["número","soma","subtração","multiplicação","divisão","adição","equação","problema","geometria","área","perímetro","volume","raiz","potência","ângulo","gráfico","circunferência","função","proporção","matriz","derivada","integral","exponencial","logaritmo","probabilidade"],Fisica=["energia","força","movimento","velocidade","aceleração","trabalho","potência","momento","inércia","gravidade","massa","densidade","pressão","temperatura","calor","som","ondas","frequência","amplitude","refração","espelho","lente","eletricidade","carga","corrente"],Biologia=["célula","dna","genes","mitocôndria","organela","membrana","citoplasma","núcleo","ribossomo","cromossomo","clorofila","fotossíntese","respiração","fermentação","metabolismo","sistema","tecido","órgão","órgão","sangue","tecido","músculo","neurônio","cromossomo","genética"],Portugues=["gramática","sintaxe","semântica","ortografia","acentuação","conjugação","substantivo","adjetivo","verbo","advérbio","preposição","conjunção","interjeição","sinônimo","antônimo","polissemia","ambiguidade","figura","linguagem","metáfora","metonímia","hipérbole","ironia","eufemismo","onomatopeia"],onomatopeias=["tic-tac","tilintar","splash","bang","pipocar","zum-zum","clique","tchau","ronco","estalo","plim-plim","miau","có-có-ri-có","toc-toc","tique"],esportes=["futebol","vôlei","natação","basquete","handebol","atletismo","ginástica","ciclismo","boxe","judô","tênis","surf","remo","hipismo","taekwondo","karatê","skate","patinação","escalada","hóquei","rúgbi","luta","triathlon","ginástica","beisebol"],informatica=["computador","teclado","mouse","monitor","impressora","scanner","roteador","modem","hacker","firewall","antivírus","software","hardware","rede","internet","site","email","senha","backup","arquivo","pasta","byte","processador","memória"],produtosAlimenticios=["arroz","feijão","macarrão","farinha","açúcar","sal","óleo","azeite","manteiga","leite","queijo","iogurte","creme","coalhada","requeijão","presunto","mortadela","linguiça","salsicha","bacon","frango","carne","peixe","camarão","lagosta","caranguejo","polvo","lula","atum","sardinha","salame","azeitona","pão","biscoito","bolacha","torrada","pão-de-queijo","bolo","torta","pastel","coxinha","pão-francês","pão-de-forma","pão-integral","croissant","baguete","sanduíche","hambúrguer","pizza","tapioca","crepe","panqueca","lasanha","espaguete","canelloni","risoto","sushi","sashimi","tempura","sobá","udon","ramen","natto","shabu-shabu","yakissoba","moqueca","bobó","feijoada","acarajé","vatapá","caruru","tapioca","pamonha","curau","cuscuz","munguzá","canjica","arroz-doce","manjar","brigadeiro","cajuzinho","pé-de-moleque","doce-de-leite","bala","chiclete","pirulito","chocolate","sorvete","picolé","gelatina","mousse","compota","geleia","mel","rapadura","cuscuz","tapioca"],coisasEmCasa=["sofá","cadeira","mesa","geladeira","fogão","micro-ondas","liquidificador","torradeira","panela","prato","copo","talher","escova","pente","shampoo","condicionador","sabonete","toalha","espelho","secador","perfume","lâmpada","abajur","cama","travesseiro","cobertor","lençol","armário","guarda-roupa","cabide","escrivaninha","computador","notebook","teclado","mouse","impressora","papel","caneta","lápis","borracha","caderno","livro","revista","televisão","controle","som","aparelho","sofá-cama","mesa-de-centro","estante","prateleira","abajur","tapete","cortina","janela","persiana","ventilador","ar-condicionado","aquecedor","relógio","rádio","telefone","celular","tablet","câmera","chave","fechadura","maçaneta","trinco","tomada","interruptor","cabos","fios","carregador","bateria","controle-remoto","cartão","dinheiro","documento","agenda","óculos","relógio","joias","pincel","tinta","lona","easel","paleta","tintas","espátula","aquarela","óleo","gesso","papel","cavalete","telas","pincéis"],cidadesBrasil=["São Paulo","Rio de Janeiro","Brasília","Salvador","Fortaleza","Belo Horizonte","Manaus","Curitiba","Recife","Goiânia","Belém","Porto Alegre","São Luís","Maceió","Campo Grande","Natal","Teresina","João Pessoa","Cuiabá","Aracaju","Florianópolis","Macapá","Vitória","Rio Branco","Palmas","Boa Vista","Porto Velho","São José","Santo André","Osasco","São Bernardo","Duque de Caxias","Serra","Sorocaba","Ribeirão Preto","Cariacica","Londrina","Vila Velha","Jaboatão dos Guararapes","Feira de Santana","Anápolis","Niterói","Campina Grande","Montes Claros","Mogi das Cruzes","São José do Rio Preto","Piracicaba","Barueri","Suzano","Mauá","Santa Maria","Ponta Grossa","Canoas","Ilhéus","Pelotas","Santarém","Marabá","Caxias do Sul","Petrolina","Uberaba","Volta Redonda","Caucaia","Governador Valadares","Novo Hamburgo","Limeira","São Carlos","Petrópolis","Taboão da Serra","Magé","Itaquaquecetuba","Lauro de Freitas","Paulista","Sete Lagoas","Guarujá","Cotia","Sumaré","Marília","Carapicuíba","Itabuna","Uruguaiana","Várzea Grande","Dourados","Santa Luzia","Paranaguá","Rio Grande","Camaçari","Bagé","Valinhos","Maricá","Cascavel","Mossoró","Nossa Senhora do Socorro","Americana","Itapevi","Barreiras","São Leopoldo","Maranguape","Francisco Morato","Colombo"];let currentWord,score=0,wordXPosition=0,wordYPosition=0,gameInterval;function getRandomWord(a){a(words[Math.floor(Math.random()*words.length)])}var taxa_queda=100/60,limite_altura=canvas.height+fontSize/2,atualizando_palavra=!1,wordX_MaxPos=0,tempo_nova_palavra=3e3;function update(){draw(),void 0===currentWord?0==atualizando_palavra&&(atualizando_palavra=!0,wordYPosition=0,setTimeout(function(){getRandomWord(function(a){Palavra.play(),currentWord=a,console.log("New word:",currentWord),wordX_MaxPos=canvas.width/2-ctx.measureText(currentWord).width/2,wordXPosition=Math.floor(Math.random()*(wordX_MaxPos-20))+20})},tempo_nova_palavra)):(3e3==tempo_nova_palavra&&(tempo_nova_palavra=1e3),wordYPosition+=taxa_queda,wordYPosition>limite_altura&&(document.getElementById("wrongWords").innerHTML+=currentWord+"<br>",0<score&&(score-=calculateScore(currentWord)/2),score<0&&(score=0),updateScore(),currentWord=void 0,atualizando_palavra=!1,Falhar.play()))}function calculateScore(a){return a.length}function updateScore(){document.getElementById("score-value").innerText=score,25<score&&Passar_de_Fase.play()}function draw(){var a,e;ctx.clearRect(0,0,canvas.width,canvas.height),Gradiente(),null!=currentWord&&(a=wordXPosition,e=wordYPosition,ctx.fillStyle="black",ctx.fillText(currentWord,a,e))}function Iniciar(){gameInterval||(gameInterval=setInterval(function(){update()},1e3/60),startTimer(),Fase_1&&Fase_1.play())}function startCountdown(a,e,o){Ativar.play(),update();var t=setInterval(function(){a.textContent=e,--e<0&&(clearInterval(t),o())},1e3)}document.getElementById("input").addEventListener("input",function(a){a.target.value===currentWord&&(document.getElementById("correctWords").innerHTML+=currentWord+"<br>",score+=calculateScore(currentWord),updateScore(),a.target.value="",currentWord=void 0,atualizando_palavra=!1,Acertar_Medio.play())}),draw(),document.getElementById("startBtn").addEventListener("click",function(){var a=document.getElementById("countdown");a.style.display="block",startCountdown(a,3,function(){a.style.display="none",Iniciar()})}),document.getElementById("pauseBtn").addEventListener("click",function(){clearInterval(gameInterval),gameInterval=null}),document.getElementById("continueBtn").addEventListener("click",function(){gameInterval=gameInterval||setInterval(function(){update()},1e3/60)});var resetButton=document.getElementById("resetBtn");resetButton.addEventListener("click",function(){stopTimer(),document.getElementById("correctWords").innerHTML="",document.getElementById("wrongWords").innerHTML="",gameInterval=null,currentWord=void 0,atualizando_palavra=!1,document.getElementById("countdown").textContent=3,draw(),document.getElementById("score-value").textContent="0"});var timerInterval,timerValue=0;function updateTimer(){timerValue++,document.getElementById("timer-value").textContent=timerValue}function startTimer(){timerValue=0,timerInterval=setInterval(updateTimer,1e3)}function stopTimer(){clearInterval(timerInterval)}