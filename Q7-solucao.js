let n = 19;
document.write('Valor inicial: ', n, `<br>`);
if(n % 2 == 0){
    n += 5;
    document.write('Valor inicial + 5: ', n);
}else{
    n += 8;
    document.write('Valor inicial + 8: ', n);
}