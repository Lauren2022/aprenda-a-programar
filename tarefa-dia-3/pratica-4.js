/*Um cliente que vende produtos internacionais e nacionais conseguiu extrair alguns dados de seu programa financeiro.
O problema é que esse programa retorna os dados na forma de mapas e traz apenas o valor do produto e se ele é 
internacional ou nacional, mas não calcula os impostos.
Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, verifica se ele 
é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro. Uma vez 
aplicado o imposto, o programa imprime na tela o valor total do produto.*/

//Base de dados do cliente

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

//Criando as condições para os valores de cada variável

if (produtoA.internacional == true) {console.log("O produto", produtoA.nome, "é internacional. \nCom imposto de 20%, totaliza o valor de", produtoA.valor * 1.2, ".")}
else {console.log("O produto,", produtoA.nome, "é nacional. Com imposto de 12%, totaliza o valor de", produtoA.valor * 1.12, ".")}

if (produtoB.internacional == true) {console.log("O produto", produtoB.nome, "é internacional. \nCom imposto de 20%, totaliza o valor de", produtoB.valor * 1.2, ".")}
else {console.log("O produto,", produtoB.nome, "é nacional. Com imposto de 12%, totaliza o valor de", produtoB.valor * 1.12, ".")}

if (produtoC.internacional == true) {console.log("O produto", produtoC.nome, "é internacional. \nCom imposto de 20%, totaliza o valor de", produtoC.valor * 1.2, ".")}
else {console.log("O produto", produtoA.nome, "é nacional. Com imposto de 12%, totaliza o valor de", produtoC.valor * 1.12, ".")}
