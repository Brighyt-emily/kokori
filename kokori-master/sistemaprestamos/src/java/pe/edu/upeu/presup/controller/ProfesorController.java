/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.controller;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import pe.edu.upeu.presup.dao.ProfesorDao;
import pe.edu.upeu.presup.daoimp.ProfesorDaoImp;
import pe.edu.upeu.presup.entity.Profesor;

/**
 *
 * @author Kevin Peinado
 */
public class ProfesorController extends HttpServlet {

    private ProfesorDao myProf = new ProfesorDaoImp();
    private Gson g = new Gson();

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        int op = Integer.parseInt(request.getParameter("op"));
        switch (op) {
            case 1:
                out.println(g.toJson(myProf.listarRegisProfesores()));
                break;
            case 2:
                int idProfesor = Integer.parseInt(request.getParameter("idp"));
                out.println(g.toJson(myProf.listarDescProfById(idProfesor)));
                break;
            case 3:
                int idFacultad = Integer.parseInt(request.getParameter("idf"));
                out.println(g.toJson(myProf.listEscuelaByIdFacultad(idFacultad)));
                break;
            case 4:
                //declaramos varibales
                String nombres = request.getParameter("nombres");
                String apellidos = request.getParameter("apellidos");
                String direccion = request.getParameter("direccion");
                String numCelular = request.getParameter("celular");
                String numDni = request.getParameter("dni");
                String email = request.getParameter("email");
                int estado = Integer.parseInt(request.getParameter("estado"));
                String grado = request.getParameter("grado");
                String codigo = request.getParameter("codigo");
                int idEscuela = Integer.parseInt(request.getParameter("escuela"));
                //creamos el objeto p
                Profesor p = new Profesor(estado, grado, codigo, idEscuela, nombres, apellidos, direccion, numCelular, numDni, email);
                out.println(g.toJson(myProf.create(p)));
                break;
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
