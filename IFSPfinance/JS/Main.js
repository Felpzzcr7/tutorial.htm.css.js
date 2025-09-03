function openmodal () {
    const modal = document.querySelector(".modal")
    modal.style.display = "flex"
}
function closemodal () {
    const modal = document.querySelector(".modal")
    modal.style.display = "none"
}
function addticker (event) {
    event.preventDefault()

    const ticker= event.target.ticker.value
    const bolsa= event.target.bolsa.value
    const Ativos= event.target.Ativos.value
    const valor= event.target.valor.value
    const card = `
    <div class="carteira">
                        <div class="ticker">
                            <p>${ticker}</p>
                            <P>${bolsa}</P>
                        </div>
                        <div class="espacador">
                            <p>Quantidade:</p>
                            <p>${Ativos}</p>

                        </div>

                        <div class="espacador">


                        </div>

                        <div class="meio">
                            <p> U$${valor} </p>

                        </div>

                        <div class="variacaop">

                            <img src="img/setaverde.png" alt="">
                            <p>+U$19,00</p>

                        </div>
                        <div class="espacador">
                            <p>Posição:</p>
                            <p>U$${valor * Ativos}</p>

                        </div>
                    </div>
    
    
    `
    const cards = document.querySelector("#cards")
    cards.innerHTML += card
    closemodal()


}
