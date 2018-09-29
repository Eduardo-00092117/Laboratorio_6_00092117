function validacion(mat){
    let bandera = true;
    for(let x of mat){
        if(x.length != mat.length){
            bandera = false;
        }
    }
    return bandera;
}

function sumarMatriz(mat1, mat2){
    if(validacion(mat1) && validacion(mat2) && mat1.length == mat2.length){
        var matrizSuma = new Array(mat1.length);
        for(let i = 0; i < 3; i++){
            matrizSuma[i] = new Array(mat1.length);
        }
        for(let x = 0;x<mat1.length; x++){
            for(let y = 0; y < mat1.length; y++){
                matrizSuma[x][y] = mat1[x][y]+mat2[x][y];
            }
        }
        let concatenar = "";
        for(let x = 0; x < mat1.length; x++){
            for(let y =0; y < mat1.length; y++){
                concatenar += matrizSuma[x][y] + " ";
            }
            console.log(concatenar);
            concatenar = "";
        }
    }else{
        console.log('No se puede realizar la suma');
    }
}

sumarMatriz([[1, 2, 3], [3, 1, 4], [9, 3, 1]], [[1, 2, 3], [3, 1, 4], [9, 3, 1]]);