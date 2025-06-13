// O número no final representa o ano da carta
const btnCartaDiaDosNamorados25 = document.getElementById(
  "carta-dia-dos-namorados-12-06-2025"
);
const btnFecharcartaDiaDosNamorados25 = document.getElementById(
  "btnFecharcartaDiaDosNamorados25"
);
const cartaDiaDosNamorados25 = document.getElementById(
  "cartaDiaDosNamorados25"
);

const giftIcon = document.getElementById("giftIcon");
const content = document.getElementById("conteudo");

giftIcon.addEventListener("click", () => {
  giftIcon.style.display = "none";
  content.style.display = "flex";
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

    let frase;

    if (anos >= 2 && meses >= 2 && dias >= 2) {
      frase = `À ${anos} anos, ${meses} meses, ${dias} dias, ${horas
        .toString()
        .padStart(2, "0")} horas, ${minutos
        .toString()
        .padStart(2, "0")} minutos e ${segundos
        .toString()
        .padStart(2, "0")} segundos que meu coração bate por você!`;
    } else if (anos == 1 && meses >= 2 && dias >= 2) {
      frase = `À ${anos} ano, ${meses} meses, ${dias} dias, ${horas
        .toString()
        .padStart(2, "0")} horas, ${minutos
        .toString()
        .padStart(2, "0")} minutos e ${segundos
        .toString()
        .padStart(2, "0")} segundos que meu coração bate por você!`;
    } else if (anos == 1 && meses == 1 && dias >= 2) {
      frase = `À ${anos} ano, ${meses} mês, ${dias} dias, ${horas
        .toString()
        .padStart(2, "0")} horas, ${minutos
        .toString()
        .padStart(2, "0")} minutos e ${segundos
        .toString()
        .padStart(2, "0")} segundos que meu coração bate por você!`;
    } else if (anos == 1 && meses == 1 && dias == 1) {
      frase = `À ${anos} ano, ${meses} mês, ${dias} dia, ${horas
        .toString()
        .padStart(2, "0")} horas, ${minutos
        .toString()
        .padStart(2, "0")} minutos e ${segundos
        .toString()
        .padStart(2, "0")} segundos que meu coração bate por você!`;
    } else if (anos < 1 && meses >= 2 && dias >= 2) {
      frase = `À ${meses} meses, ${dias} dias, ${horas
        .toString()
        .padStart(2, "0")} horas, ${minutos
        .toString()
        .padStart(2, "0")} minutos e ${segundos
        .toString()
        .padStart(2, "0")} segundos que meu coração bate por você!`;
    } else if (anos < 1 && meses == 1 && dias >= 2) {
      frase = `À ${meses} mês, ${dias} dias, ${horas
        .toString()
        .padStart(2, "0")} horas, ${minutos
        .toString()
        .padStart(2, "0")} minutos e ${segundos
        .toString()
        .padStart(2, "0")} segundos que meu coração bate por você!`;
    } else if (anos < 1 && meses == 1 && dias == 1) {
      frase = `À ${meses} mês, ${dias} dia, ${horas
        .toString()
        .padStart(2, "0")} horas, ${minutos
        .toString()
        .padStart(2, "0")} minutos e ${segundos
        .toString()
        .padStart(2, "0")} segundos que meu coração bate por você!`;
    } else if (anos < 1 && meses < 1 && dias >= 2) {
      frase = `À ${dias} dias, ${horas
        .toString()
        .padStart(2, "0")} horas, ${minutos
        .toString()
        .padStart(2, "0")} minutos e ${segundos
        .toString()
        .padStart(2, "0")} segundos que meu coração bate por você!`;
    } else {
      frase = `À ${dias} dia, ${horas
        .toString()
        .padStart(2, "0")} horas, ${minutos
        .toString()
        .padStart(2, "0")} minutos e ${segundos
        .toString()
        .padStart(2, "0")} segundos que meu coração bate por você!`;
    }

    document.getElementById("timer").innerText = frase;
  }, 1000);
}

const dataNamoro = new Date(2025, 3, 30);
calcularTempoDeNamoro(dataNamoro);
console.log(calcularTempoDeNamoro(dataNamoro));

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
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.classList.add("floating-heart");
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${Math.random() * 100}vh`;
      heart.style.zIndex = 999;
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

// O Código a baixo é responsável pela sessão de Memórias (Section Memory-board)
// JavaScript for smooth touch scrolling and drag behavior
const memoryBoard = document.getElementById("memoryBoard");
let isDragging = false;
let startY = 0;
let scrollTop = 0;

memoryBoard.addEventListener("touchstart", (e) => {
  isDragging = true;
  startY = e.touches[0].clientY;
  scrollTop = memoryBoard.scrollTop;
});

memoryBoard.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const y = e.touches[0].clientY;
  const deltaY = startY - y;
  memoryBoard.scrollTop = scrollTop + deltaY;
});

memoryBoard.addEventListener("touchend", () => {
  isDragging = false;
});

// Optional: Prevent default scrolling on the body to avoid conflicts
document.body.addEventListener(
  "touchmove",
  (e) => {
    if (memoryBoard.contains(e.target)) {
      e.preventDefault();
    }
  },
  { passive: false }
);

// O código a baixo, se retrata da sessão de Cartas
// document.addEventListener("DOMContentLoaded", function () {
//   const btnCartaDiaDosNamorados25 = document.getElementById(
//     "carta-dia-dos-namorados-12-06-2025"
//   );
//   const btnFecharcartaDiaDosNamorados25 = document.getElementById(
//     "btnFecharcartaDiaDosNamorados25"
//   );
//   const cartaDiaDosNamorados25 = document.getElementById(
//     "cartaDiaDosNamorados25"
//   );

//   if (
//     !btnCartaDiaDosNamorados25 ||
//     !btnFecharcartaDiaDosNamorados25 ||
//     !cartaDiaDosNamorados25
//   ) {
//     console.error("One or more elements not found. Check IDs in HTML.");
//     return;
//   }

//   btnFecharcartaDiaDosNamorados25.addEventListener("click", function () {
//     console.log("Botão fechar foi clicado!");
//     btnFecharcartaDiaDosNamorados25.classList.add("hide");
//     cartaDiaDosNamorados25.classList.add("hide");

//     setTimeout(() => {
//       btnFecharcartaDiaDosNamorados25.style.display = "none";
//       cartaDiaDosNamorados25.style.display = "none";
//       btnFecharcartaDiaDosNamorados25.classList.remove("hide");
//       cartaDiaDosNamorados25.classList.remove("hide");
//     }, 300); // Match animation duration (0.3s)
//   });

//   btnCartaDiaDosNamorados25.addEventListener("click", function () {
//     console.log("Botão carta foi clicado!");
//     btnFecharcartaDiaDosNamorados25.style.display = "flex";
//     cartaDiaDosNamorados25.style.display = "flex";
//   });
// });

// O código abaixo trata da sessão de Cartas
const cartasData = [
  {
    titulo: "Carta Dia Dos Namorados - 12/06/2025",
    imagem: "./assets/Cartas/Carta-DiaDosNamorados-12-06-2025.svg",
    assinatura: "Guilherme",
  },
  {
    titulo: "Carta de Aniversário - 20/07/2025",
    imagem: "./assets/Cartas/Carta-DiaDosNamorados-12-06-2025-Yasmin.svg",
    assinatura: "Yasmin",
  },
  // Adicione mais aqui quando quiser
];

document.addEventListener("DOMContentLoaded", function () {
  const listaCartas = document.getElementById("lista-cartas");

  const cartasData = [
    {
      titulo: "Carta Dia Dos Namorados - 12/06/2025",
      imagem: "./assets/Cartas/Carta-DiaDosNamorados-12-06-2025.svg",
      assinatura: "Guilherme",
    },
    {
      titulo: "Carta de Aniversário - 20/07/2025",
      imagem: "./assets/Cartas/Carta-DiaDosNamorados-12-06-2025-Yasmin.svg",
      assinatura: "Yasmin",
    },
  ];

  cartasData.forEach((carta, index) => {
    const li = document.createElement("li");
    li.classList.add("li-cartas");

    li.innerHTML = `
      <div class="li-btn-cartas">
        <div class="li-cartas-info">
          <p>${carta.titulo}</p>
          <img class="Icons-cartas" src="./assets/Icons/love-letter.png" alt="ícone de carta">
        </div>

        <button class="btn-fechar" style="display: none">
          <img src="./assets/Icons/btn-fechar.svg" alt="Fechar Carta">
        </button>

        <div class="li-carta" style="display: none">
          <img class="carta-img" src="${carta.imagem}" alt="${carta.titulo}">
          <p>Ass: ${carta.assinatura}</p>
        </div>
      </div>
    `;

    listaCartas.appendChild(li);
  });

  // Depois de gerar, aplicar funcionalidade
  const cartas = document.querySelectorAll(".li-cartas");

  cartas.forEach((carta) => {
    const wrapper = carta.querySelector(".li-btn-cartas");
    const btnFechar = carta.querySelector(".btn-fechar");
    const cartaConteudo = carta.querySelector(".li-carta");

    if (!wrapper || !btnFechar || !cartaConteudo) return;

    wrapper.addEventListener("click", function (event) {
      if (event.target.closest(".btn-fechar")) return;

      btnFechar.style.display = "flex";
      cartaConteudo.style.display = "flex";
    });

    btnFechar.addEventListener("click", function () {
      btnFechar.classList.add("hide");
      cartaConteudo.classList.add("hide");

      setTimeout(() => {
        btnFechar.style.display = "none";
        cartaConteudo.style.display = "none";
        btnFechar.classList.remove("hide");
        cartaConteudo.classList.remove("hide");
      }, 300);
    });
  });
});

// JavaScript para o carrossel de músicas
const carrosselMusicas = document.querySelector(".carrosselMusicas");
let isDraggingMusic = false;
let startX = 0;
let scrollLeft = 0;

carrosselMusicas.addEventListener("touchstart", (e) => {
  isDraggingMusic = true;
  startX = e.touches[0].clientX;
  scrollLeft = carrosselMusicas.scrollLeft;
});

carrosselMusicas.addEventListener("touchmove", (e) => {
  if (!isDraggingMusic) return;
  const x = e.touches[0].clientX;
  const deltaX = startX - x;
  carrosselMusicas.scrollLeft = scrollLeft + deltaX;
});

carrosselMusicas.addEventListener("touchend", () => {
  isDraggingMusic = false;
});
