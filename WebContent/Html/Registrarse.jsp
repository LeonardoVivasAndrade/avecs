<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="../css/bootstrap.css" />


    <title>Registro</title>
</head>

<body>
    <header>
        <div class="container">
            <h2>AVECS</h2>
        </div>
    </header>
    <div class="container">

        <h2 class="text-center">Registrarse</h2>
        <form method="post" action="/RegistrarEstudiante">
            <div class="form-group"><br></div>
            <!-- -información personal -->
            <div class="form-group container input-group" style="width: 50%">
                <label>Número de identificación <span class="glyphicon glyphicon-asterisk"></span></label>

                <input class="form-control" name="id"type="number" maxlength="10" placeholder="#">
                  <select name="tipoid"> 
                
					<option value="0"selected>Seleccione
					<option value="1" >Cedula de Ciudadanía
					<option value="2">Tarjeta De Identidad
					<option value="3">Cedula de Extránjeria
					<option value="4">Pasaporte
				   </select> 
            </div>
            
            <div class="form-group container input-group" style="width: 50%">
                <label>Género<span class="glyphicon glyphicon-user"></span></label>

                 <select name="genero"> 
                
					<option value="0"selected>Seleccione
					<option value="1" >Masculino
					<option value="2">Femenino
					<option value="3">Otro
				 </select> 
				 <label>Fecha de Nacimiento</label>
				  <input  name="fecha_nacimiento"type="text" maxlength="10" placeholder="dd/mm/aaaa">
            </div>
            
            <div class="form-group container input-group" style="width: 50%">
                <label>Nombres</span></label>

                <input class="form-control" name="nombres"type="text" maxlength="45">
            </div>
            
            <div class="form-group container input-group" style="width: 50%">
                <label>Primer Apellido</label>
                
                <input class="form-control" name="ap1"type="text" maxlength="45" >
            </div>
              <div class="form-group container input-group" style="width: 50%">
                <label>Segundo Apellido</label>
                
                <input class="form-control" name="ap2" type="text" maxlength="45" >
            </div>
            
            <div class="form-group container input-group" style="width: 50%">
                <label>E-mail <span class="glyphicon glyphicon-envelope"></span> </label>
                <input name ="correo"class="form-control" type="text" placeholder="ejemplo@ufps.edu.co" />
            </div>

            <div class="form-group container input-group" style="width: 50%">
                <label>Código estudiante <span class="glyphicon glyphicon-education"></span></label>

                <input class="form-control" type="number" name="codigo" maxlength="7" placeholder="Codigo">
            </div>

            <div class="form-group container input-group" style="width: 50%">
                <label>Contraseña <span class="glyphicon glyphicon-lock"></span> </label>
                <input class="form-control" name="pass" type="password" placeholder="Contraseña" />
            </div>
            <div class="form-group">
                <div class="container-fluid" style="text-align: center;">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="text-align: right">
                        <a class="btn btn-danger" onclick="history.back()">&nbsp&nbsp&nbspVolver&nbsp&nbsp&nbsp</a>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="text-align: left">
                        <button class="btn btn-danger">Registrar</button>
                    </div>
                </div>
            </div>

            <div class="form-group"><br></div>


        </form>
    </div>

   

    <script src="../js/jquery.js"></script>
    <script src="../js/bootstrap.min.js"></script>

</body>

</html>