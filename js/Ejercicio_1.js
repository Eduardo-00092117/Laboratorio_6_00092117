function ocurrencia(arreglo, num){
    let ocur = 0;
    for(let x = 0; x < arreglo.length; x++){
        if(arreglo[x] == num){
            ocur += 1;
        }
    }
    return ocur;
}

console.log(ocurrencia([1, 2, 3, 4, 2, 1, 1], 1));