const botaoSobreMim = document.getElementById("botao-sobre-mim");
const secaoSobreMim = document.getElementById("sobre-mim");

botaoSobreMim.addEventListener("click", () => {
    secaoSobreMim.scrollIntoView({ behavior: "smooth" });
});
