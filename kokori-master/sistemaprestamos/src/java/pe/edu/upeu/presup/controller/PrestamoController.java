
package pe.edu.upeu.presup.controller;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import pe.edu.upeu.presup.dao.PrestamoDao;
import pe.edu.upeu.presup.dao.ProductoDao;
import pe.edu.upeu.presup.dao.ProfesorDao;
import pe.edu.upeu.presup.daoimp.PrestamoDaoImp;
import pe.edu.upeu.presup.daoimp.ProductoDaoImp;
import pe.edu.upeu.presup.daoimp.ProfesorDaoImp;
import pe.edu.upeu.presup.entity.Prestamo;

public class PrestamoController extends HttpServlet {
    
    private PrestamoDao pr = new PrestamoDaoImp();
    private ProductoDao pro = new ProductoDaoImp();
    private ProfesorDao prof = new ProfesorDaoImp();
    private Gson g = new Gson();
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            int op = Integer.parseInt(request.getParameter("opc"));
            HttpSession sesion = request.getSession();
             switch(op){
                 case 1:
                        Prestamo p =new Prestamo(request.getParameter("fec_pre"),
                                                 request.getParameter("alu"),
                                                 request.getParameter("fe_devo"),
                                                 request.getParameter("horaPre"),
                                                 request.getParameter("horadev"),
                                                 request.getParameter("aula"),
                                                 Integer.parseInt(request.getParameter("prof")),
                                                 Integer.parseInt(request.getParameter("docu")),
                                                 Integer.parseInt(request.getParameter("user")));
                                                 pr.create(p);
                 break;
                 case 2:
                     out.println(g.toJson(pr.readAll()));
                 break;
                 case 3:
                     out.println(g.toJson(pr.read(Integer.parseInt(request.getParameter("id")))));
                 break;
                 case 4:
                     out.println(g.toJson(pro.readAll()));
                 break;
                 case 5:
                     out.println(g.toJson(prof.SearchDniprof(request.getParameter("dni"))));     
                 break;
                 case 6:
                     out.println(g.toJson(pr.readDocument()));
                 break;
                 case 7:
                     out.println(g.toJson(pr.detalle(Integer.parseInt(request.getParameter("id")))));
                 break;
                 case 10:
                     out.println(g.toJson(pr.Reserva(Integer.parseInt(request.getParameter("idr")))));
                 break;
                 case 11:
                     out.println(g.toJson(pr.DetReserva(Integer.parseInt(request.getParameter("idd")))));
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
