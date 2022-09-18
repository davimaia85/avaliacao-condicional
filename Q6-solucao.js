let a = 1;
let b = true;
let c;

if(a == b){
    c = a && b;
    if (c == 0 || c == false){
        document.write('variável 1 e variável 2 são FALSAS');
    }
    if (c == 1 || c == true){
        document.write('variável 1 e variável 2 são VERDADEIRAS');
    }
    
}else{
    document.write('variável 1 e variável 2 são distintas');
}

