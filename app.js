let botonEncriptar = document.querySelector('.contenido__principal__primera__encriptar');
let botonDesencriptar = document.querySelector('.contenido__principal__primera__desencriptar');
let textoEncriptado = '';

function encriptar() {
    let mensajeEncriprado = document.querySelector('.contenido__principal__tercero__texto')
    let textoPrincipal = document.querySelector('#contenido__principal__texto').value;
    let imagenEncriptada = document.querySelector('.contenido__principal__segundo');
    let imagenDesencriptar = document.querySelector('.contenido__principal__tercero');
    let botonCopiar = document.querySelector('.contenido__principal__tercero__boton');
    let textoEncriptado = '';

    for (let i = 0; i < textoPrincipal.length; i++) {
        let element = textoPrincipal[i];

        if (element.toUpperCase() && element !== element.toLowerCase()) {
            alert('Por favor solo letras en minusculas')
            imagenEncriptada.style.display = 'flex';
            imagenDesencriptar.style.display = 'none';
            break;
        }
            else {
            if (element === 'a') {
                textoEncriptado += 'ai'
            } else if (element === 'e') {
                textoEncriptado += 'enter'
            } else if (element === 'i') {
                textoEncriptado += 'imes'
            } else if (element === 'o') {
                textoEncriptado += 'ober'
            } else if (element === 'u') {
                textoEncriptado += 'ufat'
            } else {
                textoEncriptado = textoEncriptado + element
            }
            imagenEncriptada.style.display = 'none';
            imagenDesencriptar.style.display = 'flex';
        }
    }


    mensajeEncriprado.textContent = textoEncriptado;
    botonCopiar.textContent = '¡Copiar!'
}

function desencriptar() {
    let mensajeEncriprado = document.querySelector('.contenido__principal__tercero__texto');
    let textoPrincipal = document.querySelector('#contenido__principal__texto').value;
    let botonCopiar = document.querySelector('.contenido__principal__tercero__boton')
    let imagenEncriptada = document.querySelector('.contenido__principal__segundo');
    let imagenDesencriptar = document.querySelector('.contenido__principal__tercero');
    let textoDesencriptado = '';

    if (textoPrincipal === '') {
        
    }
    else {
        for (let i = 0; i < textoPrincipal.length;) {
            // Verifica si las siguientes dos letras son 'ai'
            if (textoPrincipal.substring(i, i + 2) == 'ai') {  //substring (i, i + 2) verifica de dos en dos si existe la palabra 'ai' 
                //Dentro de la condición if, substring(i, i + 2) se utiliza para verificar si una secuencia específica de caracteres aparece en la posición actual del texto.
                textoDesencriptado += 'a' // Agrega 'a' al texto desencriptado debido a la coincidencia encontrada.
                i += 2; //Avanza dos posiciones en el texto
            } else if (textoPrincipal.substring(i, i + 5) == 'enter') {
                textoDesencriptado += 'e'
                i += 5;
            } else if (textoPrincipal.substring(i, i + 4) == 'imes') {
                textoDesencriptado += 'i'
                i += 4;
            } else if (textoPrincipal.substring(i, i + 4) == 'ober') {
                textoDesencriptado += 'o'
                i += 4;
            } else if (textoPrincipal.substring(i, i + 4) == 'ufat') {
                textoDesencriptado += 'u'
                i += 4;
            } else {
                // Si ninguna condición se cumple, agrega el carácter actual al texto desencriptado y avanza una posición
                textoDesencriptado = textoDesencriptado + textoPrincipal[i];
                i++;
            }
            imagenEncriptada.style.display = 'none';
            imagenDesencriptar.style.display = 'flex';
        }
    }

    // Asigna el texto desencriptado al contenido de mensajeEncriptado
    mensajeEncriprado.textContent = textoDesencriptado;
    botonCopiar.textContent = '¡Copiar!'
}

function botonCopiar() {

    let botonCopiar = document.querySelector('.contenido__principal__tercero__boton')
    let textoCopiar = document.querySelector('.contenido__principal__tercero__texto')

    textoCopiar = textoCopiar.textContent

    navigator.clipboard.writeText(textoCopiar)
        .then(function () {
            botonCopiar.textContent = '¡Copiado!'

        })
        .catch(function (err) {
            botonCopiar.textContent = 'Error'
        })
}






