<!DOCTYPE html>
<html lang="en">

<head>
    <link href="assets/css/login.css" rel="stylesheet">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <div class="wrapper fadeInDown">
        <div id="formContent">
          <h2 class="active"> Iniciar Sesión</h2>
            <div class="fadeIn first">
            <img src="assets/img/favicon.png" id="icon" alt="User Icon" />
          </div>      
          <form id = "fo">
            <input type="text" id="usuario" name="usuario" formControlName="usuario" class="fadeIn second" placeholder="Usuario" required>
            <input type="password" id="contraseña" name="contraseña" formControlName="contraseña" class="fadeIn third" placeholder="Contraseña" required>
            
            <input type="submit" class="fadeIn fourth" value="Iniciar Sesión">
            <p>Si desea registrarse de click <a href="inicio.php">Aqui</a></p>
            <p>Volver a la página <a href="index.php" id="entrar">principal</a></p>

          </form>
        </div>
    </div>
</body>

</html>