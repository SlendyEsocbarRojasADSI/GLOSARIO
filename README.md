# FOR EACH

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

