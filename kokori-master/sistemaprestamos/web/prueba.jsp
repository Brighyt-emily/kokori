<%-- 
    Document   : prueba
    Created on : 09-jul-2018, 11:49:44
    Author     : dieguito
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
                    <div class="col s12">
                        <div class="page-title">Titulo de Caso</div>
                    </div>
                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">
                               
                                <!--Modal-->
                                <!-- Modal Trigger -->
                                <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

                                <!-- Modal Structure -->
                                <div id="modal1" class="modal">
                                    <div class="modal-content">
                                        <h4>Modal Header</h4>
                                        <p>A bunch of text</p>
                                    </div>
                                    <div class="modal-footer">
                                        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                                    </div>
                                </div>
                                
                                
                                
                                <!--DataPicker-->
                                
                                <input type="date" id="fecha" class="datepicker">
	          		<label for="fecha">Elige la fecha</label>
                                   <!--toas botom-->
                                 <a class="btn" onclick="Materialize.toast('I am a toast', 4000)">Toast!</a>
                                 <a class="btn" onclick="toast();" id="">Toast k¿jquery</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
           <!--FIN Contenido-->
        </div>
        <div class="left-sidebar-hover"></div>
  
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

        <%@include file="WEB-INF/template/footer.jspf" %>
        <script src="js/pruebas.js" type="text/javascript"></script>
 <script>alert("sdfdsf");</script>
        
        
    </body>
</html>
