var peca1=0
var peca2=0
var opcao
var readlineSync = require('readline-sync')
var opcaopeca

do{
    opcao = parseInt(readlineSync.question("escola uma opcao \n\n"+
                                            "0 - encerrar o programa\n" +
                                            "1 - acresentar uma peca\n" + 
                                            "2 - listar total de pecas\n\n"))
    switch(opcao){
        case 0:
            console.log("voce escolheu encerrar o programa... \n\n")
             break;
        case 1:
            opcaopeca = parseInt(readlineSync.question("qual peca deseja acressentar? 1 ou 2"))
            if(opcaopeca ==1){
               peca1++
               break;
            }else if(opcaopeca ==2){
              peca2++
              break;  
            }else{
              console.log("opcao invalida\n")
               break;
           }
        case 2:
            console.log("total de pecas do tipo 1:"+ peca1 + '\n')
            console.log("total de pecas do tipo 2:"+ peca2 + '\n') 
            break;
        default:
            console.log("opcao invalida. escolha entre 1 ou 2.\n")
    
    }                                  

    


}while(opcao!=0)
