let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("burguer");
let fechar = document.getElementById("botaofechar");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
  btnMenu.classList.add("esconder-botao");
});

fechar.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
  btnMenu.classList.remove("esconder-botao");
});

let p = document.createElement("p");
p.innerText = "Oi pessoal";
menu.append(p);
