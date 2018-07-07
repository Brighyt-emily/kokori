<%-- 
    Document   : login
    Created on : 4-lug-2018, 15.51.29
    Author     : CRIRI
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
    <body style="background-image: url('images/fondologin.png'); background-repeat: no-repeat;
    background-size:100% 100%;">
         <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
        </div>

        
        <div class="mn-content valign-wrapper">
            <main class="mn-inner container">
                <div class="valign">
                      <div class="row">
                          <div class="col s12 m6 l4 offset-l4 offset-m3">
                              <div class="card white darken-1">
                                  <div class="card-content ">
                                      <span class="card-title">Sign In</span>
                                       <div class="row">
                                           <form class="col s12">
                                               <div class="input-field col s12">                                                   
                                                   <input id="username" type="text" class="validate">
                                                   <label for="username">                                                                                                                 
                                                    Usuario</label>
                                               </div>
                                               <div class="input-field col s12">
                                                   <input id="password" type="password" class="validate">
                                                   <label for="password">Contraseña</label>
                                               </div>
                                               <div class="row">
                                                   <div class="input-field col s12">
                                                       <a class="btn  waves-light col s12 " id="btnIngresar">Ingresar</a>
                                                   </div>
                                               </div>
                                           </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    </div>
                </div>
            </main>
        </div>                
        <%@include file="WEB-INF/template/footer.jspf" %>
        <script src="js/login.js" type="text/javascript"></script>
    </body>
</html>
