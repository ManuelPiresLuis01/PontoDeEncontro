window.revelar = ScrollReveal({ reset: true })

var cont = 0

parar = setInterval(function () {
    ++cont
    if (cont == 4) { 
        document.querySelector(".loading").classList.add("fechar")
        cont = 0
        aparecer()
        clearInterval(parar)
    }

}, 1000)
function aparecer() {

    revelar.reveal(".textoPrincipal", {
        duration: 2000,
        distance: "50px",
        delay: 500
    })
    revelar.reveal(".bi-arrow-through-heart-fill", {
        duration: 2000,
        distance: "50px",
        delay: 700
    })
    revelar.reveal("#nome", {
        duration: 2000,
        distance: "50px",
        delay: 800
    })
    revelar.reveal(".password", {
        duration: 2000,
        distance: "50px",
        delay: 900
    })
    revelar.reveal(".btnEntrar", {
        duration: 2000,
        distance: "50px",
        delay: 1000
    })
    revelar.reveal(".a1", {
        duration: 2000,
        distance: "50px",
        delay: 1100
    })
    revelar.reveal(".a2", {
        duration: 2000,
        distance: "50px",
        delay: 1200
    })

}

let inputSenha
let btnVerSenha

inputSenha = document.getElementById("inputPass")
btnVerSenha = document.getElementById("btnVerSenha")

btnVerSenha.addEventListener("click",
    function () {
        if (inputSenha.type === "password") {
            inputSenha.setAttribute("type", "text")
            btnVerSenha.style.backgroundColor = "#ff768d69"
            btnVerSenha.style.color = "white"
        } else {
            inputSenha.setAttribute("type", "password")
            btnVerSenha.style.backgroundColor = "white"
            btnVerSenha.style.color = "#fd5470"
        }
    })

