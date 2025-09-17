function saudacao() {
    console.log("Olá, bem-vindo ao mundo do JavaScript!")
    alert("Olá, seja bem-vindo ao mundo do JavaScript!");
    document.writeln("Olá, seja bem-vindo ao mundo do JavaScript!")
    document.getElementById("mensagem").innerHTML = "Olá, seja bem-vindo ao mundo do JavaScript site 2!";
}

saudacao();



function mudarMensagem() { 
    return document.getElementById("mensagem").innerHTML = "Você clicou no botão";
}


function soma(a,b){
    return a+b;
}

console.log(soma(5,3));


const somar = (a,b) => a +b; //versão simplificada
let resultadoSomar = somar(4,5)
document.getElementById("somar").innerHTML = somar(2,2)

console.log(resultadoSomar);


let a = 0;

function contarCliques(contador){
    return contador + 1;
}

function cliqueAqui(){
a = contarCliques(a);
return document.getElementById("contador").innerHTML = a;

}

