let color = document.getElementById('color')
let btn = document.getElementById('btn')
let background = document.getElementById('body')

btn.addEventListener('click', () => {
    let letters = '0123456789ABCDEF'
    let tempColor = '#'
    for (let i= 0; i< 6; i++){
        tempColor += letters[Math.floor(Math.random()*letters.length)]
    }
    background.style.background = tempColor
    color.innerHTML = `&nbsp;${tempColor}`
})