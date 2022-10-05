"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList(){
  this.length = 0
  this.head = null
}

function Node(value){
  this.value = value
  this.next = null
}

LinkedList.prototype.add = function(value){
    var node1 = new Node(value)
    var current = this.head // asigna el valor de la variable al head para usarlo como referencia 
    if (!current) { // el head hace referencia al primer slot y el current a donde estamos parados
      this.head = node1 // si no hay ningun nodo agrega nuestro nuevo nodo a la primer posicion / head
      this.length++
      return // hay que ponerlo para que haya un corte
    }
    while (current.next !== null){
    current = current.next // este while es el que hace que el cursor avance
    }    
    current.next = node1 // cuando la condicion del while no se cumpla, osea que el sig slot esta vacio, entonces indicamos que nuestro nuevo nodo se ubique ahi
}

LinkedList.prototype.remove = function(){
var current = this.head
if(!current) return null
if(!current.next){
  this.head = null //quita el primer elemento 
  return current.value //retorna el valor que tenia el elemento que quitaste                        
}                             // 1 -----2 -----3----- 4------ 5------ 6                                                                       
while(current.next.next){     //                      |
  current = current.next
}
var aux = current.next //estas lineas de codigo albergan el valor del ultimo slot en una variable para ser devuelto
current.next = null // aca se elimina y el current.next desaparece
return aux.value
}

LinkedList.prototype.search = function(valor){
var current = this.head 
if(!current) return null
while(current){ //mientras que haya algun nodo existente entra a examinar esto
  if(typeof valor === "function") { // para que el metodo search reconozca tambien functions y strings 
    if(valor(current.value)){ // si el valor ingresado para la busqueda coincide con el valor que se esta examinando al momento
      return current.value // retorna ese valor y corta la lectura
    }
  }
  if (valor === current.value) return current.value //aca dice que si coincide deberia devolver el valor porque se encontro
  current = current.next // de lo contrario seguir iterando 
}
return null //si sale del while y del if sin ningun resultado true en la comparacion debe devolver que no se encontro
}


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable(){
  this.numBuckets = 35
  this.buckets = []
  for(let i = 0; i < 35; i++){
    this.buckets.push({})
  }
}
HashTable.prototype.set = function(key, value){ //asignado en la HM que debia estar con clave valor 
if(typeof key !== "string") throw new TypeError ("Keys must be strings") // asignado en la HM que el set debe retornar solo strings
var index = this.hash(key)

this.buckets[index][key] = value
}
HashTable.prototype.get = function(key){
  var index = this.hash(key)
  return this.buckets[index][key]
}
HashTable.prototype.hasKey = function(key){
 if(typeof key !== "string") throw new TypeError ("Keys must be strings")
 var index = this.hash(key)
 return this.buckets[index].hasOwnProperty(key)
}
HashTable.prototype.hash = function(v){
  var res = 0
  for (let i = 0; i < v.length; i++){
  res = res + v.charCodeAt(i)
  }
  return res % this.numBuckets // se usa para retornar el resto mientras que este dentro de numBuckets que es = 35
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
