let button = document.getElementById('button') as HTMLElement;
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumeros(numero1: number, numero2: number, devePrintar: boolean, frase: string) { //no TS precisa sempre typar as variaveis
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado)
    }
    return numero1 + numero2;
}

let devePrintar = true;
let frase = 'O valor é:';

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
        }        
    })
}
