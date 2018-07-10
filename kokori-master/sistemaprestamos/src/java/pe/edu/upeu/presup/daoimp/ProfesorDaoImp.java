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
import pe.edu.upeu.presup.dao.ProfesorDao;
import pe.edu.upeu.presup.entity.Escuela;
import pe.edu.upeu.presup.entity.Facultad;
import pe.edu.upeu.presup.entity.Profesor;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author Kevin Peinado
 */
public class ProfesorDaoImp implements ProfesorDao {

    private java.sql.CallableStatement cst;
    private ResultSet rs;
    private Connection cx;

    @Override
    public int create(Profesor p) {
        int x = 0;
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call createProfesor(?,?,?,?,?,?,?,?,?,?)}");
            cst.setString(1, p.getNomTrabajador());
            cst.setString(2, p.getApelTrabajador());
            cst.setString(3, p.getDireccion());
            cst.setString(4, p.getNumCelular());
            cst.setString(5, p.getNumDni());
            cst.setString(6, p.getEmail());
            cst.setInt(7, p.getEstado());
            cst.setString(8, p.getGrado());
            cst.setString(9, p.getCodProfesor());
            cst.setInt(10, p.getIdEscuela());
            x = cst.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return x;
    }

    @Override
    public int update(Profesor p) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public int delete(int key) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Map<String, Object>> listarRegisProfesores() {
        List<Map<String, Object>> lista = new ArrayList<>();
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call listarRegisProfesores()}");
            rs = cst.executeQuery();
            while (rs.next()) {
                Map<String, Object> map = new HashMap<>();
                map.put("idProfesor", rs.getInt("idprofesor"));
                map.put("idTrabajador", rs.getInt("idtrabajador"));
                map.put("idescuela", rs.getInt("idescuela"));
                map.put("nombres", rs.getString("nombres"));
                map.put("apellidos", rs.getString("apellidos"));
                map.put("dni", rs.getString("dni"));
                map.put("codigo", rs.getString("codigo"));
                map.put("escuela", rs.getString("nombre"));
                map.put("email", rs.getString("email"));
                lista.add(map);
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return lista;
    }

    @Override
    public List<Map<String, Object>> listarDescProfById(int key) {
        List<Map<String, Object>> lista = new ArrayList<>();
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call listarDescProfById(?)}");
            cst.setInt(1, key);
            rs = cst.executeQuery();
            while (rs.next()) {
                Map<String, Object> map = new HashMap<>();
                map.put("nombres", rs.getString("nombres"));
                map.put("apellidos", rs.getString("apellidos"));
                map.put("direccion", rs.getString("direccion"));
                map.put("numCelular", rs.getString("num_celular"));
                map.put("numDni", rs.getString("dni"));
                map.put("email", rs.getString("email"));
                map.put("estado", rs.getString("estado"));
                map.put("grado", rs.getString("grado"));
                map.put("nomEscuela", rs.getString("nombre"));
                map.put("nomFacultad", rs.getString("nombre"));
                map.put("idTrabajador", rs.getInt("idtrabajador"));
                map.put("idProfesor", rs.getInt("idprofesor"));
                map.put("idEscuela", rs.getInt("idescuela"));
                map.put("idFacultad", rs.getInt("idfacultad"));
                lista.add(map);
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return lista;
    }

    @Override
    public List<Facultad> listFacultad() {
        List<Facultad> list = new ArrayList<>();
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("call listFacultad()");
            rs = cst.executeQuery();
            while (rs.next()) {
                Facultad f = new Facultad();
                f.setIdFacultad(rs.getInt("idfacultad"));
                f.setNomFacultad(rs.getString("nombre"));
                list.add(f);
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return list;
    }

    @Override
    public List<Escuela> listEscuelaByIdFacultad(int key) {
        List<Escuela> list = new ArrayList<>();
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call listEscuelaByIdFacultad(?)}");
            cst.setInt(1, key);
            rs = cst.executeQuery();
            while (rs.next()) {
                Escuela e = new Escuela();
                e.setIdEscuela(rs.getInt("idescuela"));
                e.setIdFacultad(rs.getInt("idfacultad"));
                e.setNomEscuela(rs.getString("nombre"));
                list.add(e);
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return list;
    }

    @Override
    public Profesor SearchDniprof(String x) {
        Profesor p = new Profesor();
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call SearchDniProf(?)}");
            cst.setString(1, x);
            rs = cst.executeQuery();
            while(rs.next()){
                p.setIdProfesor(rs.getInt(1));
                p.setNomApe(rs.getString(2));
                
            }
        } catch (SQLException e) {
            System.out.println("Error: "+e);
        }
        return p;
    }

}
