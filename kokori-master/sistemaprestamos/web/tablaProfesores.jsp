<%-- 
    Document   : tablaProfesores
    Created on : 04-jul-2018, 23:29:35
    Author     : Kevin Peinado
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <%@include file="WEB-INF/template/header.jspf" %>
         <!-- Compiled and minified CSS -->
          <!-- Compiled and minified CSS -->       
    </head>
    <body>                          
        <%@include file="WEB-INF/template/Principal.jspf" %>
        <!--INICIO Contenido -->
        <main class="mn-inner">
            <div class="col s12">
                <div class="action-btn-wrapper">
                    <div class="fixed-action-btn my-custom-btn vertical">
                        <a class="btn-floating btn-large red">
                            <i class="large material-icons">settings</i>
                        </a>
                        <ul>
                            <li><a class="btn-floating #f06292 blue lighten-2 tooltipped" data-position="left" data-delay="50" data-tooltip="Añadir Profesor" href='registrarProfesores.jsp' ><i class="material-icons">add</i></a></li>
                            <li><a class="btn-floating #f06292 green lighten-2 tooltipped" data-position="left" data-delay="50" data-tooltip="Lista de Profesores" href='tablaProfesores.jsp'><i class="material-icons">grid_on
                                    </i></a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <div class="page-title"> <i class="material-icons smoll" >assignment_ind</i><span>Registro de Profesores</span></div>
                </div>
                <div class="col s12 m12 l12">
                    <div class="card">
                        <div class="card-content">

                            <table class="highlight" id="tblProfesores">
                                <thead>
                                    <tr>
                                        <th>Estado</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Dni</th>
                                        <th>Codigo</th>
                                        <th>Escuela</th>
                                        <th>Email</th>                                      
                                        <th>Actualizar</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>

                                <tbody>
                                </tbody>
                            </table>                                                                                               
                            <!--Modal para ver detalladamente el resgitro de los profesores-->
                            
                            
                            <!-- Modal Structure -->
                            <div id="modal1" class="modal s12 m12 l12" >
                <div class="modal-content">
                  
                     <div class="col-sm-12 contact-form" > <!-- div da direita -->
                         <form id="contact" method="post" class="form" role="form">
                            <div class="row">
                               
                                <div class="input-field col s6">
                                    <input placeholder="Placeholder" id="nombres" type="text" class="validate">
                                    <label for="nombres">Nombres</label>
                                </div>
                                 <div class="input-field col s6">
                                    <input placeholder="Placeholder" id="apellidos" type="text" class="validate">
                                    <label for="apellidos">Apellidos</label>
                                </div>
                    
                            </div>
                              <div class="row">
                               
                                <div class="input-field col s6">
                                    <input placeholder="Placeholder" id="email" type="text" class="validate">
                                    <label for="email">Email</label>
                                </div>
                                 <div class="input-field col s6">
                                    <input placeholder="Placeholder" id="direccion" type="text" class="validate">
                                    <label for="direccion">Direccion</label>
                                </div>
                    
                            </div>
                             <div class="row">

                                 <div class="input-field col s4">
                                     <input placeholder="Placeholder" id="celular" type="text" class="validate">
                                     <label for="celular">Celular</label>
                                 </div>
                                 <div class="input-field col s4">
                                     <input placeholder="Placeholder" id="dni" type="text" class="validate">
                                     <label for="dni">Dni</label>
                                 </div>
                                 <div class="input-field col s4">
                                     <input placeholder="Placeholder" id="codigo" type="text" class="validate">
                                     <label for="codigo">Codigo</label>
                                 </div>   
                             </div>
                             <div class="row">
                                 <div class="input-field col s5">
                                     <i class="material-icons prefix">class</i>
                                     <select id="secFacultad">
                                         <option value="0" disabled selected>Facultades de la UPeU</option>
                                         <option value="1">FIA</option>
                                         <option value="2">FACTEO</option>
                                         <option value="3">FCE</option>
                                         <option value="4">FACIHED</option>
                                     </select>
                                     <label>Facultades</label>
                                 </div>
                                 <div class="col s2 center-align">
                                     <a class="btn-floating btn-large waves-effect waves-light blue-grey" id="btnMostrar"><i class="material-icons">keyboard_arrow_right</i></a>
                                 </div>

                                 <div class="input-field col s5">
                                     <select id="comboEscuela" name="selectBox">
                                         <option value="0" disabled selected>Escuelas de la UPeU</option>             
                                     </select>
                                     <label>Escuelas</label>
                                 </div>

                             </div>
                     </div>
                     <div class="row">
                     </div>
       
                    <a  class="modal-action modal-close btn-flat" onclick='update()'>Registrar</a>
                    <a  class="modal-action modal-close btn-flat">Cerrar</a>

                
                     </div>
                            <!-- fin del modal -->
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!--FIN Contenido-->
    </div>
    <div class="left-sidebar-hover"></div>






    <%@include file="WEB-INF/template/footerMain.jspf" %>
    <script src="js/profesor.js" type="text/javascript"></script>
    <script>
        $(document).ready(function () {
            console.log("funciona");
             
        });
    </script>
</body>
</html>
