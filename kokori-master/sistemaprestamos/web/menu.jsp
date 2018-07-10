<%-- 
    Document   : Menu
    Created on : 05/07/2018, 06:43:38 PM
    Author     : Dieguito
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
       
         <link rel="icon" href="images/logo.png" sizes="40x40">
        <%@include file="WEB-INF/template/headerMain.jspf" %>
        
    
        <title>Menu Principal</title>
        <style>
            a{
          
            transition: transform .2s; /* Animation */
            
            }

            a:hover {
            transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
            
            
            
        </style>
        
    </head>
    <body>
        
          <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
        </div>

        
        
        <header class="mn-header navbar-fixed">
                <nav class="blue-grey darken-1">
                    <div class="nav-wrapper row">
                        
                        <div class="header-title col s3">      
                          
                            <a class="brand-logo"><img class="responsive-img" src="images/logo.png" width="80" heigth="80"></a>
                        </div>
                          
                        
                        
                        
                        <!--INICIO Notificaciones-->
                     
                        
                        <!--FINs Notificaciones-->
                    </div>
                </nav>
            </header>
        
        
        <div class="container" style="width:600px;">
                           <div class="card center" >
                                <div class="card-content">
                                    <div class="row">
                                        <div class="col l12 m12 s12" style="padding:10px;">
                                            <div class="menu-title">
                                                <i class="material-icons tiny">computer</i>General <br/>
                                                <div class="grey-text" style="margin-bottom:10px;">
                                                 Accesos y funciones generales del sistema
                                                </div>
                                            </div>
                                                
                                                <div class="container">
                                                        <div class="row center">
                                                            <div class="col s3">
                                                                <a  class="btn-floating btn-large waves-effect waves-light blue-grey" style="margin-bottom:20px;" >
                                                                <i class="material-icons">insert_emoticon</i></a>
                                                                <p class="title bold">Mi Perfil</p>
                                                            </div>
                                                            <div class="col s3">
                                                                <a href="reservas.jsp" class="btn-floating btn-large waves-effect waves-light blue" style="margin-bottom:20px;">
                                                                <i class="material-icons">event_available</i></a>
                                                                <p class="title bold">Reservas</p>
                                                            </div>    
                                                            <div class="col s3">
                                                                <a href="./Prestamo.jsp"  class="btn-floating btn-large waves-effect waves-light green" style="margin-bottom:20px;">
                                                                <i class="material-icons">dvr</i></a>
                                                                <p class="title bold">Prestamos</p>
                                                            </div> 
                                                            <div class="col s3">
                                                                <a class="btn-floating btn-large waves-effect waves-light red" style="margin-bottom:20px;">
                                                                <i class="material-icons">event_note</i></a>
                                                                <p class="title bold">Reportes</p>
                                                            </div> 
                                        
                                                        </div>
                                                </div>
                                                
                                        </div>
                            
                      
                          
                                        <div class="col l12 m12 s12">
                                            <div class="menu-title">
                                                <div class="container">
                                              
                                                 </div>
                                                
                                                <i class="material-icons tiny">work</i>Profesor<br/>
                                                <div class="grey-text" style="margin-bottom:10px;">
                                                    Gestion Profesores
                                                </div>
                                            </div>
                                          
                                            <div class="container">
                                                <div class="row center">
                                                    <div class="col s6">
                                                        <a href="registrarProfesores.jsp"  class="btn-floating btn-large waves-effect waves-light blue-grey" style="margin-bottom:20px;">
                                                            <i class="material-icons" >person_add</i></a>
                                                        <p class="title bold">Registrar Profesor</p>
                                                    </div>
                                                    <div   class="col s6">
                                                        <a href="tablaProfesores.jsp"  class="btn-floating btn-large waves-effect waves-light blue-grey" style="margin-bottom:20px;">
                                                            <i class="material-icons">library_books</i></a>
                                                        <p class="title bold">Reporte Profesor</p>
                                                    </div>    
                                                                                                        
                                                </div>
                                            </div>
                                            
                                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
         <%@include file="WEB-INF/template/footerMain.jspf" %>
         <script src="js/menu.js" type="text/javascript"></script>
    </body>
</html>
