var abrirSoporte=document.getElementById('entrar-soporte'),
    abrirVentana=document.getElementById('contenedor-servicio'),
    cerrarSoporte=document.getElementById('cerrarSoporte'),
    enviar=document.getElementById('enviarSoporte');

var nameSer=document.getElementById('name-service'),
    correoSer=document.getElementById('correo-service'),
    mensajeSer=document.getElementById('mensaje-service');

abrirSoporte.addEventListener('click', function(){
    abrirVentana.classList.add('active');
});

cerrarSoporte.addEventListener('click', function(){
    abrirVentana.classList.remove('active');
});

enviar.addEventListener('click', function(){
    abrirVentana.classList.remove('active');    
});

