var jogador1 = 1;
var jogador2 = 0;
var placar;
/*if(jogador1 != -1){
    if (jogador1 > 0){
        console.log('Jogador 1 marcou ponto!');
    }else if(jogador2 > 0){
        console.log('Jogador 2 marcou ponto!');
    }else{
        console.log('niguem marcou ponto');
    }    
}*/

//if ternario

/*jogador1 != -1 && jogador2 != -1? console.log('Os jogadores são validos') : console.log('Os jogadores são invalidos');
    if (jogador1 > 0 && jogador2 ==0){
        console.log('Jogador 1 marcou ponto!');
        placar = jogador1 > jogador2;
    }else if(jogador2 > 0 && jogador1 == 0){
        console.log('Jogador 2 marcou ponto!');
        placar = jogador2 > jogador1;
    }else{
        console.log('niguem marcou ponto');
    }

    switch(placar){
        case placar = jogador1 > jogador2:
            console.log('jogardor 1 ganhou');
            break;
            case placar = jogador2 > jogador1 :
            console.log('jogardor 2 ganhou');
            break;   
            default:
                console.log('Ninguem ganhou');
            
    }*/
    let array = ['valor1', 'valor2','valor3','valor4','valor5'];
    let object = {propridade1: 'valor1',propridade2: 'valor2',propridade3: 'valor3'}
    // for execulta uma instrução ate que ela seja falsa
   /*  for(let indice = 0; indice < array.length; indice++ ){
        console.log(indice);
    }

    //for/in execulta a repetição a partir de uma propriedade
    for(let i in array){
        console.log(i)

    }
    //com object

    for (i in object){
        console.log(i);
    } */


   /*  //for-off execulta a repetição a partir de um valor
    // com array
    for(i of array){
        console.log(i);
    } */
    
    /* //com object tem que passar a propriedade dentro da condição

    for(i of object.propridade1){
        console.log(i);

    } */


    /* // while execulta um instrução emquanto determinada condição for verdadeira
    var a = 0;
    while(a <10){
        a++;
        console.log(a);
    } */

    // do while execulta um instrução ate que determinada condição seja falsa a
    // vereficação é feita depois da execução

    var a = 0;
    do {
        a++;
        console.log(a);
    }while(a < 10);


    
    