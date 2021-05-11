$('#videoj').click(function(){
    var esperar = 2000;
    $.ajax({
       url: "../juego.html",
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
    $.ajax({
       url: "../inicio.html",
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

 $('#entrar').click(function(){
    var esperar = 2000;
    $.ajax({
       url: "../entrar.html",
        beforeSend : function(){
            $('#contenido2').text('Cargando...');
        },
        success : function(data){
            setTimeout(function(){
              $('#contenido2').html(data);  
            },esperar
                      
            );
        }
    });
 });