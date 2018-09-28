function tipo(arreglo, tipo){
    var array = [];
    for(let x of arreglo){
        if(typeof x == tipo){
            array.push(x);
        }
    }
    return array;
}

console.log("El arreglo es " + tipo([1, 2, 3, 4, 'hoiio', 'qjwheui', false, 1, 2, true], "string"));