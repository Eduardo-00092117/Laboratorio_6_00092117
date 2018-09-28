function datosP(nombre, apellido, fecha, telefono, correo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha = fecha;
    this.telefono = telefono;
    this.correo = correo;
}

function datos(){
    var perUno = new datosP("Eduardo", "Lopez", "30/09/1997", "22345-2345", "00092117");
    console.log(perUno.nombre + " - " + perUno.apellido + " - " + perUno.fecha + " - " + perUno.telefono + " - " + perUno.correo);
}

datos();