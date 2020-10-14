//declaração de váriaveis

var nome = "Prof. Piter";
var sobreNome= "Jordan";


console.log("Instrução solta em um arquivo JS");

//declaração de função
function exibirNomeConsole(){
    console.log("exibir nome" + nome);
}

function exibirNomeCompleto(){
    console.log("Professor, nome completo" + nome + "" + sobreNome);
}

function eventoClick(){
    alert("Você clicou em um botão")
}
//chamadas de função
exibirNomeConsole();