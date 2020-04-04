var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
	
	event.preventDefault();

    var form = document.querySelector('#form-adiciona');
	
	var paciente = obtemPacienteDoFormulario(form);
	
	var pacienteTr = montaTr(paciente);

	var erros = validaPaciente(paciente);
	console.log(erros);
	if(erros.length > 0){
		exibeMensagensDeErro(erros);
		return;
	}

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	form.reset();	

	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
});

// Para cada item do array, adicionaremos a tag <li>
function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

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

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    // se o peso não for válido
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }
    // se a altura não for válida
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}