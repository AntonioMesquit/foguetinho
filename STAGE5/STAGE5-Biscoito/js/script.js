const biscoito = document.querySelector(".biscoito");
const body = document.querySelector("body")
let textosorte = document.querySelector(".texto-sorte")
const but = document.querySelector(".but");

lista = [
    texto = "A vida trará coisas boas se tiver paciência.",
    texto = "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    texto = "Não compense na ira o que lhe falta na razão.",
    texto = "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    texto = "A maior de todas as torres começa no solo.",
    texto = "Amizade e Amor são coisas que se unem num piscar de olhos.",
    texto = "Não há que ser forte. Há que ser flexível.",
    texto = "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    texto = "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    texto = "A juventude não é uma época da vida, é um estado de espírito.",
    texto = "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    texto = "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
    texto = "Siga os bons e aprenda com eles.",
    texto = "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    texto = "O bom-senso vale mais do que muito conhecimento.",
    texto = "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
    texto = "São os nossos amigos que nos ensinam as mais valiosas lições.",
    texto = "Aquele que se importa com o sentimento dos outros, não é um tolo.",
    texto = "A adversidade é um espelho que reflete o verdadeiro eu.",
    texto = "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    texto = "Uma bela flor é incompleta sem as suas folhas.",
    texto = "Sem o fogo do entusiasmo, não há o calor da vitória",
    texto = "O riso é a menor distância entre duas pessoas.",
    texto = "Os defeitos são mais fortes quando o amor é fraco.",
    texto = "Nós somos o que pensamos.",
    texto = "A maior de todas as torres começa no solo.",
    texto = "A vida trará coisas boas se tiver paciência.",
    texto = "A maior barreira para o sucesso é o medo do fracasso.",
    texto = "O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.",
    texto = "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.",
    texto = "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.",
    texto = "Todas as coisas são difíceis antes de se tornarem fáceis.",
    texto = "Se você se sente só é porque construiu muros ao invés de pontes.",
    texto = "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..",
    texto = "Acredite em milagres, mas não dependa deles.",
    texto = "Você sempre será a sua melhor companhia!",
    texto = "Realize o óbvio, pense no improvável e conquiste o impossível.",
]

biscoito.addEventListener('click' , function(){
    body.classList.add("active");
    const numero = (Math.random() * lista.length).toFixed(0)
    console.log(numero)
    textosorte.innerHTML = lista[numero]
})
but.addEventListener('click' , function(e){
 e.preventDefault()
 body.classList.remove("active");
})