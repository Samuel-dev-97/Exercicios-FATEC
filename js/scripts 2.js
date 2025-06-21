function entrada(mat) {
    // Preenche a matriz 2 x 4 com números entre 12 e 21
    for (let i = 0; i < 2; i++) {
        mat[i] = [];
        for (let j = 0; j < 4; j++) {
            mat[i][j] = Math.floor(Math.random() * 10) + 12;
        }
    }
}
function contaEntre12e20(mat) {
    let resultado = [];
    for (let i = 0; i < 2; i++) {
        let cont = 0;
        for (let j = 0; j < 4; j++) {
            if (mat[i][j] >= 12 && mat[i][j] <= 20) {
                cont++;
            }
        }
        resultado.push(cont);
    }
    return resultado;
}
function mediaElementosPares(mat) {
    let soma = 0;
    let cont = 0;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 4; j++) {
            if (mat[i][j] % 2 === 0) {
                soma += mat[i][j];
                cont++;
            }
        }
    }
    return cont > 0 ? (soma / cont).toFixed(2) : 0;
}
function exibeMatriz(mat) {
    let saida = "Matriz:";
    for (let i = 0; i < 2; i++) {
        saida += "\n";
        for (let j = 0; j < 4; j++) {
            saida += " " + mat[i][j];
        }
    }
    alert(saida);
}

function exe2() {
    let mat = [];
    entrada(mat);
    let contagens = contaEntre12e20(mat);
    alert(`Quantidade de elementos entre 12 e 20 por linha:\nLinha 1: ${contagens[0]}\nLinha 2: ${contagens[1]}`);
    alert(`Média dos elementos pares: ${mediaElementosPares(mat)}`);
    exibeMatriz(mat);
}

exe2();

















function entrada(mat){
    // será 2 x 4
    for(let i=0;i<2;i++){
        mat[i] = []
        for(let j=0;j<4;j++){
            mat[i][j] = Math.floor(Math.random() * 21)
        }
    }
}
function ContaElementosEntre12e20(mat){
    let conta 
    for(let i=0;i<2;i++){
        conta = 0
         for(let j=0;j<4;j++){
            if (mat[i][j] >= 12 && mat[i][j] <= 20){
                conta++
            }
         }
         alert(`A qtde de elementos entre 12 e 20 na linha ${i} é ${conta}`)
    }
}
function exibeMatriz(mat){
    let saida = ''
    for(let i=0;i<mat.length;i++){
        saida = saida + '\n'
        for(let j=0;j<mat[i].length;j++){
            saida = saida + " " + mat[i][j]
        }
    }
    alert(saida)
}
function mediaElementosPares(mat){
    let soma = 0
    let qtde = 0
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if (mat[i][j] % 2 == 0){
                soma = soma + mat[i][j]
                qtde ++
            }
        }
    }
    return soma / qtde
}
function exe2(){
    let mat = [] 
    entrada(mat)
    ContaElementosEntre12e20(mat)
    mediaElementosPares(mat)
    exibeMatriz(mat)
    alert(`A média dos elementos pares é ${mediaElementosPares(mat)}`)
}

exe2()