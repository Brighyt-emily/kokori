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

    </head>
    <body>
    <%@include file="WEB-INF/template/Principal.jspf" %>

    <!--INICIO Devolucion.jsp -->
   
  
    <main class="mn-inner">
         <nav class="teal lighten-2" style="margin-top: -20px;">
            <div class="nav-wrapper">
                <div class="col s12">
                    <a href="perfil.jsp" class="breadcrumb">Perfil</a>
                     
                </div>
            </div>
        </nav>
         <div class="card">
                    
                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">
                                <div class="col s4">
                                    
                                        <div class="row">
        <div class="input-field col s6">
          <input placeholder="${sessionScope.user}" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">${sessionScope.user}</label>
        </div>
      </div>
        
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <!-- ABRIR MODAL N°8 -->
                   
                    
                </div>   
         
    </main>

    <%@include file="WEB-INF/template/footerMain.jspf" %>
    <script src="js/devolucion.js" type="text/javascript"></script>

    </body>
</html>
