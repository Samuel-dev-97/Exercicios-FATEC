function entrada(mat) {
    for (let i = 0; i < 6; i++) {
        mat[i] = [];
        for (let j = 0; j < 3; j++) {
            mat[i][j] = Math.floor(Math.random() * 31);
        }
    }
}
function calculaMaiorMenor(mat) {
    let maior = mat[0][0], menor = mat[0][0];
    let Imaior = 0, Jmaior = 0, Imenor = 0, Jmenor = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (mat[i][j] > maior) {
                maior = mat[i][j];
                Imaior = i;
                Jmaior = j;
            }
            if (mat[i][j] < menor) {
                menor = mat[i][j];
                Imenor = i;
                Jmenor = j;
            }
        }
    }
alert(mat)
alert(`${maior} está na posição [${Imaior}][${Jmaior}] e o menor é ${menor} na posição [${Imenor}][${Jmenor}]`);
}
function exibeMatriz(mat) {
    let saida = "Matriz:";
    for (let i = 0; i < 6; i++) {
        saida += "\n";
        for (let j = 0; j < 3; j++) {
            saida += " " + mat[i][j];
        }
    }
    alert(saida);
}
function exe3() {
    let mat = [];
    entrada(mat);
    exibeMatriz(mat);
    calculaMaiorMenor(mat);
}
exe3();