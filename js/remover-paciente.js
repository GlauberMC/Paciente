var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
	// event.target -> será quem sofreu propriamente o evento
	// parentNode -> seleciona o pai de um elemento
	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function(){
		event.target.parentNode.remove();
	},500);
	
});