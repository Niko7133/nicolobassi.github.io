// Inizializza Lenis (per uno scroll fluido)
const lenis = new Lenis({
  smooth: true
});

// Aggiorna Lenis durante l'animazione
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Inizializza GSAP e ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".name",
  { x: "40vw" }, // Parte dalla sua posizione attuale
  {
    x: "-10vw", // Si muove verso sinistra
    scrollTrigger: {
      trigger: ".name",
      start: "top center", // Inizia quando Nicolò raggiunge il centro dello schermo
      scrub: true, // L'animazione è legata allo scroll
      end: "bottom top", // Termina quando Nicolò esce dallo schermo
      markers: false
    }
  }
);

gsap.fromTo(
  ".surname",
  { x: "-10vw" }, // Parte dalla sua posizione attuale
  {
    x: "5vw", // Si muove verso destra
    scrollTrigger: {
      trigger: ".surname",
      start: "top center", // Inizia quando Bassi raggiunge il centro dello schermo
      scrub: true,
      end: "bottom top"
    }
  }
);
