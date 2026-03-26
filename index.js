const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const text = document.getElementById("modal-text");
const close = document.getElementById("close");

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.info;

    if (type === "amx") {
      title.textContent = "Servidor AMX";
      text.textContent = "Sistema de plugins personalizados, optimización de rendimiento y configuración avanzada.";
    }

    if (type === "web") {
      title.textContent = "Web Portfolio";
      text.textContent = "Diseño web moderno con animaciones, enfoque en UX/UI y rendimiento.";
    }

    modal.classList.remove("hidden");
  });
});

close.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
