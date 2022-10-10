let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

document.getElementById("modifiedArr").innerHTML= modifiedArr; 
// [9, 12, 15, 18]