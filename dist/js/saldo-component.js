let saldo = 3000;
const dataDinamica = document.querySelector(".block-saldo time");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
if (dataDinamica != null) {
    const dataAcesso = new Date();
    dataDinamica.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
