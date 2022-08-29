const lamOn = document.querySelector('#acender')
const lamOf = document.querySelector('#apagar')
let img = document.querySelector('#img')

function islampada(){
    return img.src.indexOf ('quebrada') > -1
}


function on(){
    if(!islampada()){
        img.src = 'img/ligada.jpg'
    }
}

function of(){
    if(!islampada()){
        img.src = 'img/desligada.jpg'
    }
}

function quebra(){
    img.src = 'img/quebrada.jpg'
}

lamOn.addEventListener('click', on);
lamOf.addEventListener('click', of)
img.addEventListener('mouseover', on);
img.addEventListener('mouseleave', of);
img.addEventListener('dblclick', quebra);


