/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.daoimp;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import pe.edu.upeu.presup.dao.PrestamoDetalleDao;
import pe.edu.upeu.presup.entity.DetallePrestamo;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author HP
 */

public class DetallePrestamoDaoImp implements PrestamoDetalleDao {
    private java.sql.CallableStatement cs;
    private ResultSet rs;
    private Connection cx;

    @Override
    public List<DetallePrestamo> readAll() {
   List<DetallePrestamo> datos = new ArrayList<>();
        try {
            cx = Conexion.getConexion();
            cs = cx.prepareCall("{call listarDetallePrestamo()}");
            rs = cs.executeQuery();
            while (rs.next()) {
                DetallePrestamo p = new  DetallePrestamo();
                 p.setId_detpres(rs.getInt("iddetalle_prestamo"));
                 p.setId_prestamo(rs.getInt("idprestamo"));
                p.setId_prod(rs.getInt("idproducto"));
                datos.add(p);
            }
        } catch (SQLException e) {
            System.out.println("ERROR: " + e);
        }
        return datos;   }

    @Override
    public boolean search(String dp) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    } 

    @Override
    public int create(DetallePrestamo p) {
        int x=0;
        try{
            cx= Conexion.getConexion();
            cs=cx.prepareCall("{call createDetallePrestamo(?)}");
            cs.setInt(1,p.getId_prod());
            x= cs.executeUpdate();
        }
        catch(SQLException e){
            System.out.println("Error"+e);
        }
        return x;
    }
}
