const watch=document.querySelector(".watch");
// Create ticks
for (let i=0; i<60; i++){
const newTick=document.createElement("div");
newTick.classList.add("tick");
if((i%5)==0)  newTick.classList.add("widetick");
newTick.style.transform="rotate(" + (i*6) + "deg)"
watch.appendChild(newTick);
}

// Set time
function setTime(){

const  now= new Date();
document.querySelector(".hours").innerHTML=now.getHours();
document.querySelector(".minutes").innerHTML=  String(  parseInt( 100+ ( now.getMinutes()))  ).slice(1)      ;
document.querySelector(".date").innerHTML=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][now.getMonth()] + " "+now.getDate();

}


setTime();
document.getElementById("ring").addEventListener("animationiteration",setTime);