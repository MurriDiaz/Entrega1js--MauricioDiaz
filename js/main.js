let nombre0 = prompt("PEARL FOOD TRAILER Ingresa Tu nombre")
alert("Gracias" + nombre0 + "🦪");

function listaItems(){
    return prompt("¡Bienvenido al Pearl Food Trailer!\n1. 3 oystras + Copo de vino $8\n2. 6 oystras $13\n3. 6 oystras + botella  $23\n4. 6 oystras mas 2 cervezas $20\n5. Finalizar compra\nElige una opción: ");
}

function obtenerPrecio(opcion){
    switch (opcion){
        case '1':
            return 8;
        case '2':
            return 13;
        case '3':
            return 23;
        case '4':
            return 20;
        case '5':
            return 0;
        default:
            alert("Opción no válida. Ingresa de nuevo");
        return null;
    }
}

function datos(){
    alert("¡Ingresa tus Direccion para realizar el envío!");

    let nombre;
    let nombreValido = false;
    while (!nombreValido) {
        nombre = prompt("Por favor, ingresa tu nombre:");
        if (nombre && nombre.match(/^[A-Za-z\s]+$/)) {
            nombreValido = true;
        } else {
            alert("El nombre no puede estar vacío o contener números. Por favor, ingresa tu nombre.");
        }
    }

    let direccion;
    let direccionValida = false;
    while (!direccionValida) {
        direccion = prompt("Ingresa tu dirección:");
        if (direccion.trim() !== '') {
            direccionValida = true;
        } else {
            alert("La dirección no puede estar vacía. Por favor, ingresa tu dirección.");
        }
    }
    return alert("Muchas gracias " + nombre + "  enviaremos tu pedido a la dirección " + direccion + ".");
}


function carritoDeCompras() {
    let total = 0;
    let opcion;

    do {
        opcion = listaItems();
        let precio = obtenerPrecio(opcion);
        if (precio !== null && precio !== 0) {
            total += precio;
            alert("Artículo agregado. Precio: $" + precio + " \nTotal: $" + total);
        } else if (precio === 0) {
            alert("Compra finalizada.\nTotal a pagar: $" + total);
        }
    } while (opcion !== '5');

    if (total >0){
        datos();
    } else {
        alert("No hay nada en sus compras");
    }

    let volverComprar = prompt("¿Quiere volver a comprar? Escribe 'si', caso contrario ingresa cualquier letra o número para salir.");
    if (volverComprar.toLowerCase() == 'si'){
        carritoDeCompras();
    }
}

carritoDeCompras();