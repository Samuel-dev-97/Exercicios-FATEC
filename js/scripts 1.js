function entrada(mat) {
    for (let i = 0; i < 3; i++) {
        mat[i] = [];
        for (let j = 0; j < 5; j++) {
            mat[i][j] = Math.floor(Math.random() * 10) + 15; // Números entre 15 e 24
        }
    }
}

function SomaEntre15e20(mat) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            if (mat[i][j] >= 15 && mat[i][j] <= 20) {
                soma++;
            }
        }
    }
    return soma;
}

function exibeMatriz(mat) {
    let saida = "";
    for (let i = 0; i < 3; i++) {
        saida += "\n";
        for (let j = 0; j < 5; j++) {
            saida += " " + mat[i][j];
        }
    }
    alert(saida);
}

function exe1() {
    let mat = [];
    entrada(mat);
    alert(`A quantidade de elementos entre 15 e 20 é: ${SomaEntre15e20(mat)}`);
    exibeMatriz(mat);
}

exe1()