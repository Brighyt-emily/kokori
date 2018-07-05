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
import pe.edu.upeu.presup.dao.ProductoDao;
import pe.edu.upeu.presup.entity.Producto;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author HP
 */

public class ProductoDaoImp implements ProductoDao {
    private java.sql.CallableStatement cst;
    private ResultSet rs;
    private Connection cx;
    @Override
    public int create(Producto p) {
        int x=0;
        try
        {
            cx= Conexion.getConexion();
            cst = cx.prepareCall("{call createProducto(?,?,?,?)}");
            cst.setString(1, p.getNom());
            cst.setString(2, p.getCod());
            cst.setInt(3, p.getEst());
            cst.setInt(4, p.getiTip());
            x = cst.executeUpdate();

            
        }catch(SQLException e)
        {
            System.out.println("ERROR"+e);
        }
        return x;
    }

    @Override
    public int deleate(int key) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public int update(Producto p) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Producto read(Producto key) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Producto> readAll() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
