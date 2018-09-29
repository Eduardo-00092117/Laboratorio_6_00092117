var datosT = [];

function datosP(nombre, apellido, fecha, telefono, correo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha = fecha;
    this.telefono = telefono;
    this.correo = correo;
}

function datos(nombre, apellido, fecha, telefono, correo){
    var perUno = new datosP(nombre, apellido, fecha, telefono, correo);
    datosT.push(perUno);
}

function eliminarDato(array, n){
    return array.slice(0, n).concat(array.slice(n+1));
}

function mostrarDatos(){
    for(let i = 0; i < datosT.length; i++){
        console.log((i+1) + '- ' + 'Nombre: ' + datosT[i].nombre + '\n' + 
                    'Apellido: ' + datosT[i].apellido + '\n' +
                    'Fecha de nacimiento: ' + datosT[i].fecha + '\n' +
                    'Telefono: ' + datosT[i].telefono + '\n' +
                    'Correo: ' + datosT[i].correo + '\n');
    }
    if(datosT.length == 0){
        console.log('No tiene datos!!');
    }
}

function modificarDato(mod){
    let nombre3 = prompt('Ingrese el nuevo nombre de la persona, caso contrario dejelo vacio');
    let apellido3 = prompt('Ingrese el nuevo apellido de la persona, , caso contrario dejelo vacio');
    let fecha3 = prompt('Ingrese la nueva fecha de nacimiento de la persona, , caso contrario dejelo vacio');
    let telefono3 = prompt('Ingrese el nuevo numero de telefono de la persona , caso contrario dejelo vacio');
    let correo3 = prompt('Ingrese el nuevo correo de la persona, caso contrario dejelo vacio');

    for(let x = 0; x < datosT.length; x++){
        if(x == mod){
            if(nombre3 != ""){
                datosT[x].nombre = nombre3;
            }
            if(apellido3 != ""){
                datosT[x].apellido = apellido3;
            }
            if(fecha3 != ""){
                datosT[x].fecha = fecha3;
            }
            if(telefono3 != ""){
                datosT[x].telefono = telefono3;
            }
            if(correo3 != ""){
                datosT[x].correo = correo3;
            }
        }
    }
}

function menu(){
    let opc = parseInt(prompt('1- Desea ingresar una persona \n2- Buscar una persona \n3- Modificar una persona \n4- Eliminar una persona \n5- Mostrar todas las personas \n6- Salir del programa'));
    switch (opc) {
        case 1:
            console.log('------------------------------------------------------');
            let nombre1 = prompt('Ingrese el nombre de la persona');
            let apellido1 = prompt('Ingrese el apellido de la persona');
            let fecha1 = prompt('Ingrese la fecha de nacimiento de la persona');
            let telefono1 = prompt('Ingrese el numero de telefono de la persona');
            let correo1 = prompt('Ingrese el correo de la persona');
            datos(nombre1, apellido1, fecha1, telefono1, correo1);
            console.log('Ingresado!!!');
            console.log('------------------------------------------------------');
            menu();
            break;
        case 2:
            console.log('------------------------------------------------------');
            if(datosT.length != 0){
                let nombre2 = prompt('Ingrese el nombre de la persona a buscar');
                let cont = 0;
                for(let i = 0; i < datosT.length; i++){
                    if(datosT[i].nombre == nombre2){
                        console.log('Nombre: ' + datosT[i].nombre + '\n' + 
                                    'Apellido: ' + datosT[i].apellido + '\n' +
                                    'Fecha de nacimiento: ' + datosT[i].fecha + '\n' +
                                    'Telefono: ' + datosT[i].telefono + '\n' +
                                    'Correo: ' + datosT[i].nombre + '\n');
                        ++cont;
                    }
                }
                if(cont == 0){
                    console.log('No se encontraron resultados!!');
                }
            } else{
                console.log('No tiene datos!!');
            }
            console.log('------------------------------------------------------');
            menu();
            break;
        case 3:
            console.log('------------------------------------------------------');
            mostrarDatos();
            if(datosT.length != 0){
                var mod = prompt('Seleccione el numeral de la persona a modificar');
            }
            if(datosT.length >= mod){
                modificarDato((mod-1));
                console.log('Modificado!!!');
            } else if(datosT.length != 0){
                console.log('Opcion invalida!!');
            }
            console.log('------------------------------------------------------');
            menu();
            break;
        case 4:
            console.log('------------------------------------------------------');
            mostrarDatos();
            if(datosT.length != 0){
                var pers = parseInt(prompt('Indique el numero de la persona a eliminar'));
            }
            if(datosT.length >= pers){
                datosT = eliminarDato(datosT, (pers-1));
                console.log('Eliminado!!!');
            } else if(datosT.length != 0){
                console.log('Opcion invalida!!');
            }            
            console.log('------------------------------------------------------');
            menu();
            break;
        case 5:
            console.log('------------------------------------------------------');
            mostrarDatos();
            console.log('------------------------------------------------------');
            menu();
            break;
        case 6:
            console.log('Salio!!');
            break;
    
        default:
            console.log('Opcion no valida!!');
            menu();
            break;
    }
}

menu();