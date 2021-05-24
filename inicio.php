<?php
$_SESSION['exitoD'] = "";
$_SESSION['id'] = "";
$servidor = 'localhost';
$cuenta = 'root';
$password = '';
$bd = 'empatines';
$conexion = new mysqli($servidor, $cuenta, $password, $bd);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <link href="assets/css/registro.css" rel="stylesheet">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <title>Document</title>
</head>

<body>
    <?php
    if ($_SESSION['exitoD'] == "si") {
        echo '<script>swal("Donacion agregada", "Continua agregando donaciones", "success");</script>';
        $_SESSION['exitoD'] = "";
    } else if ($_SESSION['exitoD'] == "no") {
        echo '<script>swal("Error", "Hubo problamas al dar de alta", "error");</script>';
        $_SESSION['exitoD'] = "";
    }
    ?>
    <div class="fondo">
        <div class="fondo">
            <h3 class="active">REGISTRO</h3>
            <form class="" action="inicio2.php" method="post">
                <div class="form-row">
                    <div class="form-group mb-2">
                        <h5 class="active">Datos de la institución</h5>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group mb-2">
                        <label for="">Institución a la que pertenece</label>
                        <select style="WIDTH: 415px;" class="form-control" name="institucion" id="esc" placeholder="Seleccione su escuela">
                            <option>Selecciona Institucion</option>
                            <?php
                            $sql = $conexion->query("SELECT * from organizacion;");
                            while ($fila = $sql->fetch_array()) {
                                echo "<option value='" . $fila['ID'] . "'>" . $fila['Nombre'] . "</option>";
                            }
                            ?>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group mb-3">
                        <input class="fadeIn fourth p-3" type="submit" value="Registrar">
                    </div>
                </div>
            </form>
        </div>
        <p>¿Ya tengo Cuenta? <a href="entrar.php" id="entrar">Inicia Sesión </a></p>
        <p>Volver a la página <a href="index.php" id="entrar">principal</a></p>

    </div>
    </div>

</body>
</html>