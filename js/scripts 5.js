// Função para cadastrar vendas de todos os meses
function cadastra(mat, vet) {
    for (let i = 0; i < 12; i++) {
        mat[i] = []; // Cria espaço na memória para cada vetor da matriz
        for (let j = 0; j < 4; j++) {
            // Solicita vendas de cada semana do mês atual
            mat[i][j] = Number(prompt(`Informe as vendas da semana ${j + 1} do mês de ${vet[i]}: `));
        }
    }
}

// Função para calcular total de vendas por mês
function calculaTotalMes(mat, vet) {
    for (let i = 0; i < mat.length; i++) {
        let soma = 0; // Acumulador para vendas do mês
        for (let j = 0; j < mat[i].length; j++) {
            soma += mat[i][j]; // Soma vendas de todas as semanas
        }
        alert(`Total vendido em ${vet[i]}: R$ ${soma}`);
    }
}

// Função para calcular total de vendas por semana (todas as semanas 1, 2, 3, 4)
function calculaTotalSemanal(mat) {
    for (let j = 0; j < 4; j++) {
        let soma = 0; // Acumulador para cada semana específica
        for (let i = 0; i < 12; i++) {
            soma += mat[i][j]; // Soma a mesma semana de todos os meses
        }
        alert(`Total vendido na semana ${j + 1}: R$ ${soma}`);
    }
}

// Função para contar vendas maiores que R$ 5.000 por mês
function calculaMaiores(mat, vet) {
    for (let i = 0; i < 12; i++) {
        let qtde = 0; // Contador de vendas maiores que 5000
        for (let j = 0; j < 4; j++) {
            if (mat[i][j] > 5000) {
                qtde++; // Incrementa contador se venda > 5000
            }
        }
        // BUG CORRIGIDO: era vet[1] (sempre fevereiro), agora é vet[i] (mês correto)
        alert(`Em ${vet[i]} teve ${qtde} vendas maiores que R$ 5.000,00`);
    }
}

// Função para contar vendas menores que R$ 1.000 por mês
function calculaMenores(mat, vet) {
    for (let i = 0; i < 12; i++) {
        let qtde = 0; // Contador de vendas menores que 1000
        for (let j = 0; j < 4; j++) {
            if (mat[i][j] < 1000) {
                qtde++; // Incrementa contador se venda < 1000
            }
        }
        // Só exibe alerta se houver vendas menores que 1000
        if (qtde > 0) {
            alert(`Em ${vet[i]} teve ${qtde} vendas menores que R$ 1.000,00`);
        }
    }
}

// Função para calcular total de vendas do ano inteiro
function calculaTotalAno(mat) {
    let soma = 0; // Acumulador geral do ano
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            soma += mat[i][j]; // Soma todas as vendas de todos os meses
        }
    }
    return soma; // Retorna total anual
}

// Função principal que executa todo o programa
function exe5() {
    let mat = []; // Matriz 12x4 (12 meses x 4 semanas)
    // Array com nomes dos meses para facilitar a leitura
    const vet = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", 
                 "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    // Executa todas as operações em sequência
    cadastra(mat, vet);              // 1. Cadastra vendas
    calculaTotalMes(mat, vet);       // 2. Mostra total por mês
    calculaMaiores(mat, vet);        // 3. Conta vendas > 5000
    calculaMenores(mat, vet);        // 4. Conta vendas < 1000
    calculaTotalSemanal(mat);        // 5. Mostra total por semana
    alert(`Total vendido no ano: R$ ${calculaTotalAno(mat)}`); // 6. Total anual
}

// Inicia o programa
exe5(); 