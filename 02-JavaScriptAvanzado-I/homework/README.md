
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10 observa a la def en la linea anterior
  console.log(a); // 8 la var-a en CG, se toma la def en var c 
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8 lo mismo, se toma la def en var c 
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9 se toma la def en c - out
}
c(8,9,10);
console.log(b); // 10 def de b en CG
console.log(x); // 1 def de x en CG
```

```javascript
console.log(bar); //undefined hoisteado si definido no.
console.log(baz); //error no tiene el "var" = no existe en CG
foo(); // se rompe el codigo por  baz 
       //Hola!JS hoistea la func entera ya definida(solo si eliminamos el baz)
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2; 
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // "Franco" se pisa la def de la var
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony devuelve la linea de codigo de arriba
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Franco hay un nuevo contexto
   }
})();
console.log(instructor); // Tony sigue analizandose el CG
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //The Flash porque es un nuevo contexto
    console.log(pm); // Reverse Flash idem
}
console.log(instructor); // The Flash porque esta redefinido por el var
console.log(pm); // Franco porque el let vive solo dentro de llaves y no contexto
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  // 3
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 //"$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity
{}[0] // [0]
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5 
5 || 0 // 5
0 || 5 // 5 
[3]+[3]-[10] // "3" + "3" --- "33" / "33" - [10] ---- 23 
3>2>1 // 3 > 2 ----- true / true--- 1 / 1 > 1 ---- false
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undef porque al hoistearse queda en el CG
   console.log(foo()); // 2 porque se ejecuta la funcion completa 

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); // undef porque no hay una func test en el CG
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack; // friskies si fuese llamada con true
    }
    return snack;
}

getFood(false); // undef porque el var snack se hoistea al renglon de abajo de la func y al if no entra
                // si el var no existiria dentro de la func retornaria meow mix por estar en el CG
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //aurelio de rosa porque el this hace ref al objeto "prop"

var test = obj.prop.getFullname;

console.log(test()); //Juan perez porque la var test esta en CG
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // 1, 4, 3, 2 porque el timer en miliseg deriva la ejecucion de la func al webapi
```
 