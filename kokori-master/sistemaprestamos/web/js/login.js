$(function() {

            //loader inicio
                    "use strict";

                    var window_width = $(window).width();

                    /*Preloader*/
                    $(window).load(function() {
                        setTimeout(function() {
                            $('body').addClass('loaded');
                        }, 200);
                              
            //loader final                

                        $("#btnIngresar").click(function() {

                            var user = $("#username").val();
                            var contra = $("#password").val();


                            if (user === "emilyc" && contra === "123") {
                                

                                location = 'menu.jsp';
                                
                            } else {
                                var toastHTML = '<i class="material-icons small red-text ">do_not_disturb_on</i><span class="">Usuario y contraseña incorrectos!</span>';
                                M.toast({
                                    html: toastHTML
                                });
                                $("#username").val("");
                                $("#password").val("");
        
                               
                            }

                        });
                    });
});


