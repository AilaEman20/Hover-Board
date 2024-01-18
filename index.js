const container =document.getElementById("container");
const colors = ['#ff2972','#fac031','rgb(27, 249, 223)','#04fc43','#fee800','palegreen','red', 'rgb(228, 228, 104)', 'darkolivegree', 'turquoise', 'darkgreen','rgba(255, 255, 0, 0.536)','#f9004d', 'rgba(0, 139, 139, 0.168','darkcyan','skyblue', '#afd9d5','#76d0cf','orange','#dfd8d6','purple','#a8c6d2', 'blue','#75b2ea','rgb(125, 217, 212','plum','yellowgreen','pink','steelblue','seagreen','khaki','hotpink','lightseagreen','navy']
const SQUARES = 300;

for(let i =0; i<SQUARES; i++){
    const square = document.createElement("div")
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> setColor(square))

    square.addEventListener('mouseout', ()=> removeColor(square))

 container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 6px ${color}`
}

function removeColor(element) {
   //  element.style.background = '#1d1d1d'
   //  element.style.boxShadow = '0 0 4px #000'
 }

 function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
 }