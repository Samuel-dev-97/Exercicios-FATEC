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