function entrada(vet){
    for(let i = 0; i < 5; i++){
        let objeto = {
            nome : prompt(`Informe o nome do ${i+1} paciente: `),
            idade: Number(prompt(`Informe a idade do ${i+1}° paciente`)),
            especialidade : prompt(`Informe a especialidade do ${i+1}° paciente: 'cardiologia', 'pediatria', 'clínico-geral'`),
            pressao : Number(prompt(`Informe a pressão do ${i+1}° paciente: `))
        }
        vet.push(objeto)
    }
}
function maiorPressao(vet){
    let maior = 0 
    for(let i = 0; i < vet.length; i++){
        if(vet[i].pressao  > vet[maior].pressao){
            
        maior = i;
        }
 }
    alert(`O paciente: "${vet[maior].nome}"  teve a maior pressão: ${vet[maior].pressao}.`)
}
function idadePress(vet){
    let cont = 0;
    for(let i = 0; i < vet.length;i++){
        if(vet[i].idade > 60 && vet[i].pressao > 14.0){
            cont++
        }
    }
    alert(`A quantidade de pacientes com idade superior a 60 e pressão mais que 14: ${cont}. `)
}
function mediaIdadeCardio(vet){
    let cont = 0
    let somaIdades = 0
    for(let i = 0; i < vet.length; i++){
        if(vet[i].especialidade === 'cardiologia'){
            somaIdades += vet[i].idade;
            cont++
        }
      
    }
    if (cont > 0){
        let media = somaIdades / cont;
        alert(`A média de idade dos pacientes de cardiologia é: ${media.toFixed(2)} anos.`);
    }else{
        alert(`Nenhum paciente resgistrado na categoria 'cardiologia'.`)
    }
}
function quest1(){
    let vetor = []
    entrada(vetor);
    maiorPressao(vetor);
    idadePress(vetor);
    mediaIdadeCardio(vetor)
}
quest1()

//resolução do professor da mesma questão//
//***************************//
//***************************//
//***************************//
function lerPacientes(pacientes) {
    for (let i = 0; i < 5; i++) {
        let objeto = {
            nome: prompt(`Informe o nome do ${i + 1}º paciente:`),
            idade: Number(prompt(`Informe a idade do ${i + 1}º paciente:`)),
            especialidade: prompt(`Informe a especialidade do ${i + 1}º paciente ('cardiologia', 'pediatria' ou 'clínico-geral'):`).toLowerCase(),
            pressao: parseFloat(prompt(`Informe a pressão do ${i + 1}º paciente (em mmHg):`))
        };
        pacientes.push(objeto);
    }
}

function pacienteComMaiorPressao(pacientes) {
    let maior = pacientes[0];
    for (let i = 1; i < pacientes.length; i++) {
        if (pacientes[i].pressao > maior.pressao) {
            maior = pacientes[i];
        }
    }
    return maior.nome;
}

function idososComPressaoAlta(pacientes) {
    let contador = 0;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].idade > 60 && pacientes[i].pressao > 14.0) {
            contador++;
        }
    }
    return contador;
}

function mediaIdadeCardiologia(pacientes) {
    let soma = 0;
    let cont = 0;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidade === "cardiologia") {
            soma += pacientes[i].idade;
            cont++;
        }
    }

    if (cont === 0) {
        return "Nenhum paciente de cardiologia.";
    } else {
        return (soma / cont).toFixed(2);
    }
}

function sistemaClinica() {
    let pacientes = [];
    lerPacientes(pacientes);

    const nomeMaiorPressao = pacienteComMaiorPressao(pacientes);
    const qtdeIdososPressaoAlta = idososComPressaoAlta(pacientes);
    const mediaIdadeCardio = mediaIdadeCardiologia(pacientes);

    const resultado = `
        Paciente com maior pressão arterial: ${nomeMaiorPressao}
        \nQuantidade de pacientes com mais de 60 anos e pressão > 14.0: ${qtdeIdososPressaoAlta}
        \nMédia de idade dos pacientes de cardiologia: ${mediaIdadeCardio}
    `;

    alert(resultado);
}

// Chame a função principal para executar o sistema
sistemaClinica();