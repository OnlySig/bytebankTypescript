const formulario = document.querySelector(".block-nova-transacao form")
const sectionTransacao = document.querySelector("#tipoTransacao")
const inputValor = document.querySelector("#valor")
const saldo = document.querySelector(".valorNum")
const inputData = document.querySelector("#data")

formulario.addEventListener("submit", e => {
    e.preventDefault()
    if(!formulario.checkValidity()){
        alert("Por favor, preencha todos os campos da transação!")
        return
    }
    let tipoTransacao = sectionTransacao.value
    let valor = Number(inputValor.value)
    let data = inputData.value
    let saldoValor = Number(saldo.textContent)

    if(tipoTransacao === "Depósito") {
        saldoValor += valor
    } else if(tipoTransacao === "Transferência" || tipoTransacao === "Pagamento de Boleto") {
        saldoValor -= valor
    } else {
        alert("[ERROR]")
    }
    saldo.innerHTML = saldoValor
    
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }
    formulario.reset()
})