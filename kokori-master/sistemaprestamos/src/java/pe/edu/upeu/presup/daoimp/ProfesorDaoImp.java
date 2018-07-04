/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.daoimp;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import pe.edu.upeu.presup.dao.ProfesorDao;
import pe.edu.upeu.presup.entity.Profesor;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author Kevin Peinado
 */
public class ProfesorDaoImp implements ProfesorDao {

    private java.sql.CallableStatement cst;
    private ResultSet rs;
    private Connection cx;

    @Override
    public int create(Profesor p) {
        int x = 0;
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call createProfesor(?,?,?,?,?,?,?,?,?,?)}");
            cst.setString(1, p.getNomTrabajador());
            cst.setString(2, p.getApelTrabajador());
            cst.setString(3, p.getDireccion());
            cst.setString(4, p.getNumCelular());
            cst.setString(5, p.getNumDni());
            cst.setString(6, p.getEmail());
            cst.setInt(7, p.getEstado());
            cst.setString(8, p.getGrado());
            cst.setString(9, p.getCodProfesor());
            cst.setInt(10, p.getIdEscuela());
            x = cst.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return x;
    }

    @Override
    public int update(Profesor p) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public int delete(int key) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Profesor read(int key) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Profesor> readAll() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
