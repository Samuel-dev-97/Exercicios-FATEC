function entrada(mat){
    //sera 3x2
    for(let i=0; i<3; i++){
        mat[i] = [];
        for(let j=0; j<2; j++){
            mat[i][j] = Number(prompt(`Informe o elemento [${i+1}] e coluna [${j+1}]`));
        }
    }
}
function calculaSomaDiagonalPrincipal(mat){
    let soma = 0;
    for(let i=0; i<3; i++){
        for(let j=0; j<2; j++){
        if(i == j){
        soma += mat[i][j];
        }
    }
    return soma;
 }
}
function exemplo(){
    let mat = [];
    entrada(mat);
    let soma = calculaSomaDiagonalPrincipal(mat);
    alert(`A soma dos elementos da diagonal principal é: ${soma}`);
}
exemplo()

