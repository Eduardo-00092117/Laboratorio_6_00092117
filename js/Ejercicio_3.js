function tiposDatos(arreglo){
    var aux = [];
    var aux2 = [];
    for(let i of arreglo){
        if(aux.includes(typeof i)){
            aux2[aux.indexOf(typeof i)] += 1;
        } else{
            aux.push(typeof i);
            aux2.push(1);
        }
    }
    for(let x = 0; x < aux.length; x++){
        console.log(aux[x] +": "+aux2[x]);
    }
}

tiposDatos([1, -2, 3, 'uhiwuh', false, [1, 2, 3]]);