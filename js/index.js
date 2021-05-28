var msg = document.getElementById("alert_msg");


function validar(correo){
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valido = expReg.test(correo);
    
    if(valido==false){
        msg.style.display = 'block';
        document.getElementById("email__ad").style.borderColor = "hsl(354, 100%, 66%)";
    }
    else{
        msg.style.display = 'none';
        document.getElementById("email__ad").style.borderColor = "hsl(156, 100%, 35%)";
    }
}