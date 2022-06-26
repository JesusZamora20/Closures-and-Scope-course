//variables

var a; //declarando
var b = 'b';//declarando y asignando
b = 'bb';//reasignando
var a = 'aa';//redeclaranco

//Global scope
var fruit = 'Apple'; //global
function bestFruit(){
    console.log(fruit);
}

bestFruit();

//declarando una funcion global por accidente
function Countries(){
    country = 'Colombia';
    console.log(country);
}

Countries();
console.log(country);