 window.SpeechRecognition = window.SpeechRecognitionAlternative || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang= 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    console.log(e.results[0][0].transcript)
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}
 function exibeChuteNaTela(){
    elementoChute.innerHTML=`
    <div> Você Disse </div>
    <span class="box">${chute}</span>
    `
 } 