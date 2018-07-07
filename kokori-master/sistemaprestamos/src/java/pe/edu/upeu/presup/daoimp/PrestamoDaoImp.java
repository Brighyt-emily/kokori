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
import pe.edu.upeu.presup.dao.PrestamoDao;
import pe.edu.upeu.presup.entity.Prestamo;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author HP
 */

public class PrestamoDaoImp implements PrestamoDao {
    private java.sql.CallableStatement cs;
    private ResultSet rs;
    private Connection cx;

    @Override
    public int create(Prestamo p) {
        int x=0;
        try{
            cx= Conexion.getConexion();
            cs=cx.prepareCall("{call createPrestamo(?,?,?,?,?,?,?)}");
            cs.setString(1, p.getFe_prestamo());
            cs.setString(2, p.getNom_alumno());
            cs.setString(3, p.getFe_devolucion());
            cs.setString(4, p.getAula());
            cs.setInt(5, p.getId_profe());
            cs.setInt(6, p.getId_documento());
            cs.setInt(7, p.getId_user());
            x= cs.executeUpdate();
        }
        catch(SQLException e){
            System.out.println("Error"+e);
        }
        return x;
    }

    @Override
    public int update(Prestamo p) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Prestamo> readAll() {
        List<Prestamo> pre = new ArrayList<>();
        try {
            cx = Conexion.getConexion();
            cs = cx.prepareCall("{call ListarProductos}");
            
            rs = cs.executeQuery();
            while(rs.next()){
                Prestamo p = new Prestamo();
                p.setIdprestamo(rs.getInt(1));
                p.setEstado(rs.getInt(2));
                p.setFe_prestamo(rs.getString(3));
                p.setNom_alumno(rs.getString(4));
                p.setFe_devolucion(rs.getString(5));
                p.setAula(rs.getString(6));
                p.setId_profe(rs.getInt(7));
                p.setId_documento(rs.getInt(8));
                p.setId_user(rs.getInt(9));
                pre.add(p);
            }
        } catch (SQLException e) {
            System.out.println("Error: "+e);
        }
        return pre;   
    }

    @Override
    public boolean search(String p) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Prestamo read(int key) {
        Prestamo p = new Prestamo();
        try {
            cx = Conexion.getConexion();
            cs = cx.prepareCall("{call SearchPrestamo(?)}");
            cs.setInt(1, key); 
            rs = cs.executeQuery();
            while(rs.next()){
               p.setIdprestamo(rs.getInt(1));
                p.setEstado(rs.getInt(2));
                p.setFe_prestamo(rs.getString(3));
                p.setNom_alumno(rs.getString(4));
                p.setFe_devolucion(rs.getString(5));
                p.setAula(rs.getString(6));
                p.setId_profe(rs.getInt(7));
                p.setId_documento(rs.getInt(8));
                p.setId_user(rs.getInt(9));
               
            }
        } catch (SQLException e) {
            System.out.println("Error:"+ e);
        }
        return p;
    }
    
    
}
