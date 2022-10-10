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

