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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import pe.edu.upeu.presup.dao.TrabajadorDao;
import pe.edu.upeu.presup.entity.Escuela;
import pe.edu.upeu.presup.entity.Facultad;
import pe.edu.upeu.presup.entity.Profesor;
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
            cst = cx.prepareCall("{call crearTrabajador(?,?,?,?,?,?)}");
            cst.setInt(1, tr.getIdTrabajador());
            cst.setString(2, tr.getNomTrabajador());
            cst.setString(3, tr.getApelTrabajador());
            cst.setString(4, tr.getDireccion());
            cst.setString(5, tr.getNumCelular());
            cst.setString(6, tr.getNumDni());
            cst.setString(7, tr.getEmail());
            x = cst.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return x;  }

   
   
}
