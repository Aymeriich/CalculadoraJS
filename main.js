console.log('test')

let entradaCalculadora = document.getElementById('input');
let temporal = 0;
let operacionCompleta = '';
let numGuardado = ''

function mr(){
    entradaCalculadora.value = numGuardado;
    
}
function mc(){
    numGuardado = '';
}
function mMas(){
    numGuardado = entradaCalculadora.value;
}
function mMenos(){
    operacionCompleta = operacionCompleta + entradaCalculadora.value;
    aux = eval(operacionCompleta);
    entradaCalculadora.value = aux - numGuardado;
    operacionCompleta = '';
}

function add(num){
    let valor = entradaCalculadora.value;
     if(num == 0){
         if(valor[valor.length - 1] != "0" || valor.length > 1){
             entradaCalculadora.value += num;
         }
     }else if(num == '.' && valor.indexOf('.') === -1){
         if(valor === ''){
             entradaCalculadora.value += '0' + num;
         }else if(valor[valor.length - 1] != '.' && valor != ''){
             entradaCalculadora.value += num;
         }
     }else if(num != '.'){
         entradaCalculadora.value += num;
     }
 }

function cleanInput() {
    entradaCalculadora.value = '';
    operacionCompleta = '';
}

function operacionFunction(operador) {
    temporal = entradaCalculadora.value;
    entradaCalculadora.value = '';
    operacionCompleta += temporal + operador;
    console.log(operacionCompleta)
}

function cuadrado(){
    aux = operacionCompleta + entradaCalculadora.value
    entradaCalculadora.value = eval(aux * aux)
    operacionCompleta = '';
}

function cubo(){
    aux = operacionCompleta + entradaCalculadora.value
    entradaCalculadora.value = eval(aux * aux * aux)
    operacionCompleta = '';
}

function porciento(){
    operacionCompleta = operacionCompleta + entradaCalculadora.value + '/100';
    entradaCalculadora.value = eval(operacionCompleta);
    operacionCompleta = '';
}

function pi(){
    entradaCalculadora.value = 3.14159;
}

function raiz() {
    operacionCompleta = operacionCompleta + entradaCalculadora.value;
    aux = eval(operacionCompleta);
    entradaCalculadora.value = Math.sqrt(aux);
    operacionCompleta = '';
}

function inverso() { 
   operacionCompleta = operacionCompleta + entradaCalculadora.value;
   aux = eval(operacionCompleta);
   entradaCalculadora.value = -parseFloat(aux);
   operacionCompleta = '';
}

function igual(){
    entradaCalculadora.value = eval(operacionCompleta + entradaCalculadora.value)
    operacionCompleta = '';
}

