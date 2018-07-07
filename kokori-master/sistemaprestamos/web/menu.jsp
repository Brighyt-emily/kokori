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
        <%@include file="WEB-INF/template/header.jspf" %>
        
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
    <link href="css/diego.css" rel="stylesheet" type="text/css"/>
        <title>JSP Page</title>
    </head>
    <body>
        
          <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
        </div>

        
        
        <header class="mn-header navbar-fixed">
                <nav class="cyan darken-1">
                    <div class="nav-wrapper row">
                        
                        <div class="header-title col s3">      
                            <span class="chapter-title">Alphalpha</span>
                        </div>
                        
                        
                        
                        
                        <!--INICIO Notificaciones-->
                        <ul id="dropdown1" class="dropdown-content notifications-dropdown">
                            <li class="notificatoins-dropdown-container">
                                <ul>
                                    <li class="notification-drop-title">Today</li>
                                    <li>
                                        <a href="#!">
                                            <div class="notification">
                                                <div class="notification-icon circle cyan"><i class="material-icons">done</i></div>
                                                <div class="notification-text"><p><b>Alan Grey</b> uploaded new theme</p><span>7 min ago</span></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <div class="notification">
                                                <div class="notification-icon circle deep-purple"><i class="material-icons">cached</i></div>
                                                <div class="notification-text"><p><b>Tom</b> updated status</p><span>14 min ago</span></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <div class="notification">
                                                <div class="notification-icon circle red"><i class="material-icons">delete</i></div>
                                                <div class="notification-text"><p><b>Amily Lee</b> deleted account</p><span>28 min ago</span></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <div class="notification">
                                                <div class="notification-icon circle cyan"><i class="material-icons">person_add</i></div>
                                                <div class="notification-text"><p><b>Tom Simpson</b> registered</p><span>2 hrs ago</span></div>
                                            </div>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </li>
                        </ul>
                        
                        <!--FINs Notificaciones-->
                    </div>
                </nav>
            </header>
        
        
                       <div class="container">
                            <div class="card center">
                                <div class="card-content">
                                    <div class="row">
                                        <div class="col l12 m12 s12">
                                            <div class="menu-title">
                                                <i class="material-icons tiny">computer</i>General <br/>
                                                <div class="grey-text">
                                                 Accesos y funciones generales del sistema
                                                </div>
                                            </div>
                                                <br/>
                                                <div class="container">
                                                        <div class="row center">
                                                            <div class="col s3">
                                                                <a class="btn-floating btn-large waves-effect waves-light red">
                                                                <i class="material-icons">nature_people</i></a>
                                                                <p class="title bold">Mi Perfil</p>
                                                            </div>
                                                            <div class="col s3">
                                                                <a class="btn-floating btn-large waves-effect waves-light red">
                                                                <i class="material-icons">event_available</i></a>
                                                                <p class="title bold">Reservas</p>
                                                            </div>    
                                                            <div class="col s3">
                                                                <a class="btn-floating btn-large waves-effect waves-light red">
                                                                <i class="material-icons">dvr</i></a>
                                                                <p class="title bold">Prestamos</p>
                                                            </div> 
                                                            <div class="col s3">
                                                                <a class="btn-floating btn-large waves-effect waves-light red">
                                                                <i class="material-icons">event_note</i></a>
                                                                <p class="title bold">Reportes</p>
                                                            </div> 
                                        
                                                        </div>
                                                </div>
                                                
                                        </div>
                            
                        
                            
                                        <div class="col l12 m12 s12">
                                            <div class="menu-title">
                                                <i class="material-icons tiny">work</i>Profesor<br/>
                                                <div class="grey-text">
                                                    Gestion Profesores
                                                </div>
                                            </div>
                                            <br/>
                                            <div class="container">
                                                <div class="row center">
                                                    <div class="col s4">
                                                        <a class="btn-floating btn-large waves-effect waves-light red">
                                                            <i class="material-icons">nature_people</i></a>
                                                        <p class="title bold">Mi Perfil</p>
                                                    </div>
                                                    <div class="col s4">
                                                        <a class="btn-floating btn-large waves-effect waves-light red">
                                                            <i class="material-icons">event_available</i></a>
                                                        <p class="title bold">Reservas</p>
                                                    </div>    
                                                    <div class="col s4">
                                                        <a class="btn-floating btn-large waves-effect waves-light red">
                                                            <i class="material-icons">dvr</i></a>
                                                        <p class="title bold">Prestamos</p>
                                                    </div>                                                    
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                            
                        
                            
                                <div class="col l12 m12 s12">
                                    <div class="crm-menu-title">
                                        <i class="mdi-social-school amber-text"></i> Escuela Sabática <br />
                                        <div class="crm-menu-subtitle grey-text">
                                            Funciones relacionadas a la escuela sabática
                                        </div>
                                    </div>
                                    <br />
                                    <div class="crm-menu-circle">
                                        
                                            <a class="crm-menu-item tooltipped" href="/escuela/profile/" data-position="bottom" data-delay="50" data-tooltip="Información de mi Escuela Sabática">
                                                <i class="mdi-social-school md amber white-text"></i>
                                                <br />
                                                <p class="title bold">Mi Escuela Sabática</p>
                                            </a>
                                        
                                    </div>
                                    <hr />
                                </div>
                            
                        
                            
                                <div class="col l12 m12 s12">
                                    <div class="crm-menu-title">
                                        <i class="mdi-action-event blue-grey-text"></i> Eventos <br />
                                        <div class="crm-menu-subtitle grey-text">
                                            Listado y Reporte de eventos
                                        </div>
                                    </div>
                                    <br />
                                    <div class="crm-menu-circle">
                                        
                                            <a class="crm-menu-item tooltipped" href="/evento/listEvento" data-position="bottom" data-delay="50" data-tooltip="Información sobre los eventos">
                                                <i class="mdi-action-event md blue-grey white-text"></i>
                                                <br />
                                                <p class="title bold">Eventos</p>
                                            </a>
                                        
                                    </div>
                                    <hr />
                                </div>
                            
                        
                    </div>
                </div>
            </div>
        
        </div>
        
         <%@include file="WEB-INF/template/footer.jspf" %>
         <script src="js/menu.js" type="text/javascript"></script>
    </body>
</html>
