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
        <%@include file="WEB-INF/template/headerMain.jspf"%>
    </head>
    <body>
        <div class="row">
                <nav class="nav-title s12 m12 l12 blue-grey"></nav>
        </div>
        <div class="container">
            
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
    <%@include file="WEB-INF/template/footerMain.jspf" %>
    </body>
</html>
