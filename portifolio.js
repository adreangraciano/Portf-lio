// Seleciona o formulário pelo ID
const form = documento.getElementById("formContato")

// Adiciona evento de envio
form.addEventListener("submit", function(event) {
    event.preventDefault(); // impede o envio padrão
    alert("Mensagem enviada com sucesso!"); // Exibe alerta
    form.reset(); // Limpa os campos do formulário
});
