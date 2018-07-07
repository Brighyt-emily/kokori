/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.daoimp;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import pe.edu.upeu.presup.dao.TipoDao;
import pe.edu.upeu.presup.entity.Tipo;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author EMILY
 */
public class TipoDaoImp implements TipoDao{
private java.sql.CallableStatement cst;
    private ResultSet rs;
    private Connection cx;
    @Override
    public int create(Tipo t) {
         int x=0;
        try
        {
            cx= Conexion.getConexion();
            cst = cx.prepareCall("{call createTipo(?)}");
<<<<<<< HEAD
            cst.setString(1, t.getNom());
=======
            cst.setString(1, t.getNoTipo());
>>>>>>> 21568a7e38981306c81dab3ee76f58f423f22ff6
            x = cst.executeUpdate();
            
        }catch(SQLException e)
        {
            System.out.println("ERROR"+e);
        }
        return x;
    }
    
}
