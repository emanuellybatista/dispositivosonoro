//declaracao.criacao da funcao tocaSomPom
function tocaSomPom(){
    document.querySelector("som_tecla_pom").play();
}


//criando areferências constante listaDeTeclas e buscando a tecla
const listaDeTeclas=document.querySelectorAll("tecla");
//chamando a constante lista De teclas e o indice "0" do SomPom
listaDeTeclas[0] .onclick = tocaSomPom;                                                                                                                