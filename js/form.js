var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
	
	event.preventDefault();

    var form = document.querySelector('#form-adiciona');
	
	// Extraindo informações do paciente do form
	var paciente = obtemPacienteDoFormulario(form);
	console.log(paciente);

	//cria a tr e a td do paciente
	var pacienteTr = montaTr(paciente);
	
	console.log(pacienteTr);

	//adicionando o paciente na tabela.
	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);
});


// Criando objeto para representar um paciente
function obtemPacienteDoFormulario(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)

	}
	return paciente;
}

// Refatorando a criação das td's do código
function montaTr(paciente){

	var pacienteTr = document.createElement("tr");	
	// adicionando tr a classe paciente
	pacienteTr.classList.add("paciente");


	var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome"); // adicionando td (info-nome) a classe paciente
    nomeTd.textContent = paciente.nome;

    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso"); // adicionando td (info-peso) a classe paciente
    pesoTd.textContent = paciente.peso;

    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura"); // adicionando td (info-altura) a classe paciente
    alturaTd.textContent = paciente.altura;

    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura"); // adicionando td (info-gordura) a classe paciente
    gorduraTd.textContent = paciente.gordura;

    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc"); // adicionando td (info-imc) a classe paciente
    imcTd.textContent = paciente.imc;


    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}