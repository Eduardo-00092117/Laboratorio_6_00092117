function encriptacion(cadena){
    let encript = ['m', 'u', 'r', 'c', 'i', 'e', 'l', 'a', 'g', 'o'];
    let nuevaCad = "";
    let bandera = true;
    for(let i = 0; i < cadena.length; i++){
        for(let x = 0; x < encript.length; x++){
            if(encript[x] == cadena[i].toLowerCase()){
                nuevaCad = nuevaCad + x;
                bandera = false;
                break;
            }
        }
        if(bandera == true){
            nuevaCad = nuevaCad + cadena[i];
        }
        bandera = true;
    }
    return nuevaCad;
}

console.log("Encriptacion: " + encriptacion("Silencio"));