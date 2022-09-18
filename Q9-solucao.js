let altura = 1.85;
let sexo = 'M';
let peso;

if(sexo == 'm'|| sexo == 'M'){
    peso = (72.7*altura)-58;
    document.write('homem, seu peso ideal: ', peso, 'kg');
}
if(sexo == 'f'|| sexo == 'F'){
    peso = (62.1*altura)-44.7;
    document.write('mulher, seu peso ideal: ', peso, 'kg');
}
