function adivinar(num){
    let arreglo = [];
    let bandera = true;
    for(let i = 0; i < 20; i++){
        arreglo.push(Math.round(Math.random() * 100));
    }

    for(let x of arreglo){
        if(x == num){
            console.log('Usted Ganó!!!!');
            bandera = false;
            break;
        }
    }

    if(bandera == true){
        console.log('Usted perdio!!')
    }
}

adivinar(prompt('Ingrese el numero a adivinar!!'));