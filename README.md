# For each

Los bucles ***for y for-each*** en Java son dos maneras de realizar bucles, su nombre es similar, su estructura diferente.

```js
let text = "";
const fruits = ["Manzana", "Naranja", "Fresa"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}public class BucleFor{
	public
}
```



------

# Map

Ahora imagina que tienes que multiplicar cada uno de los elementos del arreglo por 3. 

```js
let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

document.getElementById("modifiedArr").innerHTML= modifiedArr; 
// [9, 12, 15, 18]
```

------

# Filter

**filter**() El método **filter**() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

```js
const ages = [32, 33, 16, 40];

document.getElementById("demo").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
```

------

# Iteracion

El protocolo **iterador** define una forma estándar que permite producir una secuencia de valores (sean estos finitos o infinitos).

```js
for(let value of ["a", "b", "c"]){
    document.getElementById("value").innerHTML= value;
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen(){
  yield* ["a", "b", "c"];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"]);
a // "a"
```

------

