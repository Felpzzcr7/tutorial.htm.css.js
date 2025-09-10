function openmodal (modalId) {
    const modal = document.querySelector(modalId)
    modal.style.display = "flex"
}
function closemodal (modalId) {
    const modal = document.querySelector(modalId)
    modal.style.display = "none"
}
function addticker (event) {
    event.preventDefault()

    const ticker= event.target.ticker.value
    const bolsa= event.target.bolsa.value
    const Ativos= event.target.Ativos.value
    const valor= event.target.valor.value
    const card = `
    <div class="carteira"  onmouseenter="showbuttons(event)" onmouseleave="hidebuttons(event)">
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
                        <div class="buttons">
                            <button type="button" onclick=""> editar</button>
                            <button type="button" onclick="deletecard(event)"> excluir</button>
                    </div>
    
    
    `
    const cards = document.querySelector("#cards")
    cards.innerHTML += card
    closemodal('#add')


}
function showbuttons (event){
    const buttons = event.target.querySelector(".buttons")
    buttons.style.display = "flex"
}
function hidebuttons (event){
    const buttons = event.target.querySelector(".buttons")
    buttons.style.display = "none"
}
function deletecard(event){
    const carteira = event.target.closest(".carteira")
    carteira.remove()
}
function openeditcard(event){
    openmodal('#edit')
    
    const carteira= event.target.closest(".carteira")

    const ticker= carteira.querySelector('espacador p').innertext
    const inputeditticker = document.getElementbyId(editticker)
    inputeditticker.value = ticker

    const valor= carteira.querySelector('meio p p').innertext
    const inputeditvalor = document.getElementbyId(editvalor)
    inputeditvalor.value = valor

    const bolsa= carteira.querySelector('ticker h2').innertext
    const selecteditbolsa = document.getElementbyId(editbolsa)
    selecteditbolsa.value = bolsa
    const option = selecteditbolsa.querySelector('option[value=$bolsa]')
    option.setAttribute


   
}

function editticker (event) {
    event.preventDefault()

    const ticker= event.target.ticker.value
    const bolsa= event.target.bolsa.value
    const Ativos= event.target.Ativos.value
    const valor= event.target.valor.value
    const card = `
    <div class="carteira" id="${ticker}" onmouseenter="showbuttons(event)" onmouseleave="hidebuttons(event)">
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
                        <div class="buttons">
                            <button type="button" onclick=""> editar</button>
                            <button type="button" onclick="deletecard(event)"> excluir</button>
                    </div>
    
    
    `
    const cards = document.querySelector("#cards")
    cards.innerHTML += card
    closemodal()


}