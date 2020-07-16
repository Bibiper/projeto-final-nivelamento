//8.1
var cincoNumeros = []
for (i = 0; i < 5; i++){
    var cinco = parseInt(prompt("Digite um número"));
    cincoNumeros.push(cinco)
}

console.log(cincoNumeros);

//8.2
console.log(`O maior número é ${Math.max(cincoNumeros)} e o menor numero é ${Math.min(cincoNumeros)}`); 

//8.3

function parOuImpar() {
    for (var valor of cincoNumeros){
        if (valor % 2 == 0){
            console.log(`O numero ${valor} é par.`);
        }else{
            console.log(`O numero ${valor} é ímpar.`);
        }    
    }
}    


parOuImpar(cincoNumeros);

//Numero repetido eu não consegui fazer e não quis colar a resposta do coleguinha.