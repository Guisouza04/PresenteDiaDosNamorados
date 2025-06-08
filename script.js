const giftIcon = document.getElementById("giftIcon");
const memoryBoard = document.getElementById("containerMemoryBoard");
const timer = document.getElementById("timer");

giftIcon.addEventListener("click", () => {
  giftIcon.style.display = "none";
  memoryBoard.style.display = "flex";
  timer.style.display = "flex";
  launchHearts();
});

function launchHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = "0";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

// Cálcula o tempo que estamos juntos
function calcularTempoDeNamoro(dataNamoro) {
  setInterval(() => {
    const agora = new Date();
    const diferenca = agora - dataNamoro;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    const dias = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const horas = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    const frase = `À ${anos} anos, ${meses} meses, ${dias} dias, ${horas
      .toString()
      .padStart(2, "0")} horas, ${minutos
      .toString()
      .padStart(2, "0")} minutos e ${segundos
      .toString()
      .padStart(2, "0")} segundos que meu coração bate por você!`;

    document.getElementById("timer").innerText = frase;
  }, 1000);
}

const dataNamoro = new Date(2025, 3, 30);
calcularTempoDeNamoro(dataNamoro);
console.log(calcularTempoDeNamoro(dataNamoro));
