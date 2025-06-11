document.addEventListener("DOMContentLoaded", () => {
  heart.render("#Heart");
});

const giftIcon = document.getElementById("giftIcon");
const content = document.getElementById("conteudo");

giftIcon.addEventListener("click", () => {
  giftIcon.style.display = "none";
  content.style.display = "block";
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

const heart = {
  html: '<div class="Heart"></div>',
  css: `
    .Heart {
  height: 6rem;
  width: 6rem;
  background-color: #f20044;
  position: relative;
  transform: rotate(-45deg);
  box-shadow: -1rem 1rem 9rem #f20044;
  animation: heart 1s linear infinite alternate;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
@keyframes heart{
  0% {
    transform: rotate(-45deg) scale(1.07);
  }
  80% {
    transform: rotate(-45deg) scale(1.0);
  }
  100% {
    transform: rotate(-45deg) scale(0.8);
  }
}
.Heart::before {
  content: ' ';
  position: absolute;
  height: 6rem;
  width: 6rem;
  background-color: #f20044;
  top: -50%;
  border-radius: 5rem;
  box-shadow: -1rem -1rem 9rem #f20044;
}
.Heart::after {
  content: ' ';
  position: absolute;
  height: 6rem;
  width: 6rem;
  background-color: #f20044;
  right: -50%;
  border-radius: 5rem;
  box-shadow: 1rem 1rem 9rem #f20044;
}
  `,
  render: function (container) {
    // Adicionar CSS ao cabeçalho
    const style = document.createElement("style");
    style.textContent = this.css;
    document.head.appendChild(style);

    // Adicionar HTML ao contêiner
    document.querySelector(container).innerHTML = this.html;
  },
};

const floatingHearts = {
  html: `<div class="Heart" onclick="floatingHearts.spawnHearts()"></div>`,
  css: `
    .Heart {
  height: 6rem;
  width: 6rem;
  background-color: #f20044;
  position: relative;
  transform: rotate(-45deg); /* Deixa o coração "em pé" */
  box-shadow: -1rem 1rem 9rem #f20044;
  animation: heart 1s linear infinite alternate;
  margin-top: 5rem;
  margin-bottom: 5rem;
  cursor: pointer;
}

@keyframes heart {
  0% {
    transform: rotate(-45deg) scale(1.07);
  }
  80% {
    transform: rotate(-45deg) scale(1.0);
  }
  100% {
    transform: rotate(-45deg) scale(0.8);
  }
}

.Heart::before,
.Heart::after {
  content: ' ';
  position: absolute;
  height: 6rem;
  width: 6rem;
  background-color: #f20044;
  border-radius: 50%;
}

.Heart::before {
  top: -50%;
  left: 0;
}

.Heart::after {
  left: 50%;
  top: 0;
}

.floating-heart {
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: #f20044;
  transform: rotate(-45deg);
  border-radius: 0;
  animation: float-up 2.5s ease-out forwards;
}

.floating-heart::before,
.floating-heart::after {
  content: '';
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: #f20044;
  border-radius: 50%;
}

.floating-heart::before {
  top: -50%;
  left: 0;
}

.floating-heart::after {
  left: 50%;
  top: 0;
}

@keyframes float-up {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(-45deg);
  } 
  100% {
    opacity: 0;
    transform: translateY(-500px) scale(0.5) rotate(-45deg);
  }
  @media screen and (max-width: 480px) {
  .floating-heart {
    width: 1.5rem;
    height: 1.5rem;
    animation: float-up 1.8s ease-out forwards;
  }

  .Heart {
    height: 5rem;
    width: 5rem;
  }

  .Heart::before,
  .Heart::after {
    height: 5rem;
    width: 5rem;
  }
}
  `,
  render: function (container) {
    // Adicionar CSS ao cabeçalho
    const style = document.createElement("style");
    style.textContent = this.css;
    document.head.appendChild(style);

    // Adicionar HTML ao contêiner
    document.querySelector(container).innerHTML = this.html;
  },
  spawnHearts: function () {
    const container = document.body; // Onde os corações serão adicionados

    const heartElement = document.querySelector(".Heart");
    const rect = heartElement.getBoundingClientRect();
    const startY = rect.top + window.scrollY;
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement("div");
      heart.classList.add("floating-heart");
      const randomOffset = Math.random() * -200;
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${startY + randomOffset}px`; // Começa no final da tela
      container.appendChild(heart);

      // Remover o coração após a animação
      setTimeout(() => {
        container.removeChild(heart);
      }, 2000);
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  floatingHearts.render(".HeartDinamico");
});

// O código a baixo, se retrata da sessão de Cartas
const cartasMap = new Map();
cartasMap.set(
  "carta-dia-dos-namorados-12-06-2025",
  "./assets/Cartas/Carta-DiaDosNamorados-12-06-2025.svg"
);

const cartaOverlay = document.createElement("div");
cartaOverlay.setAttribute("id", "carta-overlay");
cartaOverlay.style.display = "none";
document.body.appendChild(cartaOverlay);

async function carregarSvg(caminho) {
  try {
    const resposta = await fetch(caminho);
    if (!resposta.ok)
      throw new Error("Erro ao carregar o SVG: ${resposta.status}");
    const svgBlob = await resposta.blob();
    return URL.createObjectURL(svgBlob);
  } catch (erro) {
    console.error(erro);
    return null;
  }
}

const botoes = document.querySelectorAll(".li-btn-cartas");
botoes.forEach((botao) => {
  botao.addEventListener("click", async () => {
    const cartaId = botao.id;
    const caminhoSvg = cartasMap.get(cartaId);

    if (caminhoSvg) {
      const svgUrl = await carregarSvg(caminhoSvg);
      if (svgUrl) {
        cartaOverlay.innerHTML = `
            <div class="carta-content">
              <img src="${svgUrl}" alt="Carta" class="carta-img">
            </div>
            <button class="fechar-carta">Fechar</button>
          `;
        cartaOverlay.style.display = "flex";

        const botaoFechar = cartaOverlay.querySelector(".fechar-carta");
        botaoFechar.addEventListener("click", () => {
          cartaOverlay.style.display = "none";
          cartaOverlay.innerHTML = "";
          URL.revokeObjectURL(svgUrl);
        });

        cartaOverlay.addEventListener("click", (e) => {
          if (e.target === cartaOverlay) {
            cartaOverlay.style.display = "none";
            cartaOverlay.innerHTML = "";
            URL.revokeObjectURL(svgUrl);
          }
        });
      } else {
        console.error(`Falha ao carregar o SVG para o ID: ${cartaId}`);
      }
    } else {
      console.error(`Nenhuma carta encontrada para o ID: ${cartaId}`);
    }
  });
});
