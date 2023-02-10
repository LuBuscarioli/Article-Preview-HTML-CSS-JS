let button = document.querySelector('#button')
let abaShare = document.querySelector('.share')
let buttonClose = document.querySelector('#buttonClose')
let buttonCloseTwo = document.querySelector('#buttonCloseTwo')

button.addEventListener('click', function (){
    abaShare.style.display = 'flex'
    buttonClose.style.display = 'inline-block'
    button.style.display = 'none'
})

function close () {
    abaShare.style.display = 'none'
    button.style.display = 'inline-block'
    buttonClose.style.display = 'none'
}

buttonClose.addEventListener('click', close)
buttonCloseTwo.addEventListener('click', close)

/*
var buttonOpen = document.querySelector('#button')

function showShare () {
    document.querySelector('.share').style.display = 'flex'
}

buttonOpen.onclick = showShare 
*/