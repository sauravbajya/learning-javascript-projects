let person =[
    {
        pic : './img/user-img1.jpg',
        name : 'Tori Doi',
        job : 'Engineer',
        review : 'Enim optio voluptas molestias pariatur error, vel saepe cum vero minima culpa dignissimos eius, incidunt eveniet aspernatur perferendis ipsum quod mollitia commodi.'
    },
    {
        pic : './img/user-img.jpg',
        name : 'Saurav Bajracharya',
        job : 'Web Developer',
        review : 'Lorem ipsum dolor luptas molestias pariatur error, vel saepe cum vero minima culpa dignissimos eius, incidunt eveniet aspernatur perferendis ipsum quod mollitia commodi.'
    },
    {
        pic : './img/user-img2.jpg',
        name : 'Rob Lucci',
        job : 'Doctor',
        review : 'adipisicing elit. Enim '
    },
    {
        pic : './img/user-img3.jpg',
        name : 'Furax Devkota',
        job : 'Sleeper',
        review : 'arror, vel saepe cum vero minima culpa dignissimos eius, incidunt eveniet aspernatur perferendis ipsum quod mollitia commodi.'
    },
    {
        pic : './img/user-img4.jpg',
        name : 'Fisher Man',
        job : 'Pilot',
        review : 'adipisicing elit. Enim optio voluptas molestias pariatur error, vel saepe cum vero minima culpa dignissimos eius, incidunt eveniet aspernatur perferendis ipsum quod mollitia commodi.'
    },
    {
        pic : './img/user-img5.jpg',
        name : 'Sulavi Bara',
        job : 'Umemployed',
        review : ' molestias pariatur error, vel saepe cum vero minima culpa dignissimos eius, incidunt eveniet aspernatur perferendis ipsum quod mollitia commodi.'
    },
    {
        pic : './img/user-img6.jpg',
        name : 'Choco Polom',
        job : 'Surfer',
        review : 'adipisicing elit. Enim optio voluptas molestias pariatur error, vel saepe cum vero minima culpa dignissimos eius, incidunt eveniet aspernatur perferendis ipsum quod mollitia commodi.'
    },
    {
        pic : './img/user-img7.jpg',
        name : 'Bob Builder',
        job : 'Miner',
        review : 'adipisicing elit. Enim optio culpa dignissimos eius, incidunt eveniet aspernatur perferendis ipsum quod mollitia commodi.'
    },
    {
        pic : './img/user-img8.jpg',
        name : 'Leroy Mole',
        job : 'Carpenter',
        review : 'adipisicing elit. Enim optio voluptas molestias pariatur error, vel saepe cum vero minima culpa dmollitia commodi.'
    }
    
]
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let rand = document.querySelector('#rand') 

let id = 0



document.querySelector('h2').innerHTML = `${person[id].name}`
document.querySelector('img').src = `${person[id].pic}`
document.querySelector('h3').innerHTML = `${person[id].job}`
document.querySelector('p').innerHTML = `${person[id].review}`



let change = () => {
document.querySelector('h2').innerHTML = `${person[id].name}`
document.querySelector('img').src = `${person[id].pic}`
document.querySelector('h3').innerHTML = `${person[id].job}`
document.querySelector('p').innerHTML = `${person[id].review}`
}


// for random
rand.addEventListener('click', () => {
    id = Math.floor(Math.random(0)*person.length)
    change();
})


// for previous button
prev.addEventListener('click',() => 
{
    id--;
    if(id < 0){
        id = person.length-1;
    }
    change();
})



// for next button
next.addEventListener('click',() => 
{
    id++;
    if(id > person.length-1){
        id = 0;
    }
    console.log(id);
    change();
})




