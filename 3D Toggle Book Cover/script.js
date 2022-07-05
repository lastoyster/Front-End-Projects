/**
 * DOM refrences
 */
const app = document.getElementById("app");
const thickness = document.getElementById("thickness");
const thicknessOutput = document.getElementById("thickness-output");
const bookWrapper = document.getElementById("book-wrapper");
const movieWrapper = document.getElementById("movie-wrapper");
const mediaButtons = document.getElementById("media-buttons");

thicknessOutput.innerHTML = thickness.value;

/**
 * Attach event handlers
 */
thickness.oninput = function() {
    thicknessOutput.innerHTML = this.value;
    app.style.setProperty("--thickness", `${this.value}px`);
}

mediaButtons.addEventListener("click", e => {
    if (!e.target.value) { return; }
    app.setAttribute("data-current-media", e.target.value)
});