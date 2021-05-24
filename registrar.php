<html>
    <body>
        <?php 
        $serv = 'localhost';
        $cuenta = 'root';
        $contra = '';
        $BaseD = 'empatines';
        $_SESSION['exito'] = "";
        
        //Realiar la conexion con la base de datos 
        $conexion4 = new mysqli($serv, $cuenta, $contra, $BaseD);
        if ($conexion4->connect_error) {
            die('Ocurrio un error en la conexion con la BD');
        } else {
            include("SqlConn.php");
            $nombre=$_POST['nombres'];
            $app=$_POST['app'];
            $apm=$_POST['apm'];
            $fecnac=$_POST['fecnac'];
            $usuario=$_POST['usuario'];
            $contra=$_POST['contra'];
            $tel=$_POST['telefono'];
            $tutor=$_POST['nombrestu'];
            $appT=$_POST['appTu'];
            $apmT=$_POST['apmTu'];
            $correo=$_POST['correo'];
            $teltu=$_POST['teltu'];
            $esc =  $_POST['esc']; 
            $resp = $_POST['resp'];

            $sql = "INSERT INTO persona (Nombre, Apellido_P,Apellido_M, Fecha_Nac, Usuario, Contrasena, Telefono) 
                    VALUES('$nombre','$app','$apm', '$fecnac', '$usuario', '$contra', '$tel');";
            
            $sql2 = "INSERT INTO Responsable (Nombre, Apellido_P,Apellido_M,Correo, Telefono, Tipo, ID_Org) 
            VALUES('$tutor','$appT','$apmT', '$correo', '$teltu','Padre', '$esc');";

            echo $sql2; 
    
            $conexion4->query($sql);
            $conexion4->query($sql2);
            if ($conexion4->affected_rows >= 1) { //revisamos que se inserto un registro
               header("Location: entrar.php");
                $_SESSION['exito'] = "SI";

            } else {
                echo "<script>document.location='inicio.php';</script>";
                $_SESSION['exito'] = "NO";
            }
        }
        ?>
    </body>
</html>


