
try 
{
    throw new EvalError('Se ha producido un error', 'ejercicio13.js', 100);
}
 catch (error) 
{
    console.log(error.message);
    console.log(error.fileName);
    console.log(error.lineNumber);
}