const items = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
items.forEach(item => observer.observe(item));

// Music button is wired for an optional music file placed at /assets/wedding.mp3.
// Add your licensed audio file there; playback starts only after the visitor taps.
const audio = document.getElementById("music");
audio.src = "/assets/wedding.mp3";
const musicBtn = document.getElementById("musicBtn");
let playing = false;
musicBtn.addEventListener("click", async () => {
  try {
    if (!playing) {
      await audio.play();
      playing = true;
      musicBtn.textContent = "♫ Music: On";
    } else {
      audio.pause();
      playing = false;
      musicBtn.textContent = "♫ Music: Off";
    }
  } catch (e) {
    musicBtn.textContent = "♫ Add music file";
  }
});