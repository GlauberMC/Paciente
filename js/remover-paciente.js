var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
	var alvoEvento = event.target;
	var paiDoEvento = alvoEvento.parentNode; // TR = paciente = remover
	paiDoEvento.remove()
	// event.target.remove();
});