console.clear ();

const prompt = require ('prompt-sync')();

do {
//introducao

// pedindo o nome
console.log ('Para iniciar o game digite seu nome:  ');
let nome = prompt ();

//introdução
console.log ('Olá', nome,',infelizmente tivemos um problema na linha do tempo durante o bug do milenio...\nvocê tem uma única chance de voltar para seu tempo, mas terá que passar por desafios...');
console.log('____________________________________________________________________________');

//declarando variavel de reinicio
let reiniciar

fim = () =>
{
(valores.valordaforca == 0)
return true;
}

fim2 = () =>
{
(valores.valordav == 0)
return true;
}

fim3 = () =>
{
(valores.horarestante == 0)
return true;
}


//variaveis de valores para usar durante o jogo
let valores = {

    //vida:
    valordav:100,

    //força:
    valordaforca:50, 

    //hora 
     horarestante: 24,

    // separando capitulos por eras
    era : 1
}

// função de avançar a era
    function avancaera ( ) {
       valores.era ++;
        console.log ('Você avançou para Era',valores.era);
    }   

// inicio do jogo

 // mostrando valores
console.log('Você está Era',valores.era,'\n\nvida:',valores.valordav, 'resistência:', valores.valordaforca, '\nRestam ',valores.horarestante,'horas');

//primeira historia - jurassic

// \n pular linha \n \n pular duas 

console.log (nome,'- Pensei ser um sonho... a todo lado haviam seres gigantes, na água, no céu, na terra\n');

// fazendo a primeira escolha
console.log ('espera... eu sou um deles? aaaaaaah porque esses tiranos estão me perseguindo? \n O que eu devo fazer? \n Tentar fugir (a) \n Tentar lutar (b)\n');
let cap1Escolha = prompt ();

//enquanto escolha diferente de a ou b repetir a pergunta
for (let i = 0; cap1Escolha != "a" && cap1Escolha != "b";i++)
{
    console.log("Digite uma opção válida");
   console.log ('O que eu devo fazer? \n Tentar fugir (a) \n Tentar lutar (b)\n');
   cap1Escolha = prompt ();
  }

  // se a escolha for 'a'
    if (cap1Escolha == "a")
     {
        valores.horarestante -=2;
        console.log ('Olha que sorte! você tinha asas e conseguiu escapar sem perder vida, mas perdeu força. \n vida:',valores.valordav, 'força: ', valores.valordaforca);
    }
         
    else if (cap1Escolha == "b") { 
        // alterando valores e depois continuando
         valores.valordav -=20 ;
         valores.valordaforca -=10;
         valores.horarestante -=2;

        console.log ('Vida:',valores.valordav, 'Resistência: ', valores.valordaforca);
        console.log ('Foi uma batalha e tanto! por ser maior você conseguiu vencer, mas no meio da luta acabou recebendo alguns danos.\n\n ');
    }

    //passagem para proxima era
    console.log (nome,'- do nada tudo desaparece e entro numa espécie de túnel do tempo, varias épocas passam na minha frente, até que...\n\n');

    //mostrando tempo restante
    console.log ('restam',valores.horarestante,'horas');

    //chamando  a função de avançar a era
avancaera ();

 console.log('____________________________________________________________________________');

 //era da lua
console.log('Armstrong - Este é um pequeno passo para um homem; um salto gigantesco para humanidade!\n após ouvir esta frase, abro os olhos e...\nESTOU NA LUA?\nArm - Sem tempo pra pensar cara, precisamos voltar pra nave, nosso oxigênio vai acabar!\n');
console.log ( nome,'- Espera... mas onde está a nave??\n \n Arm -Temos que manter a calma! Podemos arriscar usar os rádios de emergência e contatar a nave, ou podemos sair em busca da nave, ela não deve ter ido muito longe!\n');

// colocar a pergunta no console primeiro e depois chamar o prompt para deixar mais bonito

//fazendo a segunda escolha
console.log ('Usar os radios (a): o rádio só pode ser usado uma vez e corre risco de não funcionar\n \n Procurar a nave pela lua (b): corre risco por não conhecer o local');
let cap2escolha = prompt();

while (cap2escolha != "a" && cap2escolha != "b")
{
    console.log("Digite uma opção válida\n");
    console.log ('Usar os radios (a): o rádio só pode ser usado uma vez e corre risco de não funcionar\n Procurar a nave pela lua (b): corre risco por não conhecer o local');
let cap2escolha = prompt();
}

if (cap2escolha == "a")
 {  
    valores.valordav -=20;
    valores.horarestante -=2;

    console.log ('restam',valores.horarestante,'horas');
    console.log ('- ALO! ALO! TEM ALGUÉM AÍ?? PERDEMOS A NAVE. ALGUÉM?\n Radio - o..o.i... oo..v..ind..o\n Arm - não funcionou...\n ');

    // sempre mostrar os valores deois da escolha
console.log( 'vida:',valores.valordav, 'Resistência: ', valores.valordaforca,'\n');

//terceira escolha
console.log ('O que faremos agora?\n \n Procurar a nave pela lua (a)\n \n Esperar ajuda (b)');
let escolha2de2 = prompt ();


if (escolha2de2 == 'a' )
{
    valores.horarestante -=7;
    valores.valordav -=10;
    valores.valordaforca -=10;

    console.log ('- Vamos lá... ficar parado aqui pode ser perigoso. \n ');
    console.log ('restam',valores.horarestante,'horas\n \n O que é aquilo??');
}

    else (escolha2de2 == 'b' )
     {
        valores.horarestante -=24;
        valores.valordaforca =0;
        valores.valordav =0;

        console.log ('ficamos sentados por horas esperando por alguma ajuda, sempre com muita esperança... mas no fim não resistimos...');
        console.log( 'vida:',valores.valordav, 'Resistência: ', valores.valordaforca);
        console.log ('******GAME OVER******');

        break
       // reiniciar = prompt ('Deseja jogar novamente?') 
        } 
    
} 
else (cap2escolha == "b")
 {  
    valores.valordaforca -=10;
    valores.valordav -=30;
    valores.horarestante -=7;

    console.log ('- Vamos lá... ficar parado aqui pode ser perigoso.\n Depois de umas horas andando... \n O que é aquilo?? olho para frente e vejo a nave, que alivio!!! Vamos até la '); 
    console.log( 'vida:',valores.valordav, 'Resistência: ', valores.valordaforca, '\n','Restam',valores.horarestante,'horas');
}

// passagem ultima era

 avancaera ( ) 

console.log (nome,'- tudo desaparece novamente e volto para o tunel, varias épocas passam na minha frente, e no visor mostra que estou em 2050\n Robô - o seu último desafio é passar por aquela porta que está há 30km de você antes que o tempo acabe, boa sorte!');
console.log( 'vida:',valores.valordav, 'Resistência: ', valores.valordaforca, '\n','Restam',valores.horarestante,'horas\n \n -Vejo que na parede está escrito: há uma moto 5 km para trás\n\n Ir para moto (a)\n Seguir meu caminho (b)');
let cap3escolha = prompt();

if (cap3escolha == 'a') 
{ 
    valores.valordaforca -=15;
    valores.valordav -=15;
    valores.horarestante -=3;
    
    console.log ('- depois de horas andando, chego perto da moto com felicidade, mas quando tento ligar percebo que não tem gasolina! Apenas perdi tempo')
    console.log( 'vida:',valores.valordav, 'Resistência: ', valores.valordaforca, '\n','Restam',valores.horarestante,)
    if (fim())
{
    break
}
}
else (cap3escolha == 'b') 
{
valores.valordaforca+= 6

console.log ('boa escolha! você não pode perder tempo');
console.log( 'vida:',valores.valordav, 'Resistência: ', valores.valordaforca, '\n','Restam',valores.horarestante,'horas');
}

console.log (nome,'- preciso ir logo, não posso perder tempo!\n algumas horas depois... encontro uma espécie de cabana, dentro da cabana havia uma panela com água, faltam apenas 5 km, o que devo fazer? \n Beber a água (a)\n');
let cap4escolha = prompt();


valores.horarestante -=1;


if (cap4escolha == 'a' )
 {
    valores.valordaforca +=10;
    valores.valordav +=5;
console.log ('a água te ajudou a ganhar resistência, boa escolha!');
    console.log( 'vida:',valores.valordav, 'Resistência: ', valores.valordaforca, '\n','Restam',valores.horarestante,'horas');
}

console.log ('cheguei na porta! agora só preciso abri-la.\n para abrir a porta, você precisa ter a resistencia > 10');

if (valores.valordaforca >=10)
{
    console.log ('***********************PARABÉNS!!!!************************* \nVocê passou por todas as etapas econseguiu vencer o game');
    reiniciar = prompt ('Deseja jogar novamente?') ;
}
else {
    break;
}
} while (reiniciar = 'sim') ;

