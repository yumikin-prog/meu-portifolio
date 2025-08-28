// Mostrar/esconder o botão
window.onscroll = function () {
  const btn = document.getElementById("btnTopo");
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Voltar ao topo
document.getElementById("btnTopo").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
window.onload = function () {
  alert("Bem-vindo ao meu portfólio! 🚀");
};
function atualizarDataHora() {
  const agora = new Date();
  const opcoes = { 
    weekday: 'long', year: 'numeric', month: 'long', 
    day: 'numeric', hour: '2-digit', minute: '2-digit' 
  };
  document.getElementById("dataHora").textContent = 
    agora.toLocaleDateString("pt-BR", opcoes);
}

// Atualiza ao carregar e a cada minuto
atualizarDataHora();
setInterval(atualizarDataHora, 60000);