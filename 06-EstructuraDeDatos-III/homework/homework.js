"use strict";

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) { // en el test pide que la funcion devuelva un valor 
this.value = value // iba a hacer referencia al valor invocado en la clase 
this.right = null // referencia al hijo de la izq y hijo de la derecha
this.left = null // la busqueda en el arbol comenzaba en valor null porque aun no habia nodos 
}

BinarySearchTree.prototype.size = function(){ //se crean para esta clase estas 5 propiedades prototipadas
if(!this.left && !this.right){
  return 1
}
if(!this.left){
  return 1 + this.right.size()
}
if(!this.right){ 
  return 1 + this.left.size()
}
return 1 + this.left.size() + this.right.size()

//      (20)           arranca aca, en este caso, tiene this.right y this.left entonces no entra a los 3 if
//      /  \           entonces suma 1 y baja a ver el this.left.. como no hay nada despues de ese hijo retorna 1 y va a preg al this.right 
//    (15) (25)        hace lo mismo y como esta vacio retorna 1 y luego corta con el primer if   
//   total 3 nodos
}

BinarySearchTree.prototype.insert = function(value){
if(value > this.value){ //compara el valor ingresado con el valor del nodo padre, si es mayor entra 
  if(this.right === null){ 
    this.right = new BinarySearchTree(value) //si el nodo de la derecha no existe agrega nuestro nodo 
  } else {
    this.right.insert(value) // si hay algun nodo hijo sigue iterando en busqueda de un bucket vacio 
  }
} else { // aca es donde entra si cuando compara el value con el this.value el resultado es menor, va hacia la izq
  if(this.left === null){
    this.left = new BinarySearchTree(value)
  } else {
    this.left.insert(value) // ESTE PASO ES LA RECURSION
  }
}
}

BinarySearchTree.prototype.contains = function(value){
if(value === this.value) return true
if(value > this.value){
  if(this.right === null) return false
  return this.right.contains(value)
}else{
//     buscando a contains(25) devolveria que el ultimo valor del hijo.right es ese y al hacer la recursion daria true
//      (20)          como antes, si value coincide al primer intento devuelve true 
//      /  \          luego compara si es mayor o menor para decidir si derecha o izquierda
//    (15) (25)        luego pregunta si hay algo a su derecha, porque si no hay nada retorna false, qu epor ahi no se va a encontrar digamos   
//                     si no es null el nodo de la derecha sigue comparando aver si lo encuentra y se hace la recursion si no es ese.
if(this.left === null) return false
return this.left.contains(value)
}
}

BinarySearchTree.prototype.depthFirstForEach = function(cb , order){
if(order === "in-order" || !order){ // si in order se cumple o si no hay ningun orden. por default cuando no hay un orden establecido se ejecuta con in order
  this.left && this.left.depthFirstForEach(cb, order) //pregunta si el nodo hijo a la izq tiene otro a su izq
  cb(this.value) //aca lo que le dice es que como no se cumplio el && se debe ejecutar el cb con ese valor 
  this.right && this.right.depthFirstForEach(cb,order)
// in order dicta que se ejecute el cb primero en la rama izq, de haber, luego en el padre y luego en la derecha 
//      (20) comienza a preg si tiene izq, como tiene, va a la izq y hace lo mismo y como no hay otro mas alla del primer hijo no entra y hace el cb
//      /  \    se ejecuta el cb con (15) luego el cb con (20) y luego tiene que preguntar por su lado derecho        
//    (15) (25) va a (25) pregunta si no hay otro a su derecha, como no hay ejecuta el cb con (25) y se termina ...
// el && hace que cuando el sistema llega a la posicion vuelva a llamar a la function para saber si hay mas hacia ese lado. cuando ecuentra un limite corta
}else if(order === "pre-order"){
  cb(this.value)
  this.left && this.left.depthFirstForEach(cb, order)
  this.right && this.right.depthFirstForEach(cb,order)
}else{
  if(order === "post-order")
  this.left && this.left.depthFirstForEach(cb, order)
  this.right && this.right.depthFirstForEach(cb,order)
  cb(this.value)
}
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr){
  if(!arr){ // hay que poner un if sino cada vez que comience la recursion se va a crear un nuevo arr y los resultados tienen que estar todos juntos dentro de un main arr
  var arr = [] // se establece un array vacio para guardar los valores, porque entre hermanos no hay conexion
  }
  // por lo tanto se debe ejecutar el cb casi paralelamente en el primero izq y primero der y luego guardarlos 
  cb(this.value) // lo primero que se llama con el cb el el value

  this.left && arr.push(this.left) //se llama al cb de la izq y se pushea el resultado dentro del array
  this.right && arr.push(this.right)// idem 

  arr.length && arr.shift().breadthFirstForEach(cb, arr) //para dividir los hijos de el lado izq del derecho se aplica este metodo de arr
//si el arr tiene la prop length, significa que ya se capturo algo y se debe hacer shift del primer termino y aplicar recursion sobre ese primer termino 
// por eso el arr.shift.bread tiene ----> (cb, arr) 
// esto seria arr final con los ultimos hijos del arbol dentro de el y haciendo el cb de ellos. al no tener mas length se corta la recursion
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
