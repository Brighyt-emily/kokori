<%-- 
    Document   : main
    Created on : 05/07/2018, 11:38:28 AM
    Author     : Dieguito
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
       <%@include file="WEB-INF/template/header.jspf" %>
       
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
            
    </head>
    <body>     
            <%@include file="WEB-INF/template/Principal.jspf" %>
            <!--INICIO Contenido -->
            <main class="mn-inner">
                <div class="row">
                    <div class="col s12">
                        <div class="page-title">Titulo de Caso</div>
                    </div>
                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">
                                <h1>Contenido</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
           <!--FIN Contenido-->
        </div>
        <div class="left-sidebar-hover"></div>
        
        
       <%@include file="WEB-INF/template/footer.jspf" %>
    </body>
</html>
