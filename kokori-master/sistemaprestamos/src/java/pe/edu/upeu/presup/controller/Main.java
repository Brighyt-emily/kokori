/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import pe.edu.upeu.presup.dao.UsuarioDao;
import pe.edu.upeu.presup.daoimp.UsuarioDaoImp;

/**
 *
 * @author Marco
 */
public class Main extends HttpServlet {

    private UsuarioDao ud = new UsuarioDaoImp();

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        int op = Integer.parseInt(request.getParameter("op"));
        HttpSession sesion = request.getSession();
        RequestDispatcher rd;
        ServletContext context = getServletContext();
        HashMap<String, Object> datos = new HashMap<>();
        datos = ud.validar(request.getParameter("user"), request.getParameter("pass"));
        switch (op) {
            case 1:
                if (datos.size() > 0) {
                    sesion.setAttribute("iduser", datos.get("idu"));
                    sesion.setAttribute("user", datos.get("user"));
                    String nombres = datos.get("nom") + " " + datos.get("apell");
                    sesion.setAttribute("nombres", nombres);
                    sesion.setAttribute("rol", datos.get("rol"));
                    sesion.setAttribute("idr", datos.get("irol"));
                    sesion.setAttribute("idt", datos.get("itra"));
                    System.out.println(datos);
                    rd = request.getRequestDispatcher("/menu");
                    rd.forward(request, response);
                } else {
                    rd = request.getRequestDispatcher("/login");
                    rd.forward(request, response);
                }
        }
    }
}
