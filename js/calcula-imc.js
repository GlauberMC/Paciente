
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
// console.log("tamanho do meu array " + pacientes.length);

for (var i = 0; i < pacientes.length; i++) {
	// console.log(pacientes[i]);

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var tdImc = paciente.querySelector(".info-imc");


	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;
	var imc = peso / (altura * altura);  // 100 / 2.00 * 2.00 = 100 / 4 >>>>>>>>> 25

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if(!pesoEhValido){
		console.log("Peso inválido");
		pesoEhValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido"); // adiciona uma nova classe do css
	}


	if(!alturaEhValida){
		console.log("Altura inválida");
		alturaEhValida = false;
		tdImc = "Altura inválida";
		paciente.style.backgroundColor = "orange"; // hard code 
	}


	if(alturaEhValida && pesoEhValido) {
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc; 	
	}
}

function validaPeso(peso){
	if(peso >= 0 && peso <= 1000){
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}


