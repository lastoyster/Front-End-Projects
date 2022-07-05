document.querySelectorAll(".pic").forEach(x => {
  x.addEventListener("click", (ev) => {
    ev.target.classList.toggle("active");
  }
})