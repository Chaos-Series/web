function quitarArroba(cadena) {
  // Verificar si la cadena es nula o indefinida
  if (cadena === null || cadena === undefined) {
    // Manejar el caso en el que la cadena es nula o indefinida
    console.log("La cadena es nula o indefinida");
    return null; // O devuelve lo que sea apropiado en tu caso
  }

  // Verificar si la cadena comienza con "@"
  if (cadena.startsWith("@")) {
    // Si es así, devolver la cadena sin el primer carácter
    return cadena.substring(1);
  } else {
    // Si no, devolver la cadena sin cambios
    return cadena;
  }
}

export default quitarArroba