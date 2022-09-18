let a = 15;
let b = 25;
let c = 10;

if(a > b && b > c){
    document.write('ordem decrescente: ',a,' - ', b,' - ',c);
    }
if(c > b && b > a){
    document.write('ordem decrescente: ',c,' - ', b, ' - ',a);
    }
if(a > c && c > b){
    document.write('ordem decrescente: ',a, ' - ',c,' - ', b);
    }
if(b > c && c > a){
    document.write('ordem decrescente: ',b,' - ', c, ' - ',a);
    }
if(b > a && a > c){
    document.write('ordem decrescente: ',b,' - ', a,' - ', c);
    }
if(c > a && a > b){
    document.write('ordem decrescente: ',c,' - ', a,' - ', b);
    }

    