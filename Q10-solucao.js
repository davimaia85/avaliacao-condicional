let altura = 1.99;
let peso = 50.20;
let imc = (peso)/(altura*altura);

if (altura <=0 || peso > 500){
    document.write('parâmetro inválido');
} else { 
    document.write('o valor do imc é: ', imc.toFixed(2), `<br>`);
    if (imc < 18.5){
        document.write('Abaixo do Peso');
    }
    if (imc >= 18.5 && imc < 25){
        document.write('Peso Normal');
    }
    if (imc >= 25 && imc < 30){
        document.write('Acima do Peso');
    }
    if (imc > 30){
        document.write('Obeso');
    } 
} 