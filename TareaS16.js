//Codigo para el Ejercicio 1
let multipli= function(x,y){
    return x*y;
}

let expon= function(x,y){
    return Math.pow(x,y);
}

let suma = (x,y) => {return x+y}

let resta= function(x,y){
    return x-y;
}

function multi(){
    var resultado;
    resultado=multipli(document.getElementById("num1").value,document.getElementById("num2").value);
    document.getElementById('result1').innerHTML = resultado;
}
function expo(){
    resultado=expon(document.getElementById("num1").value,document.getElementById("num2").value);
    document.getElementById('result1').innerHTML = resultado;
}
function sum(){
    resultado=suma(parseFloat(document.getElementById("num1").value),parseFloat(document.getElementById("num2").value));
    document.getElementById('result1').innerHTML = resultado;
}
function rest(){
    resultado=resta(document.getElementById("num1").value,document.getElementById("num2").value);
    document.getElementById('result1').innerHTML = resultado;
}
//Codigo para el Ejercicio 2
let pasaraFarenheit =(grado) => {return  Fahrenheit =(grado-32)*(5/9);};

function aC(){
    resultado= pasaraFarenheit(document.getElementById("Grad2").value);
    document.getElementById('result2').innerHTML = resultado.toFixed(4); 
}
//Codigo para el Ejercicio 3
function sum2(){
    resultado=suma(parseFloat(document.getElementById("num3").value),parseFloat(document.getElementById("num4").value));
    document.getElementById('result3').innerHTML = resultado;
}