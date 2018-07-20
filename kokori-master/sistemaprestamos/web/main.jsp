<%-- 
    Document   : main
    Created on : 05/07/2018, 11:38:28 AM
    Author     : Dieguito
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page session="true"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Pasdfsdge</title>
       <%@include file="WEB-INF/template/header.jspf" %>
       

            
    </head>
    <body>  
        <%
         try{
             HttpSession sesion = request.getSession();
         if(sesion.getAttribute("idr")==null){
             response.sendRedirect("login.jsp");
         }
         else{
             String rol = sesion.getAttribute("idr").toString();
             if(!rol.equals("2")){
                 response.sendRedirect("login.jsp");
         }
            }
            }
         catch(Exception e){
             System.out.println("Error: "+e);
                 
                 }
            %>
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
        
        
       <%@include file="WEB-INF/template/footerMain.jspf" %>
    </body>
</html>
