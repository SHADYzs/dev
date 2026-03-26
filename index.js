const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const project = btn.dataset.project;

    if (project === "amx") {
      alert("Proyecto AMX: Plugins personalizados y optimización de servidor.");
    }

    if (project === "web") {
      alert("Proyecto Web: Interfaces modernas con HTML, CSS y JS.");
    }
  });
});