const form = document.getElementById("right-container");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // impede o envio automático do formulário


  const inputs = form.querySelectorAll("input[type='text']");
  const textarea = document.getElementById("myTextarea");

  const nome = inputs[0].value.trim(); 
  const sobrenome = inputs[1].value.trim(); 
  const email = inputs[2].value.trim(); 
  const telefone = inputs[3].value.trim();
  const message = textarea.value.trim();

 
  let isValid = true;

  try {
    // Validar nome
    if (nome.length <= 3) {
      alert("Por favor, preencha o nome com mais de 3 caracteres.");
      isValid = false;
      throw new Error("Nome inválido");
    }

    // Validar sobrenome
    if (sobrenome.length <= 3) {
      alert("Por favor, preencha o sobrenome com mais de 3 caracteres.");
      isValid = false;
      throw new Error("Sobrenome inválido");
    }

    // Validar email  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Por favor, insira um email válido.");
      isValid = false;
      throw new Error("Email inválido");
    }

    //validar se a mensagem foi preenchida
    if (message.length === 0) {
      alert("Por favor, preencha a mensagem");
      isValid = false;
      throw new Error("Mensagem vazia");
    }
  } catch (error) {
    console.log(error)
  }

  // Se tudo estiver válido, enviar o formulário
  if (isValid) {

    form.submit();
  }
});
