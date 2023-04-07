
let nome = window.document.getElementById("nome")
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido...'
        txtNome.style.color = '#FFD570'
        txtNome.style.fontFamily = 'Arial'
    } else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = '#74FF77'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido...'
        txtEmail.style.color = '#FFD570'
        txtEmail.style.fontFamily = 'Arial'
    } else {
        txtEmail.innerHTML = 'E-mail válido!'
        txtEmail.style.color = '#74FF77'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres... '
        txtAssunto.style.color = '#FFD570'
        txtAssunto.style.display = 'block'
        txtAssunto.style.fontFamily = 'Arial'
        assuntoOk = false
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
     alert("Formulário enviado com sucesso!") 
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = '420px'
    mapa.style.height = '320px'
    mapa.style.boxShadow = '2px 2px 8px rgba(0, 0, 0, 0.9)'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '300px'
    mapa.style.boxShadow = 'none'
}

/* --------------------------------*/

var proximaPromocao = new Date("2023-04-29T00:00:00Z");

function updateCounter() {
    var dataHoje = new Date();
    var diferenca = proximaPromocao - dataHoje;

    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = dias + " dias, " + horas + " horas, " + minutos + " minutos, " + segundos + " segundos";
}

setInterval(updateCounter, 1000);

/** teste */
