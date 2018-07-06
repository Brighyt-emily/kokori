<%-- 
    Document   : Prestamo
    Created on : 05/07/2018, 02:17:04 PM
    Author     : nicob
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Prestamo </title>
        <%@include file="WEB-INF/template/header.jspf" %>
    </head>
    <body>
        <%@include file="WEB-INF/template/Principal.jspf" %>
        <main class="mn-inner">
            <div class="card">
                <div class="card-content">
                    <div class="container">
                        <h3 class="center-align">Registro de Prestamo</h3><br>

                        <div class="row center">
                            <div class="input-field col s5">
                                <i class="material-icons prefix">person_pin</i>
                                <input disabled value="No editable" id="disabled" type="text" class="validate">
                                <label for="disabled">Usuario </label>
                            </div>
                        </div>
                        <div class="row center">
                            <div class="col s5">
                                <div class="input-field">
                                    <i class="material-icons prefix">assignment</i>
                                    <label for="dnipro">Ingrese DNI profesor</label>
                                    <input  id="dnipro" class="autocomplete" type="text" maxlength="8" name="dnipro" required>
                                </div>
                            </div>
                        </div>

                        <div class="row center">
                            <div class="col s5">
                                <div class="input-field">
                                    <i class="material-icons prefix">chrome_reader_mode</i>
                                    <label for="responsable">Responsable</label>
                                    <input type="text" name="responsable" id="responsable" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s5">
                                <div class="input-field">
                                    <i class="material-icons prefix">scanner</i>
                                    <label for="equipo">Equipo</label>
                                    <input type="text" name="equipo" id="equipo" class="autocompleteEquipo"  required>
                                </div>
                            </div>
                            <div class="col s5">
                                <a class="btn-floating btn-small waves-effect waves-light blue-grey"><i class="material-icons">search</i></a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s4">
                                <div class="input-field">
                                    <i class="material-icons prefix">pin_drop</i>
                                    <label for="aula">Aula</label>
                                    <input type="text" name="aula" required>
                                </div>
                            </div>
                            <div class="col s4">
                                <div class="input-field">
                                    <i class="material-icons prefix">insert_invitation</i>
                                    <label for="fecha">Fecha</label>
                                    <input type="text" name="fecha" required>
                                </div>
                            </div>
                            <div class="col s4">
                                <div class="input-field">
                                    <i class="material-icons prefix">access_time</i>
                                    <label for="hora">Hora</label>
                                    <input type="text" name="hora" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 right-align">
                                <a class="waves-effect waves-light btn-large red"><i class="material-icons right">block</i>Cancelar Prestamo</a>
                                <a class="waves-effect waves-light btn-large blue" onclick="M.toast({html: 'Se registro exitosamente <br>', classes: 'rounded'})"><i class="material-icons right">add_circle</i>Registrar</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <%@include file="WEB-INF/template/footer.jspf" %>
        <script src="js/prestamo.js" type="text/javascript"></script>
    </body>
</html>
