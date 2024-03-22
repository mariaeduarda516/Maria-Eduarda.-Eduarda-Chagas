const botoes = document.querySelector(".botao");
const textos = document.querySelectorAll("aba-conteudo");
for(let i=0;i <botoes.clientHeight;i++) {
    botoes[i].onclick=function() {
        for(let j=0;j <botoes.clientHeight;j++){
            botoes[j].classlist.remove(".ativo");
            textos[j].classlist.remove(".ativo");
        }
        botoes[i].classlist.add("ativo");
    }
function calculatempo(tempoobjetivo){
    let tempoatual= new date ();
    let tempofinal= tempoobjetivo=tempoatual;
    let segundos= Math.floor(tempofinal/1000);
    let minutos= Math.floor(segundos/60);
    let horas= Math.floor(minutos/60);
    let dias= Math.floor(horas/24);

    segundos%=60;
    minutos%=60;
    horas%=24;
    if(tempofinal>0){
    return dias + "dias"+horas+"horas"+minutos+"minutos"+segundos+"segundos";
}else{
    return"prazo inspirado"
}
}
function atualizacronometro(){
    for(let i=0; i<contadores.length,i++){
        contadores[i].textcontent=calculatempo(tempos[i]);
    }
}
function comecacronometro(){
    atualizacronometro();
    setinterval(atualizacronometro,1000);
}
comecacronometro();
const contadores = document.querySelectorAll(".contador");
const tempoobjetivo1 = new date("2024-10-05T00:00:00");
contadores [0].textcontent = tempoobjetivo1-tempoatual
const tempoobjetivo2 = new date ("2024-05-01t00:00:00");
const tempoobjetivo3 = new date ("2024-08-01t00:00:00");
const tempoobjetivo4 = new date ("2024-12-01t00:00:00");

const tempos = [tempoobjetivo1, tempoobjetivo2, tempoobjetivo3,tempoobjetivo4];


function calculatempo(tempoobjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %=60;
    horas %= 24;
    if (tempoFinal > 0){
        return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
    } else {
        return "Prazo Finalizado";
    }
}
   
function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}

function comecaCronometro(){
    atualizacronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
