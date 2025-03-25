<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar dados do formulário
    $nome = htmlspecialchars($_POST['nome']); // Evitar XSS (Cross-site Scripting)
    $email = htmlspecialchars($_POST['email']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    // Definir o e-mail para onde as mensagens serão enviadas
    $para = "lucapiccoli@hotmail.com"; // 
    $titulo = "Mensagem de Contato- $nome";
    $conteudo = "Você recebeu uma nova mensagem de contato.\n\n";
    $conteudo .= "Nome: $nome\n";
    $conteudo .= "Email: $email\n";
    $conteudo .= "Mensagem:\n$mensagem\n";

    // Definir o cabeçalho do e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar o e-mail
    if (mail($para, $titulo, $conteudo, $headers)) {
        echo "<script>alert('Sua mensagem foi enviada com sucesso!');</script>";
        echo "<script>window.location.href = 'contato.html';</script>"; // Redireciona para a página de contato
    } else {
        echo "<script>alert('Houve um erro ao enviar sua mensagem. Tente novamente mais tarde.');</script>";
    }
}
?>
