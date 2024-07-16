let formulario = document.forms.formCliente;

let nombrejs = formulario.nombre;

let provinciajs = formulario.provincia;

let correo = formulario.correo;


    function valida(){
        let ok = false;
        if( correo.value == "" || provinciajs.value == "" || nombrejs.length > 20 || !nombrejs.startsWith('ANTONIO')){
            document.getElementById("errores").innerHTML="Tienes algún error en el formulario";
            ok = false;
        }
        else{
            ok = true;
        }
        
    };
    


