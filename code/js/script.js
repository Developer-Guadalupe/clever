function obtener() {
    var nombre = document.getElementById('nombre').value;
    var edad = parseInt(document.getElementById('edad').value);
    var fecha = document.getElementById('fecha').value;
    var mujer = document.getElementById('mujer').checked;
    var hombre = document.getElementById('hombre').checked;
    var promedio = parseFloat(document.getElementById('promedio').value);

    var esMujer = (mujer === true)
    var result = nombre + "|" + edad + "|" + fecha + "|" + esMujer + "|" + promedio;

    parent.frames[1].document.getElementById('concatenacion').value = result;


}

function parseo() {
    var cadena = parent.frames[1].document.getElementById('concatenacion').value;

    var arrayDeCadenas = cadena.split("|");

    parent.frames[1].document.getElementById('nombre').value = arrayDeCadenas[0]
    parent.frames[1].document.getElementById('edad').value = arrayDeCadenas[1]
    parent.frames[1].document.getElementById('fecha').value = arrayDeCadenas[2]
    if (arrayDeCadenas[3] === true) {
        parent.frames[1].document.getElementById('mujer').checked = true
    } else {
        parent.frames[1].document.getElementById('hombre').checked = true
    }
    parent.frames[1].document.getElementById('promedio').value = arrayDeCadenas[4]


}