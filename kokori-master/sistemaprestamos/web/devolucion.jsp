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

    <!--INICIO Contenido -->
    <main class="mn-inner">
        <div class="row">
            <div class="col s12 m12 l12">
                    <div class="page-title">Devolucion</div>
            </div>
            <div class=" col s12 m12 l12">
                <select class="browser-default col s3 m3 l3" id="tipo">
                    <option disabled="disabled">Buscar por Tipo</option>
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
                            <th>Productos</th>
                        </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table> 
                    </div>

                    
                    <div class="col s12">
            <div class="row">
            <div class="input-field col s12">
             <i class="material-icons prefix">search</i>
             <input type="text" id="autocomplete-input" class="autocomplete" style="width: 220px" placeholder="Buscar...">             
                 </div>
             </div>
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
                                                <th>Productos</th>
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
  <!-- Modal Structure -->
 <div id="modal1" class="modal s12 m12 l12" style="max-width: 350px;">
                <div class="modal-content">
                    <h5>Productos</h5>
                  <form action="#">
    <p>
      <label>
        <input type="checkbox" />
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" checked="checked" />
        <span>Yellow</span>
      </label>
    </p>
   

  </form>
                </div>
                <div class="modal-footer">
                  <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>
                </div>
 </div>

              
        <div class="left-sidebar-hover"></div>
                </div>                   
            </div>
        </div>
    </main>
    <!--FIN Contenido-->
    
    <!-- Modal Structure -->
    <div id="modal1" class="modal s12 m12 l12" style="max-width: 350px;">
        <div class="modal-content">
        <h5>Productos</h5>
    <form action="#">
        <p>
          <label>
            <input type="checkbox" />
            <span>Red</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" checked="checked" />
            <span>Yellow</span>
          </label>
        </p>
    </form>
    </div>
        <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>
        </div>
    </div> 
    <div class="left-sidebar-hover"></div>

    <%@include file="WEB-INF/template/footer.jspf" %>
        <script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js">
            
        </script>
        <script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/dataTables.material.min.js"></script>
    <script src="js/devolucion.js" type="text/javascript"></script>
    </body>
</html>
