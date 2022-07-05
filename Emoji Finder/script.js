function search() {
  spans =  document.querySelectorAll("span")
  tag = document.getElementById("feeling").value
  console.log('search');
  for(span of spans){
    isMatch = span.className.match(tag)
    span.setAttribute("style", isMatch || "display:none")
  }
}