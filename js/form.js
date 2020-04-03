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


	var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-peso");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}