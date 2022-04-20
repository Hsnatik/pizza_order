document.querySelector('#secPepperoni').addEventListener('click', addPepperoni)

document.querySelector('#secSosis').addEventListener('click', addSosis)

document.querySelector('#secSogan').addEventListener('click', addSogan)

document.querySelector('#secZeytin').addEventListener('click', addZeytin)

document.querySelector('#secBiber').addEventListener('click', addBiber)

document.querySelector('#secSebze').addEventListener('click', addSebze)

document.querySelector('#secDomates').addEventListener('click', addDomates)

document.querySelector('#secMantar').addEventListener('click', addMantar)

document.querySelector('#secAnanas').addEventListener('click', addAnanas)

function addPepperoni(){
    document.querySelector('#pepperoni').classList.toggle('hidden')
}

function addSosis(){
    document.querySelector('#sosis').classList.toggle('hidden')
}
function addSogan(){
    document.querySelector('#sogan').classList.toggle('hidden')
}

function addZeytin(){
    document.querySelector('#zeytin').classList.toggle('hidden')
}

function addBiber(){
    document.querySelector('#biber').classList.toggle('hidden')
}

function addSebze(){
    document.querySelector('#sebze').classList.toggle('hidden')
}

function addDomates(){
    document.querySelector('#domates').classList.toggle('hidden')
}

function addMantar(){
    document.querySelector('#mantar').classList.toggle('hidden')
}

function addAnanas(){
    document.querySelector('#ananas').classList.toggle('hidden')
}
