let colorArr = ['Red', 'Blue', 'Purple', 'Green' , 'rgb(254, 197, 187)']
let color = document.getElementById('color')
let btn = document.getElementById('btn')
let background = document.getElementById('body')

btn.addEventListener('click', () =>{
    let tempColor = colorArr[Math.floor(Math.random(colorArr)*colorArr.length)]
    background.style.background = tempColor
    color.innerHTML = `&nbsp;${tempColor}`
})
