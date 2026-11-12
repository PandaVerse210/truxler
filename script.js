console.log("TRUXLER iniciado com sucesso!");

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    console.log("Navegação:", link.textContent);
  });
});
