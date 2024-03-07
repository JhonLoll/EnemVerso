// Função para abrir a navbar inserindo um style com 150px de largura e 
function openNav() {
    document.getElementById("left-navbar").style.width = "150px";
    document.getElementById("main").style.marginLeft = "100px";
  }
  
//função para fechar a navbar zerando a largura da navbar e voltando o main para 0px da esquerda 
function closeNav() {
    document.getElementById("left-navbar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
// =========================================================================
// =========================================================================
import("https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js");
// importScripts("https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js");
function Ajax(id){
  $(document).ready(function(){
  switch (id) {
    // Caso o clique seja no icone de livro, ou seja, de materias
    case 'icon-learn':
      $(document).ready(function(){
          $.ajax({
            url: "materias.html",
            type: "GET",
            success: function(data){
              $("main").html(data)
            }
          })
      })
      break;
    case 'icon-home':
      $(document).ready(function(){
        $.ajax({
          url: "main.html",
          type: "GET",
          success: function(data){
            $("main").html(data)
          }
        })
      })
      break;
  }
    
  })
}