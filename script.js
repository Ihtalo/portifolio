// Alternar modo escuro com salvamento no navegador
const temaBtn = document.getElementById("temaBtn");
temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("tema", document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark");
}

// Efeito de digitação com Typed.js
const typed = new Typed("#typed", {
  strings: [
    "Desenvolvedor Front-End Júnior",
    "Estudante de Sistemas de Informação",
    "Criador de Projetos Web e Jogos"
  ],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// Botão de voltar ao topo
const btnTop = document.getElementById("btnTop");
window.onscroll = () => {
  btnTop.style.display = window.scrollY > 300 ? "block" : "none";
};
btnTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Envio do formulário via EmailJS
emailjs.init("7ILooHhK2E4WqNJ0x"); // Substitua com seu próprio user ID, se necessário

const form = document.getElementById("form-contato");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const msg = document.getElementById("retorno-msg");

    emailjs.sendForm("service_uaf3mii", "template_iu1owi8", this)
      .then(() => {
        msg.textContent = "Mensagem enviada com sucesso!";
        msg.style.color = "green";
        this.reset();
      }, (error) => {
        msg.textContent = "Erro ao enviar mensagem. Tente novamente.";
        msg.style.color = "red";
      });
  });
}
