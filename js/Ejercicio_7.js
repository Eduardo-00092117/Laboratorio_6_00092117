function fisica(arreglo){
    let prom = 0;
    for(let i of arreglo){
        prom += i;
    }

    prom = prom/arreglo.length;

    let sum = 0;
    let incert;

    for(let x of arreglo){
        sum += (x - prom)**2;
    }

    incert = Math.sqrt((1/(arreglo.length-1)) * sum);

    console.log("La incerteza es " + prom + " +- " + incert);
}

fisica([14.4, 14.5, 14.4, 14.3, 14.6, 14.5]);
