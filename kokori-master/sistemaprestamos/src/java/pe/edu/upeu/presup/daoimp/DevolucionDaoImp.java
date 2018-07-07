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
import pe.edu.upeu.presup.dao.DevolucionDao;
import pe.edu.upeu.presup.entity.Devolucion;
import pe.edu.upeu.presup.entity.Prestamo;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author EMILY
 */
public class DevolucionDaoImp implements DevolucionDao{
    private java.sql.CallableStatement cst;
    private ResultSet rs;
    private Connection cx;
    @Override
    public int delete(int key) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Devolucion> readAll() {
          List<Devolucion> datos=new ArrayList<>();
        try
        {
            cx=Conexion.getConexion();
            cst=cx.prepareCall("{call listarDetallePrestamo()}");
            rs=cst.executeQuery();
            while(rs.next())
            {
                Devolucion p=new Devolucion();
                Prestamo pres=new Prestamo();
                p.setNom(rs.getString("nombres"));
                p.setApe(rs.getString("apellidos"));
                p.setCodi(rs.getString("codigo"));
                p.setEst(rs.getInt("estado"));
                p.setFed(rs.getString("fe_devolucion"));
                p.setFep(rs.getString("fe_prestamo"));
                p.setNo(rs.getString("nombre"));
<<<<<<< HEAD
                p.setNom_tip(rs.getString("nom_tipo"));
                

=======
                p.setNoTipo(rs.getString("nom_tipo"));
<<<<<<< HEAD
                p.setIdprestamo(rs.getInt("idprestamo"));
=======
>>>>>>> 21568a7e38981306c81dab3ee76f58f423f22ff6
>>>>>>> 6df3122703164ec15b992424a2e7f6359d2f5a1d
                datos.add(p);
                
            }
        }catch(SQLException e)
        {
            System.out.println("ERROR: "+e);
        }
        return datos;
    }

    @Override
    public int update(Prestamo p) {
        int x = 0;
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call updatePrestamo(?,?)}");
            cst.setInt(1, p.getIdprestamo());
            cst.setInt(2, p.getEstado());
            x = cst.executeUpdate();
        } catch (SQLException e) {
            System.out.println("ERROR: "+e);
        }
        return x;      
    }
    }
    

