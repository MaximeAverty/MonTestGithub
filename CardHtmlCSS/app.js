const card = document.getElementById("card")
const counterTxt = document.getElementById("counter")

let counter = 5

counterTxt.textContent = counter

card.addEventListener("click", () => {

    counter = counter - 1
    
    if(counter <= 0) {
        counterTxt.textContent = 0
        window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0")
    }else {
        counterTxt.textContent = counter
        let cardH = card.offsetHeight
        let cardW = card.offsetWidth

        let height = window.innerHeight - cardH
        let width = window.innerWidth - cardW

        let randomHeight = Math.floor(Math.random() * height) + 1
        let randomWidth = Math.floor(Math.random() * width) + 1

        card.style.position = "absolute"
        card.style.top = randomHeight + "px"
        card.style.left = randomWidth + "px"
    }

    

    

})