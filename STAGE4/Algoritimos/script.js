/*let nome = prompt("Digite seu nome")
alert(`Bem vindo ${nome}`)
let number1 = prompt("Digite o numero 1")
let number2 = prompt("Digite o numero 2")

let soma = Number(number1) + Number(number2);
let menos = Number(number1) - Number(number2);
let multi = Number(number1) * Number(number2);
let divi = Number(number1) / Number(number2);
let resto = Number(number1) % Number(number2);

alert(`A soma dos dois numero eh ${soma} \n A subtracao dos dois numeros eh ${menos} \n A mutiplicacao dos dois numeros eh ${multi} \n A divisao dos dois numeros eh ${divi} \n O resto da divisao eh ${resto}`)

let nome = prompt("Digite seu nome :")
let number1 = prompt("Digite a nota 1 :")
let number2 = prompt("Digite a nota 2 :")
let number3 = prompt("Digite a nota 3 :")

calc = ((Number(number1) + Number(number2) + Number(number3)) / 3);

if(calc >= 7){
    alert(`Ola ${nome}, parabens voce foi aprovado com media ${calc.toFixed(2)}`)
}
else{
    alert(`Ola ${nome}, Que pena voce foi reprovado com media ${calc.toFixed(2)}`)
}

let lista = []
for(let i = 0; i < 10; i++){
    lista[i] = prompt("Digite o nome do alimento " + (i + 1))  
}
alert(lista)

let tentativas = 0;
let number = Math.floor(Math.random() * 10) + 1;
alert(number)
do {
  let numero = prompt("Tente adivinhar um número de 1 a 10");
  tentativas++;
  
  if (parseInt(numero) === number) {
    alert(`Parabéns, você conseguiu em ${tentativas} tentativas!`);
    break;
  }
} while (true);


console.log("oi")

let nome = prompt("Digite seu nome :");
let lista = []
while(true){
    let opcao = prompt(`ola ${nome}, Digite o numero da opcao desejada! \n 1. Cadastrar um item na lista \n 2. Mostrar itens cadastrados \n 3. Sair do programa`)
    switch (opcao){
        case '1' : 
        let listaadicionar = prompt("Digite o prodto para ser adicionado")
        alert("Produto adicionado!")
        lista.push(listaadicionar)
        break;
    
    case '2' :
        if(lista.length == 0){
            alert("A lista esta vazia!");
            break
        }else{
            alert(lista.join("\n"))
            break
        }
    case '3':
        alert("Saindo do programa!")
        break
    default:
        alert("Opcao invalida, tente novamente")
        break   

}
if(opcao == '3'){
    break
}
}

const pacientes = [
    {
        nome: "Antonio",
        age: 17,
        peso: 80,
        altura: 1.80,
    },
    {
        nome: "Marcos",
        age: 21,
        peso: 67,
        altura: 1.80
    },
    {
        nome: "Rodrigo",
        age: 37,
        peso: 110,
        altura: 1.80,
    }
]
function imc(pacientes){
const imc = pacientes.peso/(pacientes.altura * pacientes.altura)
const pesoFormatado = imc.toFixed(2)
alert(`O paciente ${pacientes.nome} possui o imc de ${pesoFormatado}`)
}
for (const i of pacientes) {
    imc(i);
}

let number1 = prompt("Digite o numero 1")
let number2 = prompt("Digite o numero 2")

let soma = Number(number1) + Number(number2);
let menos = Number(number1) - Number(number2);
let multi = Number(number1) * Number(number2);
let divi = Number(number1) / Number(number2);
let resto = Number(number1) % Number(number2);
function parouimpar(soma){
    return soma % 2 == 0;
}
if(parouimpar(soma)){
    alert("A soma dos numeros eh par")
}else{
    alert("A soma dos numeros eh imapr")
}
if(number1 === number2){
    alert("Os numeros sao iguais")
}
else{
    alert("Os numeros sao diferentes")
}
alert(`A soma dos dois numero eh ${soma} \n A subtracao dos dois numeros eh ${menos} \n A mutiplicacao dos dois numeros eh ${multi} \n A divisao dos dois numeros eh ${divi} \n O resto da divisao eh ${resto}`)*/

let alunos = [
    {
        nome: "Antonio",
        nota1: 10,
        nota2: 7,
      },
      {
        nome: "davi",
        nota1: 0,
        nota2: 2,
      },
      {
        nome: "haiashida",
        nota1: 10,
        nota2: 6,
      },
]
function mediaFinal(alunos){
let media = (alunos.nota1 + alunos.nota2) / 2;
let mediaFixed = media.toFixed(2);
if(mediaFixed >= 6){
    return `O aluno ${alunos.nome} foi aprovado com a media ${mediaFixed}`
}else{
    return `O aluno ${alunos.nome} foi reprovado com a media ${mediaFixed}`
}
}
for(const aluno of alunos){
    const resultado = mediaFinal(aluno)
    alert(resultado)
}