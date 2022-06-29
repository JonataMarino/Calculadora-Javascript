/*Jonatã Serdan Marino 22/08/21
Projeto Calculadora - Programação web II*/ 
function inserir(num)
{
 let numero = document.getElementById('resultado').innerHTML;
 document.getElementById('resultado').innerHTML = numero + num;
}

function limpar()
{
    document.getElementById('resultado').innerHTML = "";
}

function apagar()
{
let resultado = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "0";
    }
}

function percent()
{
    let valor = document.getElementById('resultado').innerHTML;

    valor = valor/100;

    document.getElementById('resultado').innerHTML = valor;
}

function raiz()
{
    let valor = document.getElementById('resultado').innerHTML;
    let resultado = Math.sqrt(valor) ;
    document.getElementById('resultado').innerHTML = resultado;
}

function potenciacao()
{
    let valor = document.getElementById('resultado').innerHTML;
    let resultado = Math.pow(valor, 2);
    document.getElementById('resultado').innerHTML = resultado;
}

function resto()
{
    let valor = document.getElementById('resultado').innerHTML;

    valor = valor % 2;

    document.getElementById('resultado').innerHTML = valor;
}

/*function sobrepor()
{
    let valor = document.getElementById('resultado').innerHTML;
        if (valor == Number)
        valor = onclick()
        else
        valor = document.getElementById('resultado').innerHTML

}
*/