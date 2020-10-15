function sejaBemVindo(){
    console.log("Seja Bem Vindo ao Curso de Javascript");
}

console.log("chamando a função seja bem vindo sejaBemVindo():");
sejaBemVindo();

//POO
var objProfessor ={
    nome: "Prof. Peter Jordan",
    curso: "Formação JavaScript",
    mistrarAula: function(){
        console.log("Ministrando aula de JavaScript");
    }
};

console.log("objeto Professor");
console.log(objProfessor);

console.log("acessando propriedades do objeto");
console.log(objProfessor.nome);
console.log(objProfessor.curso);
objProfessor.nome;
objProfessor.curso;




console.log("chamando o método do objeto professor: objProfessor.ministrarAula()");
objProfessor.mistrarAula();
