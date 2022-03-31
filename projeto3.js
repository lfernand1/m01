console.clear ();
const prompt = require ('prompt-sync')()

//introducao


let nome = prompt ('Para iniciar o game digite seu nome:  ')

console.log ('Olá', nome,',infelizmente tivemos um problema na linha do tempo durante o bug do milenio...\nvocê tem uma única chance de voltar para seu tempo, mas terá que passar por desafios...')
console.log('____________________________________________________________________________')

let reiniciar 

let valores = {
    //vida:
    valordav:100,
    //força:
    valordaforca:50, 
}

let tempo = {
    era : 0
}
    function avancaera ( ) {
        tempo.era ++;
        console.log ('Você está na Era',tempo.era)
    }   

  //  while (reiniciar == 'sim') {
// inicio 
avancaera ()
console.log( 'vida:',valores.valordav, 'força:', valores.valordaforca)
// cap 1
console.log (nome,'- Pensei ser um sonho... a todo lado haviam seres gigantes, na água, no céu, na terra')
console.log ( )
console.log ('espera... eu sou um deles? aaaaaaah porque esses tiranos estão me perseguindo?')
let cap1Escolha = prompt ('O que eu devo fazer? \n Tentar fugir (a) \n Tentar lutar (b)\n')
  
    if (cap1Escolha == "a") {
        
        console.log ('Olha que sorte! você tinha asas e conseguiu escapar sem perder vida, mas perdeu força. \n vida:',valores.valordav, 'força: ', valores.valordaforca)
    }
        
    else if (cap1Escolha == "b") { 
         valores.valordav -=20 
         valores.valordaforca +=30
        console.log( 'vida:',valores.valordav, 'força: ', valores.valordaforca)
        console.log ('Foi uma batalha e tanto! por ser maior você conseguiu vencer, mas no meio da luta acabou recebendo alguns danos. ')
    }
 

 







  //  reiniciar = prompt ('Deseja jogar novamente?') }