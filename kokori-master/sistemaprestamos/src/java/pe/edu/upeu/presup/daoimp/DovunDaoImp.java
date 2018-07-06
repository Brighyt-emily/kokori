/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.daoimp;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import pe.edu.upeu.presup.dao.DovunDao;
import pe.edu.upeu.presup.entity.Prestamo;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author EMILY
 */
public class DovunDaoImp implements DovunDao {
    private java.sql.CallableStatement cst;
    private ResultSet rs;
    private Connection cx;
    @Override
    public int updatet(Prestamo p) {
        int x = 0;
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call updateDevoun(?)}");
            cst.setInt(1, p.getIdprestamo());
            x = cst.executeUpdate();
        } catch (SQLException e) {
            System.out.println("ERROR: "+e);
        }
        return x;       }
    
}
