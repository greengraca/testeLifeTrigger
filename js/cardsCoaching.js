const cardsCoaching = document.querySelectorAll(".cardCoaching")
const botoesCoaching = document.querySelectorAll(".botoesCoaching a")
const iBotoesCoaching = document.querySelectorAll(".botoesCoaching a i")
const pBotoesCoaching = document.querySelectorAll(".botoesCoaching a p")

cardsCoaching[0].style = "display: flex;"

for(let i = 0; i < botoesCoaching.length; i++) {
    botoesCoaching[i].addEventListener("click", () => {
        iBotoesCoaching.forEach( i => i.classList.remove("coachingSelecionado"))
        pBotoesCoaching.forEach( p => p.classList.remove("coachingSelecionado"))

        iBotoesCoaching[i].classList.add("coachingSelecionado")
        pBotoesCoaching[i].classList.add("coachingSelecionado")

        cardsCoaching.forEach( card => card.style = "display: none;" )
        cardsCoaching[i].style = "display: flex;"
    })
           
}