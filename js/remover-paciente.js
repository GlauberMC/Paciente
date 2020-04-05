var pacientes = document.querySelectorAll(".paciente");

// passando por cada paciente da tabela
pacientes.forEach(function(paciente){
	// adicionando a cada paciente um escutador de duplo click
	paciente.addEventListener("dblclick", function(){
		// removendo paciente da tabela com o comando remove usando this
		// this é uma palavra de contexto ligada com quem acionou o evento, 
		// a quem o evento está atrelado. Como o evento está atrelado ao paciente, o this fará referência a ele.
		this.remove();
	});
});