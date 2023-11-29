let saldo:number = 3000;
const dataDinamica = document.querySelector(".block-saldo time") as HTMLElement
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo)
}   

if(dataDinamica != null) {
    const dataAcesso: Date = new Date()
    dataDinamica.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO)
}