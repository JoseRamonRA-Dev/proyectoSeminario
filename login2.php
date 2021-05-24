<html>
<body>
<?php 
        $serv = 'localhost';
        $cuenta = 'root';
        $contra = '';
        $BaseD = 'empatines';
        $conexion4 = new mysqli($serv, $cuenta, $contra, $BaseD);
        if ($conexion4->connect_error) {
            die('Ocurrio un error en la conexion con la BD');
        } else {
            include("SqlConn.php");
            $usr = $_POST['usuario'];
            $pass = $_POST['contraseña'];

            //SELECT nombre FROM persona WHERE (Usuario = "saulin" AND Contrasena = "asdfg");
            $sql = $conexion4->query("SELECT Usuario, Contrasena FROM persona;");
            while ($fila = $sql->fetch_array()) {
                if($fila['Usuario'] == $usr){
                    if($fila['Contrasena'] == $pass){
                        $ban = 0; 
                        break; 
                    }else{
                         $ban = 1;
                     }
                }else{
                    $ban = 1;
                }
            }

           if($ban == 0){
                header("Location: juego.html");
            }else if($ban == 1){
                echo "<script>document.location='entrar.php';</script>";
            }

        }

?>
</body>
</html>