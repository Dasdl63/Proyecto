"use strict"


var precio_base = 2000


var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%
var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%
var hijos_recargo = 0.2 // 20%
var cantidad_hijos
var recargo_final=0

var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
if(edad<18)
  {
    alert ("Su edad no califica para esta cotización")
  }
else
  
var casado = prompt("¿Está casado actualmente?")
var edad_conyuge
if("SI"== casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
else

var edad_numero = parseInt(edad)

var edad_conyuge_numero = 0
if("SI"== casado.toUpperCase())
{
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?")
if ("SI"== hijos.toUpperCase())
  {
    cantidad_hijos= prompt("Cuantos hijos o hijas tienes?")
  }

 
if(edad >=18 && edad <=24)
{ 
  recargo_final= recargo_final +(precio_base*edad_18)
  alert("El recargo extra de su persona es: "+ precio_base*edad_18)
}
else if (edad >=25 && edad <=49)
  {
    recargo_final= recargo_final +(precio_base*edad_25)
    alert("El recargo extra de su persona es: "+precio_base*edad_25);
  }
else if (edad >50)
  {
    recargo_final= recargo_final +(precio_base*edad_50)
    alert("El recargo extra de su persona es: "+precio_base*edad_50);
  }
  
if(edad_conyuge >=18 && edad_conyuge <=24)
{ 
  recargo_final= recargo_final +(precio_base*edad_18)
  alert ("El recargo extra de su conyuge es: "+precio_base*edad_18); 
}
else if(edad_conyuge >=25 && edad_conyuge <=49)
  {
    recargo_final=recargo_final+(precio_base*edad_25)
    alert("El recargo extra de su conyuge es: "+precio_base*edad_25);
  }
if(edad_conyuge >50)
  {
    recargo_final=recargo_final+(precio_base*edad_50)
    alert("El recargo extra de su conyuge es: "+precio_base*edad_50);
  }
  
if(cantidad_hijos)
{
  recargo_final= recargo_final + (cantidad_hijos*precio_base*hijos_recargo)
  alert ("El recargo extra por su cantidad de hijos es: "+cantidad_hijos*precio_base*hijos_recargo);
}
recargo_final= recargo_final+precio_base
alert ("El recargo final es de: "+recargo_final)
