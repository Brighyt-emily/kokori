/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.daoimp;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import pe.edu.upeu.presup.entity.Devo;
import pe.edu.upeu.presup.dao.DevoDao;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author EMILY
 */
public class DevoDaoImp implements DevoDao{
    private java.sql.CallableStatement cst;
    private ResultSet rs;
    private Connection cx;

    @Override
    public int create(Devo d) {
        int x=0;
        try
        {
            cx= Conexion.getConexion();
            cst = cx.prepareCall("{call createDevolucion(?,?)}");
            cst.setString(1, d.getDet());
            cst.setInt(2, d.getIddetapre());
            x = cst.executeUpdate();
            
        }catch(SQLException e)
        {
            System.out.println("ERROR"+e);
        }
        return x;    }

   
    
}
