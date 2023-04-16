function encriptarTexto(texto) {
  const LLAVES_ENCRIPTADO = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  let textoEncriptado = '';
  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i];
    let caracterEncriptado = LLAVES_ENCRIPTADO[caracter] || caracter;
    textoEncriptado += caracterEncriptado;
  }
  return textoEncriptado;
}

function desencriptarTexto(palabraEncriptada) {
  const llaves = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };
  let palabraDesencriptada = palabraEncriptada;

  // Reemplaza cada llave por su valor correspondiente
  for (let llave in llaves) {
    const valor = llaves[llave];
    palabraDesencriptada = palabraDesencriptada.replace(new RegExp(llave, 'g'), valor);
  }

  return palabraDesencriptada;
}


function ocultarElementos(texto) {
  document.getElementById("imagen-label").style.display = texto;
  document.getElementById("h1-label").style.display = texto;
  document.getElementById("buttonCopiar").style.display = texto;

}

function mostrarElementos() {
  document.getElementById("input-texto-uno").style.display = "block";
  document.getElementById("input-texto-label").style.display = "block"; 
  document.getElementById("buttonCopiar").style.display = "block"; 
  document.getElementById("buttonCopiar").classList.add("buttonCopiar");
  
}
function copiarTexto() {
  const inputTexto = document.getElementById("input-texto-uno");
  inputTexto.select();
  inputTexto.setSelectionRange(0, 99999);
  const textoCopiado = document.getSelection().toString();
  navigator.clipboard.writeText(textoCopiado);
  alert("¡Texto copiado al portapapeles!");
}




function textoEncript() {
  let texto = document.getElementById("input-texto").value;
  console.log(texto)
  if (texto !== "") {
    ocultarElementos('none');
    mostrarElementos();
    document.getElementById("input-texto-uno").value = encriptarTexto(texto);
  }  
  if (texto === "") {
    ocultarElementos('block'); 
    document.getElementById("input-texto-uno").style.display = "none";
    document.getElementById("input-texto-label").style.display = "none"; 
    document.getElementById("buttonCopiar").style.display = "none"; 
  }
};

function textoDesencript() {
  let texto = document.getElementById("input-texto").value;
  console.log(texto)
  if (texto !== "") {
    ocultarElementos('none');
    mostrarElementos();
    document.getElementById("input-texto-uno").value = desencriptarTexto(texto);
  }  
  if (texto === "") {
    ocultarElementos('block'); 
    document.getElementById("input-texto-uno").style.display = "none";
    document.getElementById("input-texto-label").style.display = "none"; 
    document.getElementById("buttonCopiar").style.display = "none"; 
  }
};
 

  // se hace con el fin de validar el texto ingresado por un dispositivo
  function validarTexto(input) {
    const regex = /^[a-z ]*$/;
    return regex.test(input);
  }
function validarTecla(event) {
  const tecla = event.key;
  const input = event.target.value + tecla;
  if (!validarTexto(input)) {
    event.preventDefault();
  }
} 


 
