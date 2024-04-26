const botoes = document.querySelector(".botao");
const textos = document.querySelectorAll("aba-conteudo");

for(let i=0;i <botoes.length; i++) {
    botoes[i].onclick = function() {

        for(let j = 0; j <botoes.length; j++){
            botoes[j].classlist.remove(".ativo");
            textos[j].classlist.remove(".ativo");
        }
        botoes[i].classlist.add("ativo");
        textos[i].classList.add("ativo");
    }
}


const contadores = document.querySelectorAll(".contador");
const tempoobjetivo1 = new date("2023-10-05T00:00:00");
const tempoobjetivo2 = new date ("2023-12-05t00:00:00");
const tempoobjetivo3 = new date ("2023-12-30t00:00:00");
const tempoobjetivo4 = new date ("2023-02-01t00:00:00");

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
        return [0,0,0,0];
    }
}
   
function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculatempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculatempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculatempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculatempo(tempos[i])[3];
    }
}

function comecaCronometro(){
    atualizacronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro(); 

