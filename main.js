//declaração/criação da função tocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}


//criando a referências constante listaDeTeclas e buscando a tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
                                      

let contador = 0;
while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#Som_" + efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    
    contador = contador + 1;
    console.log(contador);
}