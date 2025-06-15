
// Função para entrada de dados
function entrada(mat, vet) {
    for (let i = 0; i < 4; i++) {
        vet.push(prompt(`informe o ${i + 1}º nome: `));
        mat[i] = [];
        for (let j = 0; j < 5; j++) {
            mat[i][j] = Number(prompt(`Informe a nota ${j + 1} do aluno  ${vet[i]}: `));
             }
        }
    }
// Função para calcular e exibir médias individuais
function calculaMedias(mat, vet) {
    for (let i = 0; i < 4; i++) {
        let soma = 0;
        for (let j = 0; j < 5; j++) {
            soma += mat[i][j];
        }
        let media = soma / 5;
        let situacao
        if (media < 3){
            situacao = 'Reprovado';
        }
        else if (media >= 3 && media < 6){
            situacao = 'Exame';
        }
        else {
            situacao = 'Aprovado';
        }
    alert(`${vet[i]} teve média ${media.toFixed(2)} e está ${situacao}`);
    }
}
// Função para calcular a média da turma
function calculaMediaClasse(mat) {
    let soma = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            soma += mat[i][j];
        }
    }
    return (soma / 20)
}
function exe4() {
    let mat = [];
    let vet = [];
    entrada(mat, vet); 
    calculaMedias(mat, vet);
    alert(`A média da turma é ${calculaMediaClasse(mat).toFixed(2)}`);
}
exe4();