const elementHumor = document.querySelectorAll("#Humor");
const elementGif = document.querySelectorAll("#gif");
let value = document.querySelectorAll("#button") ;
const descricao = document.querySelectorAll ("#descricao")

function next ()
 {

if(value === "NEXT"){
elementHumor.innerHTML= "Sad"
console.log('sad')
descricao.innerHTML = "Mars - Yungblud: funciona como uma conversa de apoio do cantor com o público, mostrando como ele entende a situação de se sentir pedido e irrelevante diante dos outros, pensando “existe alguma vida em Marte?”, onde alguém o entenda e o veja como ele é."
elementGif.src = "./assets/gifs/no-yungblud"
value= "NEXT 1" ;
}

 else if(value === "NEXT 1"){
     console.log ('Love')
    elementHumor.innerText = "Love" 
    descricao.innerText = "Finally - Halsey: foi escrita no momento em que halsey percebeu estar em um relacionamento feliz pela primeira vez na vida."
     elementGif.src= "./assets/gifs/halsey.gif"
     value = "NEXT 2"}

 else if(value === "NEXT 2")
 {
    elementHumor.innerText= "Confused"
    descricao.innerHTML = "Bad Kind Of Butterflies - Camila: foi escrita em um momento de confusão na vida de Camila, onde ela não sabia ao certo o que estava sentindo."
    elementGif.src = "./assets/gifs/camila.jpg"
    value= "NEXT 3" }

    else (value === "NEXT 3")
    {
        elementHumor.innerText= "grudge"
        descricao.innerHTML = "Forget Me Too - Mgk: foi escrita após um termino de relacionamento de idas e voltas."
        elementGif.src = "./assets/gifs/mgk.gif"
        value= "NEXT" 
    }
}
