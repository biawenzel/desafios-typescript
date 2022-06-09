type input = number | string;

function somarValores(input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input2 === 'string') { //se for string, vai concatenar
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2; //se for number, vai somar normalmente
    }    
}

console.log(somarValores(1, 5));
console.log(somarValores('ola', ', tudo bem?'));
console.log(somarValores('1', 5));
