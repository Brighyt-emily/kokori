
package pe.edu.upeu.presup.controller;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import pe.edu.upeu.presup.dao.PrestamoDao;
import pe.edu.upeu.presup.daoimp.PrestamoDaoImp;
import pe.edu.upeu.presup.entity.Prestamo;

public class PrestamoController extends HttpServlet {
    
    private PrestamoDao pr = new PrestamoDaoImp();
    private Gson g = new Gson();
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            int op = Integer.parseInt(request.getParameter("opc"));
             switch(op){
                 case 1:
                        Prestamo p =new Prestamo(request.getParameter("fec_pre"),
                                                 request.getParameter("alu"),
                                                 request.getParameter("fe_devo"),
                                                 request.getParameter("aula"),
                                                 Integer.parseInt(request.getParameter("prof")),
                                                 Integer.parseInt(request.getParameter("docu")),
                                                 Integer.parseInt(request.getParameter("user")));
                                     pr.create(p);
                 break;
                 case 2:
                     out.println(g.toJson(pr.readAll()));
                 break;
             }
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
