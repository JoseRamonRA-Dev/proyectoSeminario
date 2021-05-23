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
            <form class="" action="registrar.php" method="post">
                <div class="form-row">
                    <div class="form-group mb-2">
                        <h5 class="active">Datos del menor</h5>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group mb-2">
                        <input class="form-control p" type="text" name="nombres" id="nombres" placeholder="Nombre">
                    </div>
                    <div class="form-group mb-2 ">
                        <input class="form-control p" type="text" name="app" id="app" placeholder="Apellido Paterno">
                    </div>
                    <div class="form-group mb-2">
                        <input class="form-control p" type="text" name="apm" id="apm" placeholder="Apellido Materno">
                    </div>
                    <div class="form-group mb-2 ">
                        <input class="form-control p" type="date" name="fecnac" id="fecnac" placeholder="Fecha de nacimiento">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group mb-2">
                        <input style="WIDTH: 415px;" class="form-control" type="text" name="usuario" id="usuario" placeholder="Usuario">
                    </div>
                    <div class="form-group mb-2">
                        <input class="form-control" type="password" name="contra" id="contra" placeholder="Contraseña">
                    </div>
                    <div class="form-group mb-2">
                        <input class="form-control" type="text" name="telefono" id="telefono" placeholder="Telefono">
                    </div>
                    <div class="form-group mb-2">
                    </div>
                </div>
                <!--<div class="form-group">-->
                <div class="form-row">
                    <div class="form-group mb-2">
                        <h5 class="active">Datos del madre, padre o tutor</h5>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group mb-2">
                        <input class="form-control" type="text" name="nombrestu" id="nombrestu" placeholder="Nombre">
                    </div>
                    <div class="form-group mb-2">
                        <input class="form-control" type="text" name="appTu" id="appTu" placeholder="Apellido Paterno">
                    </div>
                    <div class="form-group mb-2">
                        <input class="form-control" type="text" name="apmTu" id="apmTu" placeholder="Apellido Materno">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group mb-2">
                        <input style="WIDTH: 415px;" class="form-control" type="email" name="correo" id="correo" placeholder="Correo">
                    </div>
                    <div class="form-group mb-2">
                        <input class="form-control" type="text" name="teltu" id="teltu" placeholder="Telefono">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group mb-2">
                        <label for="">Responsable</label>
                        <select style="WIDTH: 415px;" class="form-control" name="resp" id="resp" placeholder="Seleccione Responsable">
                            <option>Selecciona Responsable</option>
                            <?php
                            if (isset($_POST['institucion'])) {
                                $ins = $_POST['institucion'];
                            }
                            $sql = $conexion->query("SELECT * from responsable WHERE ID_Org ='" . $ins . "'");
                            while ($fila = $sql->fetch_array()) {
                                echo "<option value='" . $fila['ID'] . "'>" . $fila['Nombre'] . ' ' . $fila['Apellido_P'] . ' ' . $fila['Apellido_M'] . "</option>";
                            }
                            ?>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group mb-2">
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