'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
var factoresResultantes = [1] //este es el arreglo donde se va a pushear factor por factor para cumplir con la consigna 

var divisor = 2 // esta es la var que se va a usar para editar el primo cuando el numero no sea divisible por 2

while(num !== 1){ // mientras que el argumento (num) no sea igual a 1 entra
  if(num % divisor === 0){ // si es divisible por el divisor y el restante es 0 entra
    factoresResultantes.push(divisor) // pushea los divisores que se usen dentro del array
    num = num / divisor // indica que el proximo numero a dividir sea el resultado de la division anterior, sino es siempre 180
  }else{
  divisor++ // si no se cumple la condicion para entrar al if significa que el num no es div por 2 en este caso
  }
} 
return factoresResultantes // retorna el arreglo con los divisores adentro.. sin el return no hay resultado y no se completa la ejecucion
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: [2, 9, 10, 8, 5, 7]

var flag = true // este es true siempre y cuando haya un cambio 

while(flag){ // mientras que flag sea true ingresa a ejecutar aca 
flag = false // se utiliza para evitar un bucle infinito 
for(let i = 0; i < array.length - 1; i++){ //se ecorre el array pero sin llegar al final porque cuando el pen ultimo se compare con el ultimo ya esta 
if(array[i] > array[i + 1]){ 
var aux = array[i] // se usa para guardar el valor el array i=0 en una var y que no se pise con el i +1
array[i] = array[i + 1] // una vez guardado en una var el valor que estaba en i +1 pasa a i=0 y asi en el paso sig se invierten en posicion
array[i + 1] = aux //el valor guardado en aux pasa a la posicion de i+1 porque ese valor es mayor a lo que habia anteriormente en i+1
flag = true // porque lo ibamos a usar para eso, pseudorecursion en caso que haya un cambio
}
}
}
return array //una vez que no haya mas cambios y el flag de false el while se va a dejar de recorrer y retorna el arreglo de menor a mayor
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código: [5, 1, 8, 10, 7]
for (let i = 1; i < array.length; i++) { // se empieza desde i=1 porque para iterar y comparar se necesita otro index, lo cual es J 
  var j = i - 1 // se le asigna la posicion a J que seria una pos menos que i
  var aux = array[i] // se usa la var aux para el numero que al ser comparado y ser menor se saca temporalmente para luego ser reubicado
  while(j >= 0 && array[j] > aux){ //si j esta en -1 significa que no entra al while
    array[j + 1] = array[j] // en este caso como j es mayor al valor en aux hacer que la pos j+1 tenga el mismo valor que tiene la pos j 
    j-- // hace que el indice j se mueva un casillero hacia atras
  }
  array[j + 1] = aux //en este caso j estaba en la pos 0 y con el j-- termino en la pos -1 por lo tanto aux va a parar a la pos 0
}
return array // retorna el array ordenado
}
// aux = 1
// 5----1----8---10---7
// j
//      i


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for (let i = 0; i < array.length - 1; i++){
  var min = i // es referencia para marcar por sistema donde arranca el cursor min
  for (let j = i + 1; j < array.length; j++){
    if(array[j] < array[min])
    min = j
  }
  var aux = array[i] // aca guardamos el valor de [i en un array para no pisarlo 
  array[i] = array[min] //aca se le asigna a la pos [i] el valor mas chico que encontro min y lo pisa
  array[min] = aux //aca se le asigna el 5 a donde estaba el 1 para hacer el intercambio 
}
return array
}

//min = 1
//5----2----4----1----8
//i
//               j 
//              min

//  var aux = 5

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
