
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

	var pesoEhValido = true;
	alturaEhValida = true;

	if(peso <= 0 || peso >= 1000){
		console.log("Peso inválido");
		pesoEhValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido"); // adiciona uma nova classe do css
	}


	if(altura <= 0 || altura >= 2.60){
		console.log("Altura inválida");
		alturaEhValida = false;
		tdImc = "Altura inválida";
		paciente.style.backgroundColor = "orange"; // hard code 
	}


	if(alturaEhValida && pesoEhValido) {
		tdImc.textContent = imc.toFixed(2); 	
	}
}


var botaoAdicionar = document.querySelector("#adicionar-paciente");

// adicionando evento de escutar no botão e criando uma função anonima
// o parametro event é responsável por chamar a event.preventDefault
botaoAdicionar.addEventListener("click",function(event){
	
	// alterando o comportamento padrão do botão do form de recarregar a página
	event.preventDefault();

	var form = document.querySelector('#form-adiciona');
	
	// a variável form dá acesso ao imput de altura e do input de peso neste caso
	// a propriedade valeu permite capturar o valor do campo
	// console.log(form.altura.value);

	// a variável form dá acesso input de peso 
	// a propriedade valeu permite capturar o valor do campo
	// console.log(form.peso.value);

	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	// console.log(nome);
	// console.log(peso);
	// console.log(altura);
	// console.log(gordura);


	// criando uma tr com o elemento createElement 
	var pacienteTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);


	console.log(pacienteTr);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);
});