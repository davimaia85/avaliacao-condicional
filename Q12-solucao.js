let idNum = 635;
let ex1 = 7;
let ex2 = 8;
let ex3 = 6;
let mediaEx = (ex1 + ex2 + ex3)/3;
let av1 = 9;
let av2 = 9;
let av3 = 10;
let mediaAv = (av1 + av2*2 + av3*3 + mediaEx)/7;
let conceito;

document.write('Situacao do aluno: ', idNum, `<br>`);
document.write('Notas dos exercicios:', `<br>`,'nota 1: ',ex1, `<br>`, 'nota 2: ',ex2, `<br>`, 'nota 3: ',ex3, `<br>`);
document.write('Media dos exercicios: ', mediaEx.toFixed(2), `<br>`);
document.write('Notas das avaliacoes:', `<br>`,'nota 1: ',av1, `<br>`, 'nota 2: ',av2, `<br>`, 'nota 3: ',av3, `<br>`);
document.write('Media de aprovietamento: ', mediaAv.toFixed(2), `<br>`);

switch (mediaAv >= 0) {
    
    case (mediaAv >= 9.00):
        conceito = 'A';
        break;
    case (mediaAv >= 7.50 && mediaAv < 9.00):
        conceito = 'B';
        break;
    case (mediaAv >= 6.00 && mediaAv < 7.50):
        conceito = 'C';
        break;
    case (mediaAv >= 4.00 && mediaAv < 6.00):
        conceito = 'D';
        break;
   
    case (mediaAv < 4.00):
        conceito = 'E';
        break;

    default:
        break;
}

if(conceito == 'A' || conceito == 'B' || conceito == 'C' ){
    document.write('Aprovado  -  ');
    document.write(' Conceito: ', conceito);

}else{
    document.write('Reprovado  -  ');
    document.write(' Conceito: ', conceito);
}
