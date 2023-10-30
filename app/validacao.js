function verificaSeOChutePossuiUmValorValido(chute)
    const numero = +chute
 
    if (chuteForInválido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if(numeroForMaiorQueOValorPermitido(numero)) {
        elementoChute.innerHTML +=`
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }
    if(numero === numeroSecreto){
        document.body.innerHTML =`
        <h2>Vocẽ Acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>`
    }
    else if (numero > numeroSecreto){
    elemento.innerHTML +=`
        <div>O número secreto é menor <i class="fa-solid fa-donw-long"></i><</div>`
    }
    else {
        elemento.innerHTML +=`
        <div>O número secreto é maior <i class="fa-solid fa-donw-long"></i><</div>`
    }

    function chuteForInválido(numero) {
        return Number.isNaN(numero)
    }
    function numeroForMaiorQueOValorPermitidonumero(numero){
        return numero > maiorValor || numero < menorValor
    }