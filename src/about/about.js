const path = window.location.pathname;
const pageName = path.replace(/\/|\..+/g, "");
if (pageName === "about") {
  const btnToggle = document.querySelector(".toggle-btn");
  btnToggle.addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
  });

  const btn_inicio = document.getElementById("btn-inicio");
  const amarillo = document.getElementById("amarillo");
  const azul = document.getElementById("azul");
  const rojo = document.getElementById("rojo");
  const verde = document.getElementById("verde");

  const NIVEL_FINAL = 10;

  class Juego {
    constructor() {
      this.iniciandoJuego();
      this.secuenciaNumeros();
      setTimeout(() => this.siguienteNivel(), 1000);
      //this.siguenteNivel()
    }
    iniciandoJuego() {
      this.colorElegido = this.colorElegido.bind(this);
      btn_inicio.classList.add("ocultar");
      this.cambios_btn_inicio();
      this.colores = { amarillo, azul, rojo, verde };
      this.nivel = 1;
    }
    cambios_btn_inicio() {
      if (btn_inicio.classList.contains("ocultar")) {
        btn_inicio.classList.remove("ocultar");
      } else {
        btn_inicio.classList.add("ocultar");
      }
    }
    transformarNumerosAcolores(numero) {
      switch (color) {
        case "amarillo":
          return 0;
        case "azul":
          return 1;
        case "rojo":
          return 2;
        case "verde":
          return 3;
      }
    }
    secuenciaNumeros() {
      this.secuencia = new Array(NIVEL_FINAL).fill(0).map((numero) => {
        return Math.floor(Math.random() * 4);
      });
    }
    siguienteNivel() {
      this.subnivel = 0;
      this.iluminarSecuencia();
      this.capturarEventos();
    }
    iluminarSecuencia() {
      for (let i = 0; i < this.nivel; i++) {
        const color = this.transformarNumerosAcolores(this.secuencia[i]);
        console.log(color);
        setTimeout(() => this.iluminarColores(color), 800 * i);

        this.iluminarColores(color);
      }
    }
    iluminarColores(color) {
      this.colores[color].classList.add("tenue");
      setTimeout(() => this.apagarColores(color), 300);
    }
    apagarColores(color) {
      this.colores[color].classList.remove("tenue");
    }
    capturarEventos() {
      this.colores.amarillo.addEventListener("clik", this.colorElegido);
      this.colores.azul.addEventListener("clik", this.colorElegido);
      this.colores.rojo.addEventListener("clik", this.colorElegido);
      this.colores.verde.addEventListener("clik", this.colorElegido);
    }
    cancelarEventos() {
      this.colores.amarillo.removeEventListener("clik", this.colorElegido);
      this.colores.azul.removeEventListener("clik", this.colorElegido);
      this.colores.rojo.removeEventListener("clik", this.colorElegido);
      this.colores.verde.removeEventListener("clik", this.colorElegido);
    }
    colorElegido(ev) {
      const color_Identificado = ev.target.dataset.color;
      console.log(color_identificado);
      const numero_color = this.transformarColoresANumeros(color_identificado);
      console.log(numero_color);
      this.iluminarColores(color_identificado);

      if (numero_color === this.secuencia[this.subnivel]) {
        this.subnivel++;
        if (this.subnivel === this.nivel) {
          this.nivel++;
          this.cancelarEventos();
          if (this.nivel === NIVEL_FINAL + 1) {
            this.ganasteElJuego();
          } else {
            setTime(() => this.siguienteNivel(), 900);
            this.siguienteNivel();
          }
        }
      } else {
        this.perdisteElJuego();
      }
    }
    ganasteElJuego() {
      alert("GENIAL!!GANASTE").then(() => this.iniciandoJuego());
    }
    perdisteElJuego() {
      alert("UPS..PERDISTE").then(() => {
        this.cancelarEventos();
        this.iniciandoJuego();
      });
    }
  }
  function EmpezarJuego() {
    let juego = new Juego();
    console.log( "hola");
   
  }
  btn_inicio.addEventListener("click", EmpezarJuego);
  
}
