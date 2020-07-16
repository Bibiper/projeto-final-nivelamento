//1. Variáveis e constantes
    //Uma variável é um espaço reservado na memória para receber um valor, que pode ser do tipo numérico (inteiro ou decimal), booleano (true ou false), string (sempre entre aspas simples ou duplas, com valor de texto), array (lista organizada por indice), objetos (array organizado por nomes ou valores) e funcões (void ou que retornam algum valor).
    //Dentre as variáveis, temos as que podem ter o seu valor alterado, chamadas variáveis, e, as que mantém o seu valor inalterado, independente do comando que se dê a elas, que são as constantes.
    //Exemplos de variáveis:
    var a = 8;
    var b = 5;
    var c = a + b;
    console.log(c); // resultado da soma entre 8 e 5 = 13
    a = 4; // foi alterada de 8 para 4
    c = a + b;
    console.log(c); // resultado da soma entre 4 e 5 = 9

    //Exemplos de constantes:
    const d = 3;
    const e = 1;
    const f = d - e;
    console.log(f); // resultado da subtração de 3 - 1 = 2
    /*d = 5; //Dá erro porque a variavel d já foi declarada como constante e não pode ser alterada.
    f = d - e; //Não processa porque parou na linha acima. 
    console.log(f);*/

//2. Comandos de decisão
    //Os comandos de decisão são estruturas condicionais como o if (se), else if (se - usado quando houver mais de um if) e else (se não). Através desses comandos, podemos criar regras para o recebimento e retorno de dados, bem como para o direcionamento dos resultados. As estruturas condicionais criam uma lógica de tratamento das informações coletadas.
    //Exemplo de uso do if, else if e else:
    idade = 15;
    if (idade < 18){
        console.log('Voce é menor de idade');
    }else if (idade == 18){ 
        console.log('Bem vindo à maioridade');
    }else{
        console.log('Já responde por si');
    }    

//3. Loops    
    //Loops são estruturas onde enquanto uma condição estiver sendo respeitada, tudo que está escrito dentro do loop será executado. 
    //Dentre os loops, temos o while e o for. O while permite que enquanto uma condição for verdadeira, os comandos serão executados, quando deixar de ser verdadeira, o loop encerra.
    //O for é usado para acessar indices ou valores de um array ou um objeto. A partir dos dados que temos, podemos criar um for para acessá-los e tratá-los.
    //Exemplo de while:
    var numero = 0;
    while (numero <= 5){
        numero ++
        console.log(`Voce digitou o numero ${numero}`);
    }

    //Exemplo de for:
    var alunos = ["Bianca", "Guilherme", "Victor"];
    for (i = 0; i < alunos.length; i++){
        p = 0
        p++
        console.log(`O aluno na posição ${i} é ${alunos[i]}`);
    }

    //Exemplo de for of:
    var preferencias = ["Rock", "Clássica", "New Age"];
    for (var gostos of preferencias){
        console.log(`Minhas preferencias são: ${gostos}`);
    }

//4. Funções
    //Funções são usadas para permitir o tratamento de dados a partir de sua declaração. Podemos criar funções para tratar dados coletados do usuário, do próprio código, de uma biblioteca externa, etc. Elas podem retornar valores ou não, e podem receber parâmetros ou não.
    //Também podem estar no próprio codigo ou em módulos separados, para serem acessados quando a função for "chamada".
    //Exemplos de funções:
    function parOuImpar(numero) {
        if (numero % 2 == 0){
            console.log('O numero é par.');
        }else{
            console.log('O numero é ímpar.');
        }    
    }    


    var n = 7;
    parOuImpar(n);

//5. Escopos    
    //Escopos dizem respeito à área de abrangência de uma variável ou função. Se essa está na linha de código principal, possui escopo global. Se foi criada apenas dentro de uma função, por exemplo, possui escopo local.
    //As variáveis de escopo global, quando alteradas, afetam todo o código, diferentemente das de escopo local, que so alteram os dados da estrutura onde estão.
    //Exemplos de escopos:
    //Global: cada vez que eu alterar o valor da var n, poderei ter um resultado (par ou impar) diferente.
    function parOuImpar(numero) {
        if (numero % 2 == 0){
            console.log('O numero é par.');
        }else{
            console.log('O numero é ímpar.');
        }    
    }    


    var n = 8;
    parOuImpar(n);


    //Local:


    function num() {
        if (true) {
            var j = 7;
            console.log(j); 
        }
    }    


    var j = 10;
    num(j);


//6. Inputs e Outputs
    //Inputs são comandos que permitem a inserção e coleta de dados via javascript ou html e outputs são as formas de devolvermos uma resposta ou resultado.
    //Existem comandos que são mostrados na tela do html, como o alert e o document.write e comandos que aparecem no console do html, como o console.log
    //Exemplos de Output:
    var numero = 0;
    while (numero <= 5){
        numero ++
        console.log(`Voce digitou o numero ${numero}`);
    }

    var preferencias = ["Rock", "Clássica", "New Age"];
    for (var gostos of preferencias){
        document.write(`Minhas preferencias são: ${gostos}`);
    }

    //Exemplos de input:
    numb = parseInt(prompt('Digite um numero:'));

//7. Array são listas que retornam os indices dos valores.
 //Exemplo: 
 var comidas = ["massa", "carne", "japoneza"]    

 //8. Objetos são arrays que retornam nomes dos valores
 //Ex: 
 var aluno = {nome: "Bianca", idade: 38, sexo: "feminino"};

 //11. operadores && significa e - todas as condições tem que ser atendidas
 //                || ou - uma das condições tem que ser atendida
 //                 == igual - algo deve ser igual a outro valor
 //                 != diferente = um valor deve ser diferente de outro


 //12
// Eper (entender, planejar, executar e revisar) estratégia de otimização de qq projeto. Facilita a execução e garante o sucesso do resultado.


 //13 
 //Pilha primeiro que entra, ultimo que sai
 //Fila, primeito que entra primeiro que sai
 
 //14 Javascript onde colocamos o funcionamento do html, as interações, funcionalidades
 // CSS onde fazemos a aparencia, decoração da página html
 //HTML pagina estática que está alocada no servidor e interface de interação com o usuario







  
 