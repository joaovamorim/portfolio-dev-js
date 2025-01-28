function validarEmail() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    emailInput.focus();
    return false;
  }

  alert("E-mail adicionado com sucesso: " + email);
  return true;
}