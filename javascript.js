var dificultad = 1;
var velocidad = 2;
var cantidad = 10;
var resultado = 0;
var numeroAleatorio = 0;
var operacion = 1
var operacionString ="";
function changeToEasy(){
   dificultad=1
   document.getElementById("boton-facil").style.backgroundColor="#00FAFF";
   document.getElementById("boton-medio").style.backgroundColor="#7CC4B8";
   document.getElementById("boton-dificil").style.backgroundColor="#7CC4B8";
}
function changeToMedium(){
   dificultad = 2
   document.getElementById("boton-facil").style.backgroundColor="#7CC4B8";
   document.getElementById("boton-medio").style.backgroundColor="#00FAFF";
   document.getElementById("boton-dificil").style.backgroundColor="#7CC4B8";
}
function changeToDificult(){
   dificultad = 3
   document.getElementById("boton-facil").style.backgroundColor="#7CC4B8";
   document.getElementById("boton-medio").style.backgroundColor="#7CC4B8";
   document.getElementById("boton-dificil").style.backgroundColor="#00FAFF";
}

function empezar(){
   document.getElementById("grid-container").style.display = "none";
   document.getElementById("printPantalla").style.display = "block";
   document.getElementById("boton-volver").style.display = "block";
   generadorAritmetico();
}

addEventListener('load',inicio,false);
function inicio()
{
   document.getElementById("barra-velocidad").addEventListener('change',cambioBarra,false);
   document.getElementById("barra-cantidad").addEventListener('change',cambioBarra,false);
}
function cambioBarra()
{    
   document.getElementById("etiqueta1").innerHTML=document.getElementById("barra-velocidad").value;
   document.getElementById("etiqueta2").innerHTML=document.getElementById("barra-cantidad").value;
   velocidad = document.getElementById("barra-velocidad").value;
   cantidad = document.getElementById("barra-cantidad").value;
}
function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms*1000));
 }

 //colocar await sleep(velocidad);
 //Math.floor(Math.random() * (max - min) + min)
async function generadorAritmetico() {
   if(dificultad==1 || dificultad==2){
      resultado=Math.floor(Math.random() * (10 - 1) + 1);
   }
   else{
      resultado=Math.floor(Math.random() * (100 - 10) + 10);
   }
   document.getElementById("printPantalla").innerHTML=resultado;
   //1 suma    2 resta  3 multiplicacion  4 division
   for(let i=1;i<cantidad;i++){
      await sleep(velocidad);
      if (dificultad==1) {
         operacion = Math.floor(Math.random() * (3 - 1) + 1);
         numeroAleatorio=Math.floor(Math.random() * (10 - 1) + 1);
      }
      if (dificultad==2) {
         operacion = Math.floor(Math.random() * (3 - 1) + 1);
         numeroAleatorio=Math.floor(Math.random() * (100 - 10) + 10);
      }
      if (dificultad==3) {
         operacion = Math.floor(Math.random() * (5 - 1) + 1);
         if (operacion == 1 || operacion == 2) {
            numeroAleatorio=Math.floor(Math.random() * (100 - 10) + 10);
         }
         if (operacion == 3 ) {
            numeroAleatorio=Math.floor(Math.random() * (10 - 2) + 2);
         }
         if (operacion == 4) {
            for (let numeroDividira = 10; numeroDividira > 0; numeroDividira--) {
               if (resultado%numeroDividira == 0) {
                  numeroAleatorio = numeroDividira;
                  break;
               }
            }
         }
      }
      if (operacion==1) {
         operacionString="+ ";
         resultado += numeroAleatorio;
      }
      if (operacion==2) {
         operacionString="- ";
         resultado -= numeroAleatorio;
      }
      if (operacion==3) {
         operacionString="x ";
         resultado *= numeroAleatorio;
      }
      if (operacion==4) {
         operacionString="/ ";
         resultado /= numeroAleatorio;
      }
      document.getElementById("printPantalla").innerHTML=operacionString+numeroAleatorio;
   }
   await sleep(4);
   document.getElementById("printPantalla").innerHTML = "Resultado"+"<br>"+resultado;
   await sleep(5);
   generadorAritmetico();
}