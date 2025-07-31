function juros(){
let primeiroN = parseInt (document.getElementById('primeiro').value);
let segundoN = parseInt(document.getElementById('segundo').value);
let terceiroN = parseInt (document.getElementById('terceiro').value);

let pj = segundoN / 100;

let jurossimples = primeiroN * pj * terceiroN;

 document.getElementById('resultadoJ').textContent = 'resultado:' + jurossimples;

}

function montante(){
let primeiroN = parseInt (document.getElementById('primeiro').value);
let segundoN = parseInt(document.getElementById('segundo').value);
let terceiroN = parseInt (document.getElementById('terceiro').value);

let pj = segundoN / 100;

let jurossimples = primeiroN * pj * terceiroN;

let m = primeiroN + jurossimples;

 document.getElementById('resultadoM').textContent = 'resultado:' + m;
}
