/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.daoimp;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import pe.edu.upeu.presup.dao.TrabajadorDao;
import pe.edu.upeu.presup.entity.Trabajador;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author Kevin Peinado
 */
public class TrabajadorDaoImp implements TrabajadorDao {

    private java.sql.CallableStatement cst;
    private ResultSet rs;
    private Connection cx;

    @Override
    public int create(Trabajador tr) {
       int x = 0;
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call crearTrabajador(?,?,?,?,?,?,?)}");
            cst.setString(1, tr.getNomTrabajador());
            cst.setString(2, tr.getApelTrabajador());
            cst.setString(3, tr.getDireccion());
            cst.setString(4, tr.getNumCelular());
            cst.setString(5, tr.getNumDni());
            cst.setString(6, tr.getEmail());
            cst.registerOutParameter(7, java.sql.Types.INTEGER);
            cst.executeUpdate();
            x= cst.getInt(7);
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return x;  }

   
   
}
