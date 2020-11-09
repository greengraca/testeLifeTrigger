const navBar = document.querySelector(".navBar")
const logo = document.querySelector(".logo")
const botoesNavBar = document.querySelectorAll(".botoesNavegacao a")

window.onscroll = function() {
    
    if(document.body.scrollTop || document.documentElement.scrollTop >= 50){
        navBar.classList.add('navBarBranca');
        logo.classList.add('logoNavBranca');
        botoesNavBar.forEach((botao) =>
            botao.classList.add("botoesNavegacaoBranca")
        )
    } else {
        navBar.classList.remove('navBarBranca');
        logo.classList.remove('logoNavBranca');
        botoesNavBar.forEach((botao) => 
            botao.classList.remove("botoesNavegacaoBranca")
        )
    }
}