function att1() {
    let nome = prompt("Qual é o seu nome?");
    let idade = prompt("Quantos anos você tem?");
    console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos."); 
    }
    
    function att2() {
    let anoAtual = new Date().getFullYear();
    let anoNascimento = prompt("Em que ano você nasceu?");
    let idadePessoa = anoAtual - anoNascimento;
    console.log(`Você tem ${idadePessoa} anos.`);
    }
    
    function att3() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let num3 = parseFloat(prompt("Digite o terceiro número:"));
    let mediaSimples = (num1 + num2 + num3) / 3;
    console.log(`A média simples é: ${mediaSimples}`);
    }
    
    function att4() {
    let peso1 = 2, peso2 = 3, peso3 = 5;
    let mediaPonderada = (num1 * peso1 + num2 * peso2 + num3 * peso3) / (peso1 + peso2 + peso3);
    console.log(`A média ponderada é: ${mediaPonderada}`);
    }
    
    function att5() {
    let area = parseFloat(prompt("Qual é o tamanho da área a ser pintada em metros quadrados?"));
    let litrosNecessarios = area / 3;
    let latas = Math.ceil(litrosNecessarios / 18);
    let precoTotal = latas * 80;
    console.log(`Você precisará de ${latas} latas de tinta, totalizando R$ ${precoTotal}`);
    }
    
    function att6() {
    let turno = prompt("Em que turno você estuda? Digite M-matutino, V-vespertino ou N-noturno:");
    if (turno === 'M') {
      console.log("Bom Dia!");
    } else if (turno === 'V') {
      console.log("Boa Tarde!");
    } else if (turno === 'N') {
      console.log("Boa Noite!");
    } else {
      console.log("Valor Inválido!");
    }
    }
    
    function att7() {
    let idadeUsuario = parseInt(prompt("Qual é a sua idade?"));
    if (idadeUsuario >= 18) {
      console.log("Você é maior de idade.");
    } else {
      console.log("Você é menor de idade.");
    }
    }
    
    function att8() {
    let ano = parseInt(prompt("Digite o ano:"));
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
      console.log(`${ano} é um ano bissexto.`);
    } else {
      console.log(`${ano} não é um ano bissexto.`);
    }
    }
    
    function att9() {
    for (let i = 1; i <= 100; i++) {
      console.log(i);
    }
    }
    
    function att10() {
    let soma = 0;
    for (let i = 0; i <= 100; i++) {
      soma += i;
    }
    console.log(`A soma de 0 a 100 é: ${soma}`);
    }
    
    function att11() {
    let fatorial = 1;
    for (let i = 1; i <= 100; i++) {
      fatorial *= i;
    }
    console.log(`O fatorial de 100 é: ${fatorial}`);
    }
    
    function att12() {
    let nomeUsuario = prompt("Digite seu nome de usuário:");
    let senha = prompt("Digite sua senha:");
    while (nomeUsuario === senha) {
      console.log("Erro: a senha não pode ser igual ao nome de usuário. Tente novamente.");
      nomeUsuario = prompt("Digite seu nome de usuário:");
      senha = prompt("Digite sua senha:");
    }
    console.log("Usuário e senha aceitos.");
    }
    
    function att13() {
    for (let i = 1; i <= 50; i++) {
      if (i % 2 !== 0) {
        console.log(i);
          }
        }
      }
    
    