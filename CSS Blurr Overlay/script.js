const frame=document.querySelector(".frame");
const blinds=document.querySelector(".blinds");

frame.addEventListener("mousemove",(ev)=>{
blinds.style.setProperty("bottom",400-ev.offsetY + "px");
})

frame.addEventListener("mouseout",(ev)=>{
blinds.style.setProperty("bottom","300px");
})