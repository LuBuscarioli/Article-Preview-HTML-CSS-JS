var button = document.querySelector('#button')
var abaShare = document.querySelector('.share')
var buttonClose = document.querySelector('#buttonClose')
var buttonCloseOne = document.querySelector('#buttonCloseOne')

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
buttonCloseOne.addEventListener('click', close)

/*
var buttonOpen = document.querySelector('#button')

function showShare () {
    document.querySelector('.share').style.display = 'flex'
}

buttonOpen.onclick = showShare 
*/