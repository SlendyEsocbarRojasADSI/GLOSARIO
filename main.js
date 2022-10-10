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
