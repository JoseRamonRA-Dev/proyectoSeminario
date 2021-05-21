$('#videoj').click(function(){
    var esperar = 2000;
    $.ajax({
       url: "../part10.html",
        beforeSend : function(){
            $('#contenido').text('Cargando...');
        },
        success : function(data){
            setTimeout(function(){
              $('#contenido').html(data);  
            },esperar
                      
            );
        }
    });
 });

 $('#iniciar').click(function(){
    var esperar = 2000;
    var screen = $('#loading');
    pantalla(screen);
    $.ajax({
       url: "../inicio.html",
       beforeSend: pantalla(screen),
        success : function(data){
            setTimeout(function(){
              $('#contenido').html(data);  
            },esperar
                      
            );
        }
    });
 });

 $('#entrar').click(function(){
    var esperar = 2000;
    var screen = $('#loading');
    pantalla(screen);
    $.ajax({
       url: "../entrar.html",
        beforeSend : pantalla(screen),
        success : function(data){
            setTimeout(function(){
              $('#contenido2').html(data);  
            },esperar
                      
            );
        }
    });
 });

 function pantalla(screen){
    $(document)
        .ajaxStart(function () {
            screen.fadeIn();
        })
        .ajaxStop(function () {
            screen.fadeOut();
        });
}