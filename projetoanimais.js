console.clear ();
const prompt = require ('prompt-sync')();


//contando a historia
console.log ("Olá jogador, seja bem vindo...");
console.log( ) ;
console.log ("Neste jogo temos 3 animais: Cachorro, Gato e Rato.") ;
console.log ("Funciona como um jokenpo, onde o Cachorro ganha do Rato, o Rato ganha do Gato e o Gato ganha do Cachorro");
console.log ( ) ;


//declarando var
let animais = ["cachorro","gato","rato"] ;
//cachorro pedra, gato papel , rato tesoura
//numero aleatorio
let comp  ;
let escolha = 'sim' ;

// convertendo variaveis em numeros para sorteio 

//iniciando rodada;
while (escolha == 'sim')
{
let rodadas = prompt('Digite o número de rodadas');

let empate=0
let derrota =0
let vitoria =0

for(let i =0; 
    i<rodadas;
    i++)

while (rodadas>0) {
    rodadas --
 comp = animais[Math.round(Math.random(2) )];
 
let pessoa = prompt('escolha entre cachorro, gato ou rato');
console.log ('O console irá jogar como',comp);


//determinando o valor de cada

if (comp === "cachorro" && pessoa==="cachorro" )

{empate = empate + 1
    console.log (empate,'EMPATE!')}

else if (comp=== "cachorro" && pessoa=== "gato") 
{ vitoria = vitoria +1
    console.log (vitoria,'GANHOU!!!')}

else if(comp=== "cachorro" && pessoa=== "rato") 
{ derrota = derrota+1
    console.log (derrota,'PERDEU ;-;')}

if (comp=== "gato" && pessoa=== "gato")
 { empate = empate + 1
     console.log (empate,'EMPATE!')}

else if (comp=== "gato" && pessoa=== "rato") 
{ vitoria = vitoria +1
    console.log (vitoria,'GANHOU!!!')}

else if (comp=== "gato" && pessoa=== "cachorro") 
{ derrota = derrota+1
    console.log (derrota,'PERDEU ;-;')}

if (comp=== "rato" && pessoa=== "rato")
 {empate = empate + 1
    console.log (empate,'EMPATE!')}

else if (comp=== "rato" && pessoa=== "cachorro")
 {  vitoria = vitoria +1
     console.log (vitoria,'GANHOU!!!')}

else if (comp=== "rato" && pessoa=== "gato") 
{ derrota = derrota+1
    console.log (derrota,'PERDEU ;-;')}
}
console.log ('você ganhou', vitoria, 'vezes')

// perguntar ao jogador se quer jogar novamente
 
escolha = prompt ('Deseja jogar novamente?') }