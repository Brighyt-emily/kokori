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
    </head>
    <body>
        <%@include file="WEB-INF/template/Principal.jspf" %>
            <!--INICIO Contenido -->
            <main class="mn-inner">
                <div class="row">
                    <div class="col s12 m12 l12">
                        <div class="page-title">Devolucion</div>
                    </div>
                    <div class="col s12 m12 l12">
                        <select id="tipo" class="select-dropdown col s3 m3 l3">
                            <option disabled="disabled">Buscar por Tipo</option>
                            <option>LAPTOP</option>
                            <option>CAÑON</option>
                        </select>
                    </div> 
                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">
                                    <table class="table highlight centered" id="tb_prestamos">
                                        <thead>
                                            <tr>
                                                <th>Código</th>
                                                <th>Profesor</th>
                                                <th>Fecha de Préstamo</th>
                                                <th>Devolución Programada</th>
                                                <th>Producto</th>
                                                <th>Tipo</th>
                                                <th>Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody> 
                                            
                                        </tbody>
                                    </table> 
                            </div>
                        </div>
                    </div>
                </div>
            </main>
           <!--FIN Contenido-->
        </div>
        <div class="left-sidebar-hover"></div>

    <%@include file="WEB-INF/template/footer.jspf" %>
    <script src="js/devolucion.js" type="text/javascript"></script>
    
    </body>
</html>
