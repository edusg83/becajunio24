let formulario = document.forms.formCliente;

let nombrejs = formulario.nombre;

let provinciajs = formulario.provincia;

let correo = formulario.correo;

function correctoono(){
    document.forms.formCliente.onsubmit = function(){
        let ok = false;
        if( correo.value == " " && provinciajs.value == " " && (nombre.length > 20 || !nombre.startsWith('ANTONIO'))){
            alert("Los datos del formulario no son correctos")
            ok = false;
        }
        else{
            ok = true;
        }
        
            
    };
    window.onload = function(){
        correctoono();
    };

}


provinciajs.onchange = function(){
    let indice = provinciajs.selectedIndex;
    let valor = provinciajs.options[indice].value;
    let texto = provinciajs.options[indice].text;
};
