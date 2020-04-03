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

	// limpando o formulário
	form.reset();
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


	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}