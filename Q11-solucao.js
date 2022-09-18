let preco = 180.25;
let valor;
let pgto = 'vista';
let cond = 'cartao de credito';

switch (pgto == 'vista' || pgto == 'prazo') {
    case (pgto == 'vista' && (cond == 'dinheiro' || cond == 'cheque')):
            valor =  preco - (preco*0.1);
            document.write('Valor do pagamento a vista em dinheiro ou cheque: R$ ', valor.toFixed(2));
    break;
    case (pgto == 'vista' && cond == 'cartao de credito'):
        
            valor =  preco - (preco*0.15);
            document.write('Valor do pagamento a vista no cartao de credito: R$ ', valor.toFixed(2));
    break;   
           
    case (pgto == 'prazo' && (cond == 'dinheiro' || cond == 'cheque')):
        
                valor =  preco;
                document.write('Valor do pagamento a prazo em dinheiro/cheque em duas vezes: R$ ', valor.toFixed(2));
    break;
    case (pgto == 'prazo' && cond == 'cartao de credito'):
            
                valor =  preco + (preco*0.1);
                document.write('Valor do pagamento a prazo no cartao de credito em duas vezes: R$ ', valor.toFixed(2));
    break;
    
    default:
            document.write('invalido');
        break;
}    

/*switch (pgto == 'a prazo') {
    case ((cond == 'dinheiro' || cond == 'cheque') && cond2 == 'duas vezes'):
        
            valor =  preco;
            document.write('Valor do pagamento a prazo em duas vezes: ', valor.toFixed(2));
        break;
        case (cond == 'cartao de credito' && cond2 == 'duas vezes'):
        
            valor =  preco + (preco*0.1);
            document.write('Valor do pagamento a prazo em duas vezes: ', valor.toFixed(2));
        break;
        default:
        break;
   

    
}*/
    
