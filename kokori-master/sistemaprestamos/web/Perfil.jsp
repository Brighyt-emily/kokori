<%-- 
    Document   : devolucion
    Created on : 05/07/2018, 04:08:05 PM
    Author     : Emanuel Pinaud
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <%@include file="WEB-INF/template/header.jspf"%>
        <link href="cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.18/datatables.min.css"/>
        <style>
            .action-btn-wrapper {
    position: relative;
}

.fixed-action-btn.my-custom-btn {
    position: absolute;
    right: 30px;
    top:-10px;
    
    padding-top: 15px;
    margin-bottom: 0;
}
        </style>
    </head>
    <body>
        <%@include file="WEB-INF/template/Principal.jspf" %>

        <!--INICIO Devolucion.jsp -->


        <main class="mn-inner">
         <div class="row" style="margin-top: 30px;">
                 <div class="col s12">
                     <div class="card">
                         <div class="card-content">    
                               <div class="container">
                                <div class="row">
                                    <div class="input-field col s6">
                                        <a>Usuario</a>
                                        <input value="${sessionScope.user}" id="usu" type="text" class="validate">
                                        <label for="disabled"></label>
                                    </div>


                                    <div class="input-field col s6">
                                        <a>Contraseña</a>
                                        <input disabled value="${sessionScope.pass}" id="contra" type="text" class="validate">

                                    </div>
                                          <a  id="unin">${sessionScope.iduser}</a>
                                </div>
                             
                         </div>  
                                <div class="action-btn-wrapper">
                                    <div class="fixed-action-btn my-custom-btn horizontal">
                                         <div class="col s6">
                                    <a class="btn-floating btn-large pulse light-red darken-4" id="btnActualizar" onclick="editar()" data-tooltip="Edita usuario"><i class="material-icons">edit</i></a>
                                </div>
                                <div class="col s6">
                                    <a class="btn-floating btn-large pulse red darken-4" id="btnAcept" onclick="acept()"  data-tooltip="Registra"><i class="material-icons">check</i></a>
                                </div>
                                    </div>
                                   
                                </div>
                                
                     </div>
                 </div>
                                                 </div>

                  <div class="col s12">
                      
                          <div class="card-content">
                              <nav class="teal lighten-2" style="margin-top: 60px;">
            <div class="nav-wrapper">
                <div class="row">
                    <div class="col s1">
                        <i class="material-icons" style="height:10px;">sentiment_satisfied</i>
                    </div>
                    <div class="col s11" style="position:absolute;left:30px;top:3px;">
                        <a  class="breadcrumb">Datos</a>                        
                    </div>

                </div>
            </div>   
        </nav>
                      
             </div>
                  </div>
                                
                                <div class="col s12">
                      <div class="card" >
                          <div class="card-content">
                              <div class="row">
                                  
                                     <div class="container">
                                <div class="row ">
                                    Nombre: <label id="nop"></label><br>
                                    Apellido: <label id="oi"></label><br>
                                    DNI: <label id="dn"></label><br>
                                    Celular: <label id="celuar"></label><br>
                                    Direccion <label id="dire"></label><br>
                                    Correo: <label id="corre"></label><br>
                                    Rol: <label id="ro" ></label><br>
                                </div>
                             </div>                      

                      </div>
                 </div>             
             </div>
                      
             </div>
                      
              

        </main>

        <%@include file="WEB-INF/template/footerMain.jspf" %>
        <script src="js/perfil.js" type="text/javascript"></script>

    </body>
</html>
