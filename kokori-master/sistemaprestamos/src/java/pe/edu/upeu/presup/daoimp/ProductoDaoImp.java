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
        int x = 0;
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call createProducto(?,?,?,?)}");
            cst.setString(1, p.getNom());
            cst.setString(2, p.getCod());
            cst.setInt(3, p.getEst());
            cst.setInt(4, p.getiTip());
            x = cst.executeUpdate();

        } catch (SQLException e) {
            System.out.println("ERROR" + e);
        }
        return x;
    }

    @Override
    public int deleate(int key) {
        int x = 0;
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call deleteProducto(?)}");
            cst.setInt(1, key);
            x = cst.executeUpdate();
        } catch (SQLException e) {
            System.out.println("ERROR: " + e);
        }
        return x;
    }

    @Override
    public int update(Producto p) {
        int x = 0;
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call updateProducto(?,?)}");
            cst.setInt(1, p.getIdP());
            cst.setInt(2, p.getEst());
            x = cst.executeUpdate();
        } catch (SQLException e) {
            System.out.println("ERROR: " + e);
        }
        return x;
    }

    @Override
    public Producto read(int key) {
        Producto p = new Producto();
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call searchId(?)}");
            cst.setInt(1, key);
            rs = cst.executeQuery();
            while(rs.next()){
                
               p.setIdP(rs.getInt("idproducto"));                
               p.setNom(rs.getString("nombre"));                
               p.setCod(rs.getString("codigo"));
               p.setEst(rs.getInt("estado"));
               p.setiTip(rs.getInt("idtipo"));
            }
        } catch (SQLException e) {
            System.out.println("ERROR:"+ e);
        }
        //call searchId(4);
        return p;           }

    @Override
    public List<Producto> readAll() {
        List<Producto> datos = new ArrayList<>();
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call listarProducto()}");
            rs = cst.executeQuery();
            while (rs.next()) {
                Producto p = new Producto();
                p.setIdP(rs.getInt("idproducto"));
                p.setNom(rs.getString("nombre"));
                p.setCod(rs.getString("codigo"));
                p.setEst(rs.getInt("estado"));
                p.setiTip(rs.getInt("idtipo"));
                p.setNomTip(rs.getString("nom_tipo"));
                p.setStock(rs.getInt("stock"));
                datos.add(p);
            }
        } catch (SQLException e) {
            System.out.println("ERROR: " + e);
        }
        return datos;
    }

    @Override
    public int crea(Producto p) {
        int x = 0;
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call createTipo(?)}");
            cst.setString(1, p.getNomTip());
            x = cst.executeUpdate();

        } catch (SQLException e) {
            System.out.println("ERROR" + e);
        }
        return x; }

}
