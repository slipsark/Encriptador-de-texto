function cleaner(){
    let cleaner = document.getElementById("area-text");
    cleaner.value = "";
}

function encriptar(){
    console.log(encriptar);
    let dato = document.getElementById("area-text").value;
    dato = dato.replace(/e/gm, "enter");     
    dato = dato.replace(/i/gm, "imes");       
    dato = dato.replace(/a/gm, "ai");        
    dato = dato.replace(/o/gm, "ober");
    dato = dato.replace(/u/gm, "ufat");
    
    if (dato == "") {
        document.getElementById("panel").innerHTML = "Error información no válida.";
    } else {
        document.getElementById("panel").innerHTML = dato;
    }

    cleaner();
}

function desencriptar(){
    console.log(desencriptar);
    let dato = document.getElementById("area-text").value;
    dato = dato.replace(/enter/gm, "e");
    dato = dato.replace(/imes/gm, "i");
    dato = dato.replace(/ai/gm, "a");
    dato = dato.replace(/ober/gm, "o");
    dato = dato.replace(/ufat/gm, "u");
    
    if (dato == "") {
        document.getElementById("panel").innerHTML = "Error información no válida.";
    } else {
        document.getElementById("panel").innerHTML = dato;
    }

    cleaner();
}

function copiar(){
    let copiar = document.getElementById("panel");
    copiar.select();
    document.execCommand("copy");
}