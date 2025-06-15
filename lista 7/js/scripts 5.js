function cadastra(mat, vet) {
    for (let i = 0; i < 12; i++) { 
        mat[i] = [];// cria espaço na memória para cada vetor da matriz
        for (let j = 0; j < 4; j++) {
            mat[i][j] = Number(prompt(`Informe as vendas da semana ${j + 1} do mês de ${vet[i]}: `));
        }
    }
}

function calculaTotalMes(mat, vet) {
    for (let i = 0; i < mat.length; i++) {
        let soma = 0;
        for (let j = 0; j < mat[i].length; j++) {
            soma += mat[i][j];
        }
        alert(`Total vendido em ${vet[i]}: R$ ${soma}`);
    }
}

function calculaTotalSemanal(mat) {
    for (let j = 0; j < 4; j++) {
        let soma = 0;
        for (let i = 0; i < 12; i++) {
            soma += mat[i][j];
        }
        alert(`Total vendido na semana ${j + 1}: R$ ${soma}`);
    }
}
function calculaMaiores(mat, vet) {
    for (let i = 0; i < 12; i++) {
        let soma = 0;

        for (let j = 0; j < 4; j++) {
            soma += mat[i][j]; 
        }
        
        if (soma > 5000) { 
            alert(`O total vendido em ${vet[i]} foi maior que 5000: R$ ${soma}`);
        }
    }
}
function calculaMenores(mat, vet) {
    for (let i = 0; i < 12; i++) {
        let soma = 0;

        for (let j = 0; j < 4; j++) {
            soma += mat[i][j]; 
        }
        
        if (soma < 1000) { 
            alert(`O total vendido em ${vet[i]} foi menor que 1000: R$ ${soma}`);
        }
    }
}
function calculaTotalAno(mat) {
    let soma = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            soma += mat[i][j];
        }
    }
    return soma;
}

function exe5() {
    let mat = [];
    const vet = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    
    cadastra(mat, vet);
    calculaTotalMes(mat, vet);
    calculaMaiores(mat, vet);
    calculaMenores(mat, vet);
    calculaTotalSemanal(mat);
    alert(`Total vendido no ano: R$ ${calculaTotalAno(mat)}`);
}

exe5();


