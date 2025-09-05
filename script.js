function calcularIdade() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let anoNascimento = document.getElementById("anoNascimento").value;

    // Validação simples
    if (anoNascimento === "" || isNaN(anoNascimento)) {
        document.getElementById("resultado").innerHTML = 
            "⚠️ Por favor, digite um ano válido.";
        return;
    }

    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;

    let mensagem = `Olá ${nome} ${sobrenome}, você tem ${idade} anos.`;

    // Mostra o resultado direto na página
    document.getElementById("resultado").innerHTML = mensagem;
}


