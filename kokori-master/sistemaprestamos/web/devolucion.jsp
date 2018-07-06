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
                    <div class="col s12">
                        <div class="page-title">Devolucion</div>
                    </div>
                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">
                                

                                    <table class="table highlight centered" id="tb_prestamos">
                                        <thead>
                                            <tr>
                                                <th>Código</th>
                                                <th>Producto</th>
                                                <th>Profesor</th>
                                                <th>Fecha de Préstamo</th>
                                                <th>Devolución Programada</th>
                                                <th>Documento</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>001</td>
                                                <td>Laptop-01</td>
                                                <td>David</td>
                                                <td>23/05/2018</td>
                                                <td>25/05/2018</td>
                                                <td>DNI</td>
                                                <td><button class="btn btn-primary teal lighten-1 col s10 m10 l10">Devolver</button><td>
                                            </tr>
                                            <tr>
                                                <td>002</td>
                                                <td>Laptop-02</td>
                                                <td>Ramón</td>
                                                <td>23/05/2018</td>
                                                <td>25/05/2018</td>
                                                <td>Carnet</td>
                                                <td><button class="btn btn-primary teal lighten-1 col s10 m10 l10">Devolver</button><td>
                                            </tr>
                                            <tr>
                                                <td>002</td>
                                                <td>Laptop-03</td>
                                                <td>Julio</td>
                                                <td>23/05/2018</td>
                                                <td>25/05/2018</td>
                                                <td>DNI</td>
                                                <td><button class="btn btn-primary teal lighten-1  col s10 m10 l10">Devolver</button><td>
                                            </tr>
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
    </body>
</html>
