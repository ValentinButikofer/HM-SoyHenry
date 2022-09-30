'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
if (n <= 0 ) return "not a natural number"
else if(n === 1) return 1
return n * nFactorial(n - 1)
}



function nFibonacci(n) {
  if(n === 0 || n === 1) return n // si n esta en posicion 0 o 1 en la secuencia de fibbo devuelve lo que vale n porque no hay fibbo de 0 o 1 
  return nFibonacci (n - 1) + nFibonacci (n - 2) // se aplica recursion llamando a la funcion de nuevo con argumento de lo que valia n -1 y n -2 porque asi funciona fibbo
  }


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {

  this.arr = [] //se crea para que los valores agregados se vayan guardando en orden

  Queue.prototype.enqueue = function(valor){// se crea una funcion para la contructora Queue
  return this.arr.push(valor) // mete al arreglo el valor que recibio, y pone los siguientes en forma creciente
  }

  Queue.prototype.dequeue = function(){
  return this.arr.shift() // quita de forma decreciente los valores en el array
  }

  Queue.prototype.size = function(){
  return this.arr.length// devuelve el valor dentro del array
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
