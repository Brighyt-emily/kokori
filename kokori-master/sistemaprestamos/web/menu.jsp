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
        
        
      
                        <div class="card">
                            <div class="card-content m3 center ">
                                
                                <span class="menu-title">Iconos mi hermano</span>
                                
                                
                                
                                
                                
                            </div>
                        </div>
        
        
         <%@include file="WEB-INF/template/footer.jspf" %>
         <script src="js/menu.js" type="text/javascript"></script>
    </body>
</html>
