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
    const ativos= event.target.ativos.value
    const valor= event.target.valor.value
    const card = `
    <div class="carteira"  onmouseenter="showbuttons(event)" onmouseleave="hidebuttons(event)">
                        <div class="ticker">
                            <p>${ticker}</p>
                            <P>${bolsa}</P>
                        </div>
                        <div class="espacador">
                            <p>Quantidade:</p>
                            <p>${ativos}</p>

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
                            <p>U$${valor * ativos}</p>

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
    const buttonEdit = event.target
    const carteira = buttonEdit.closest(".carteira")
    
    
    const ticker= carteira.querySelector('.ticker h1').innerText
    const inputeditticker = document.getElementById('editticker')
    inputeditticker.value = ticker

    const inputIdCard = document.getElementById('idcard')
    inputIdCard.value = ticker

    const valor= carteira.querySelector('.meio p span').innerText
    console.log(valor)
    const inputeditvalor = document.getElementById('editvalor')
    console.log(inputeditvalor)
    inputeditvalor.value = valor

    const bolsa= carteira.querySelector('.ticker h2').innerText
    const selecteditbolsa = document.getElementById('editbolsa')
    selecteditbolsa.value = bolsa

    const ativos = carteira.querySelector('.espacador p').innerText
    const inputEditAtivos = document.getElementById('editativos')
    inputEditAtivos.value = ativos

   
}

function editticker(event) {
    event.preventDefault()
    console.log("Teste")

    const idcard = event.target.idcard.value
    const ticker = event.target.editticker.value
    const bolsa = event.target.editbolsa.value
    const valor = event.target.editvalor.value
    const ativos = event.target.editativos.value
   
    const total = valor * ativos

    const carteiraEdit = document.getElementById(idcard)
    console.log(carteiraEdit)

    const h1ticker = carteiraEdit.querySelector('.ticker h1')
    h1ticker.innerText = ticker
    
    closeModal('#edit')

}