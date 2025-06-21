 
// 1. Leitura dos dados
function lerDados(nomes, pressao) {
    for (let i = 0; i < 3; i++) {
        nomes[i] = prompt(`Informe o nome do paciente ${i + 1}:`);
        pressao[i] = [];
        for (let j = 0; j < 4; j++) {
            pressao[i][j] = parseFloat(prompt(`Informe a pressão sistólica de ${nomes[i]} no dia ${j + 1} (em mmHg):`));
        }
    }
}
 
// 2. Paciente com maior média de pressão arterial
function pacienteMaiorMedia(nomes, pressao) {
    let maiorMedia = 0;
    let nomeMaior = "";
 
    for (let i = 0; i < 3; i++) {
        let soma = 0;
        for (let j = 0; j < 4; j++) {
            soma += pressao[i][j];
        }
        let media = soma / 4;
 
        if (i === 0 || media > maiorMedia) {
            maiorMedia = media;
            nomeMaior = nomes[i];
        }
    }
 
    return nomeMaior;
}
 
// 3. Número total de medições acima de 14.0
function totalAcima140(pressao) {
    let cont = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (pressao[i][j] > 14.0) {
                cont++;
            }
        }
    }
    return cont;
}
 
// 4. Média de pressão por dia (coluna)
function mediaPorDia(pressao) {
    let medias = [];
    for (let j = 0; j < 4; j++) {
        let soma = 0;
        for (let i = 0; i < 3; i++) {
            soma += pressao[i][j];
        }
        medias[j] = (soma / 3).toFixed(2);
    }
    return medias;
}
 
// Função principal
function sistemaLaboratorio() {
    let nomes = []; // vetor com os nomes dos 3 pacientes
    let pressao = []; // matriz 3x4 para as medições
    lerDados(nomes, pressao);
 
    const nomeMaiorMedia = pacienteMaiorMedia(nomes, pressao);
    const totalAcima = totalAcima140(pressao);
    const mediasDia = mediaPorDia(pressao);
 
    let saida = `Relatório do Laboratório:\n`;
    saida += `Paciente com maior média de pressão: ${nomeMaiorMedia}\n`;
    saida += `Total de medições acima de 14.0 mmHg: ${totalAcima}\n`;
    saida += `Médias de pressão por dia:\n`;
 
    for (let dia = 0; dia < mediasDia.length; dia++) {
        saida += `- Dia ${dia + 1}: ${mediasDia[dia]} mmHg\n`;
    }
 
    alert(saida);
}