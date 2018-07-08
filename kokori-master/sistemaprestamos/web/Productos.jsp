<%-- 
    Document   : Productos
    Created on : 07/07/2018, 11:04:46 PM
    Author     : EMILY 
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
         <%@include file="WEB-INF/template/header.jspf" %>
    </head>
    <body>
         <%@include file="WEB-INF/template/Principal.jspf" %>
         <main class="mn-inner">
                <div class="row">
                  <div class="col s12 m12 l12">
                        <div class="page-title">Productos</div>
                    </div>
                    <div class="row">
            <div class="col s12">
            <div class="row">
            <div class="input-field col s12">
             <i class="material-icons prefix">search</i>
             <input type="text" id="autocomplete-input" class="autocomplete">
             <label for="autocomplete-input">Buscar por codigo</label>
                 </div>
             </div>
                 </div>
                 </div>
                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">
                                    <table class="table highlight centered" id="tablin">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>Nombre</th>
                                                <th>Código</th>
                                                <th>Estado</th>
                                                <th>Tipo</th>
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
   
    
    <%@include file="WEB-INF/template/footer.jspf" %>
    </body>
</html>
