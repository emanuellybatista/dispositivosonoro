//declaração/criação da função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}


//criando a referências constante listaDeTeclas e buscando a tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
                                      

let contador = 0;
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSomPom; 
    contador = contador + 1;
    console.log(contador);
}