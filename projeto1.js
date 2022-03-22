const prompt = require(`prompt-sync`)();

console.log ('Você é um artista novo na gravadora e esta se inscrevendo para participar de uma banda, ja passou por algumas etapas pessoalmente, uma audição, e agora passará por um questionario')

console.log ('Novo Integrante')
let escolha = prompt ('Escolha uma banda musical...')  
console.log ( )
console.log ('Bem vindo as seletivas de um novo integrante para... ',escolha )
console.log ( )
console.log ('Você terá que passar por perguntas para ser admitido, tente de destacar!')

let nome = prompt ('Nos diga seu nome...')
console.log ('Muito bem', nome, ', nessa etapa você terá que responder 5 perguntas sobre sua vivencia com a musica. obs: responda apenas com sim ou nao')

let pergunta1 = prompt ('Você ja participou de alguma banda?')
let pergunta2 = prompt ('Toca algum instrumento musical?')
let pergunta3 = prompt ('Procura escutar muita música?')
let pergunta4 = prompt ('Já participou de shows ou apresentações durante sua carreira?')
let pergunta5 = prompt ('Está apto a ajudar nas composicões e criações de música em geral da banda?')

let somasim = 0
let somano =  0

if (pergunta1 = "sim" ) { somasim = somasim +1 }
else if  (pergunta1 = "nao"){somano = + 1} 

if (pergunta2 = "sim" ) { somasim = somasim + 1 }
else if  (pergunta2 = "nao"){somano = somano + 1} 


if (pergunta3 = "sim" ) { somasim = somasim +1 }
else if  (pergunta3 = "nao"){somano = somano + 1} 

if (pergunta4 = "sim" ) { somasim = somasim +1 }
else if  (pergunta4 = "nao"){somano = somano + 1}  

if (pergunta5 = "sim" ) { somasim = somasim +1 }
else if  (pergunta5 = "nao"){somano = somano + 1} 

function resultado ()
  {if (somasim = 5) {console.log ('Parabéns, você foi classificado para etapa final!')
}
  else if (somasim= 4) {console.log ('Foi por  pouco! mas vc passou') 
} else if (somasim= 3) {console.log ('Não foi dessa vez, mas não desista! você quase conseguiu') 
} else if (somasim = 2) {console.log ('você falhou! mas não se desespere, você pode tentar novamente.') 
} else if (somasim= 1) {console.log ('você falhou! mas não se desespere, você pode tentar novamente.')
} else {console.log ('você falhou miseravelmente')}
}
