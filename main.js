//declaracao.criacao da funcao tocaSomPom
function tocaSomPom(){
    document.querySelector("som_tecla_pom").play();
}


//criando areferências constante listaDeTeclas e buscando a tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
                                      

let contador = 0;
while(contador < 9){
    listaDeTeclas[contador].onclick = tocaSomPom; 
    contador = contador + 1;
    console.log(contador);
}