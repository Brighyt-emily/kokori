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
import pe.edu.upeu.presup.entity.Tipo;
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
                p.setNom(rs.getString("nombres"));
                p.setApe(rs.getString("apellidos"));
                p.setCodi(rs.getString("codigo"));
                p.setEst(rs.getInt("estado"));
                p.setFed(rs.getString("fe_devolucion"));
                p.setFep(rs.getString("fe_prestamo"));
                p.setNo(rs.getString("nombre"));
                p.setNoTipo(rs.getString("nom_tipo"));
                p.setIdprestamo(rs.getInt("idprestamo"));
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

    @Override
    public List<Devolucion> ListarByTipo(String tipo) {
        List<Devolucion> d=new ArrayList<>();
       
        try {
            
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call ListarPorTipo(?)}");
            cst.setString(1, tipo);
            rs = cst.executeQuery();
            while(rs.next()){
                Devolucion dev = new Devolucion();
                dev.setNom(rs.getString("nombres"));
                dev.setApe(rs.getString("apellidos"));
                dev.setCodi(rs.getString("codigo"));
                dev.setEst(rs.getInt("estado"));
                dev.setFed(rs.getString("fe_devolucion"));
                dev.setFep(rs.getString("fe_prestamo"));
                dev.setNo(rs.getString("nombre"));
                dev.setNoTipo(rs.getString("nom_tipo"));
                dev.setIdprestamo(rs.getInt("idprestamo"));
                d.add(dev);
            }
        } catch (SQLException e) {
            System.out.println("Error: "+e);
        }
        return d;
    }

    @Override
    public List<Tipo> listarTipo() {
        List<Tipo> tip=new ArrayList<>();
        try{
            cx= Conexion.getConexion();
            cst=cx.prepareCall("{call listarTipo()}");
            rs=cst.executeQuery();
            while(rs.next()){
                Tipo ti=new Tipo();
                ti.setIdTipo(rs.getInt("idtipo"));
                ti.setNoTipo(rs.getString("nom_tipo")); 
                tip.add(ti);
            }
        }catch(SQLException e){
            System.out.println("Error: "+e);
        }
        
        return tip;
    }
    }
    

