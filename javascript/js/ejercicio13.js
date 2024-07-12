try {
    throw new EvalError('Se ha producido un error', 'ejercicio13.js', 100);
} catch (error) {
    console.error("Nombre del error:", error.name);
    console.error("Mensaje:", error.message);
    console.error("Fichero:", error.fileName);
    console.error("Línea:", error.lineNumber);
}