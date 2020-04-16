// selecionaremos o campo de texto no filtra.js:
var campoFiltro = document.querySelector("#filtrar-tabela");
// Adicionado escutador de evento addEventListener() para escutar um evento de input,
 // afim de seja iniciar o processo de filtragem.
campoFiltro.addEventListener("input", function(){
	// Capturando o value do campoFiltro usando a palavra de contexto this, referente ao próprio dono do evento.
	console.log(this.value);
	// Conforme o nome é digitado, podemos ir comparando com os de todos os pacientes da tabela com o querySelectAll()
	var pacientes = document.querySelectorAll(".paciente");
	if(this.value.length > 0){
		// No entanto, queremos fazer a comparação com o nome dos pacientes, não com a tr. 
		// Precisaremos iterar sobre os pacientes, para então acessarmos o nome de cada um:
		for (var i = 0; i < pacientes.length; i++) {
	        var paciente = pacientes[i];
	        var tdNome = paciente.querySelector(".info-nome");
	        var nome = tdNome.textContent;
	        var expressao = new RegExp(this.value, "i");
	        if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
	    }

	} else {
		for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
	}
	
});