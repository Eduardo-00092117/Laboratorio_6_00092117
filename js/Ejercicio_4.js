function suma2(arreglo){
    var sum;
    var cont = arreglo.length-1;
    for(let i = 0; i < arreglo.length/2; i++){
        sum = arreglo[i] + arreglo[cont];
        cont -= 1;
        console.log("Suma " + (i+1) + ": " + sum);
    }
}

suma2([5, 4, 3, 4, 5]);