
/* 
Case sensitive em palavras reservadas (reconhece letra em capslock ou n)
Acesso por tag: getElementByTagName()
Acesso por Id: getElementById()
Acesso por nome: getElementsByName()
Acesso por classe: getElementsByClassName()
Acesso por seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido...'
        txtNome.style.color = 'red'
        txtNome.style.fontFamily = 'Arial'
    } else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido...'
        txtEmail.style.color = 'red'
        txtEmail.style.fontFamily = 'Arial'
    }else{
        txtEmail.innerHTML = 'E-mail válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres... '
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        txtAssunto.style.fontFamily = 'Arial'
    } else {
      txtAssunto.style.display = 'none'
      assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

