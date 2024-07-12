
try {
    throw new EvalError('Se ha producido un error', 'ejercicio10.js', 100);
  } catch (e) {
    if (e instanceof EvalError) {
      console.error(`EvalError: ${e.message} en ${e.fileName}, línea ${e.lineNumber}`);
    } else {
      console.error(`Error: ${e.message}`);
    }
  }