/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.daoimp;

import java.sql.Connection;
import java.sql.ResultSet;
import java.util.List;
import pe.edu.upeu.presup.dao.PrestamoDetalleDao;
import pe.edu.upeu.presup.entity.DetallePrestamo;
import pe.edu.upeu.presup.entity.Prestamo;

/**
 *
 * @author HP
 */

public class DetallePrestamoDaoImp implements PrestamoDetalleDao {
    private java.sql.CallableStatement cst;
    private ResultSet rs;
    private Connection cx;

    @Override
    public List<DetallePrestamo> readAll() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean search(String dp) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Prestamo read(int key) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    
    
}
