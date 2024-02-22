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


}
const contadores = document.querySelectorAll(".contador");
const tempoobjetivo1 = new date("2024-10-05T00:00:00");
let tempoatual = new date()
contadores [0].textcontent = tempoobjetivo1-tempoatual
    

    