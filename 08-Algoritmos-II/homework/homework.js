'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if (array.length <= 1) return array //dice que si el array esta vacio o tiene 1 elemento devuelva lo que hay porque no hay nada mas que comparar
var pivot = array[0] // la var pivot es donde se va a almacenar el valor aleatorio que se toma como ref para empezar a dividir 
//IMPORTANTE. LA DER Y IZQ SE DEFINEN POR VALOR Y NO POR POSICION RESPECTO AL PIVOT, LUEGO EN LA RECURSION SE ORDENAN 
var der = [] // aca se va a guardar lo que esta a la der del pivot 
var izq = [] // aca lo que esta  a la izq del pivot 

for(let i = 1; i < array.length; i++){ // se comienza desde 1 porque sino entra en accion el if anterior 
  if(array[i] < pivot){ // solo si el array en pos [i] es menor pushea a la izq, si es = o > pushea a la der
    izq.push(array[i]) // aca selecciona el elemento del arr que va a ir a la izq
  }else{
    der.push(array[i]) // y si no es mas grande que el pivot deberia almacenarse en la var izq 
  }
}
return quickSort(izq).concat(pivot).concat(quickSort(der)) // llama a la recursion y cuando sucede el caso de corte 
// retorna el arr.izq ordenado + pivot + arr.der ordenado 
}

function merge(arr1, arr2){
  var i = 0 // se definen i y j que van a ser los iteradores
  var j = 0 // i itera en arr1 y j itera en arr2
  var result = [] // aca se van a ir guardando los push cuando el while llegue a sus conclusiones

  while(i < arr1.length && j < arr2.length){ // mientras que ninguno de los dos punteros supere el largo del arreglo que estan recorriendo
     if(arr1[i] < arr2[j]){ // cuando uno de los punteros supera el largo ya se analizo todo y se devuelve el resultado mas el remanente del otro arr
      result.push(arr1[i])
      i++                                      //        arr1                     arr2
     }else{                                    // [2, 4 , 10, 7, 1]         [90, 88, 8, 17, 30]
      result.push(arr2[j])                     //                i           j
      j++                                      // indice i recorre todo // indice j aun no comenzo
     }        //puede pasar este ejemplo y por eso se contempla el return tan sofisticado 
  }                                 //arr1 concatena un array vacio y arr 2 concatena todo su contenido
  return result.concat(arr1.slice(i)).concat(arr2.slice(j)) // retorna el resultado concatenado con el array sliced desde donde quedo el iterador i
  //mas la concatenacion del arr2 sliced de donde quedo el iterador j / porque al result se le iban pusheando los valores menores y puede ser que alguno
  // de los dos iteradores no termino de recorrer su array. enotnces para estar seguros que todos los terminos estan incluidos en el result se hace esto.
  // IMPORTANTE. EL MERGESORT YA LOS ORDENA EN FORMA CRECIENTE ANTES DE QUE ESTE RETURN PUEDA LLEGAR A EJECUTARSE
}

//el metodo merge lo que hace es ordenar de menor a mayor los elementos dentro de los array cuando es llamado
// el metodo mergeSort los divide en dos y luego llama al metodo merge para que ordene las dos mitades

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if (array.length === 1) return array  //caso de corte, cuando haya un solo elemento dentro del array recibido 
    //por parametro cortar y devolver el array porque significa que ya esta rodenado 
var medio = Math.floor(array.length / 2) // se divide el array en 2 y se previene el .5 con math.floor
var izq = array.slice(0 , medio) //el izq toma desde la primera posicion hasta el medio 
var der = array.slice(medio) // el der toma del medio todo el resto 

return merge(mergeSort(izq), mergeSort(der))// esto asegura que los arr, tanto izq como der esten ordenados
// al momento que el metodo merge los recibe, deben estar de forma creciente porque sino puede haber 
}
// 
//   [90, 88, 8, 17]
// merge de mergeSort ==== slice ==== [90, 88] / [8, 17]
// merge de mergeSort ==== slice ==== [90] / [88]
// retorna [88, 90] ya ordenado y luego procede a hacer lo mismo con [8, 17]
// retorna este arr al result junto con el arr1. estos dos son el resultado del metodo merge 
// ya que el merge, usando dos iteradores, recorre los dos arreglos y selecciona el elemnto mas chico 
//para pushearlo dentro del result que luego se va a pasar como producto final del metodo 

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
