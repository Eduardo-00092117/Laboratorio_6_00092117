function sumaProm(arreglo){
    let sum = 0;
    for(let x of arreglo){
        sum += x;
    }
    return sum;
}

console.log(sumaProm([1, 2]));