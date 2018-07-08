/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.daoimp;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import pe.edu.upeu.presup.dao.ReservaDao;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author Kevin Peinado
 */
public class ReservaDaoImp implements ReservaDao {

    private CallableStatement cst;
    private ResultSet rs;
    private Connection cx;

    @Override
    public List<Map<String, Object>> validarProfesorByCodigo(String codigo) {
        List<Map<String, Object>> lista = new ArrayList<>();
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call validarProfesorByCodigo(?)}");
            cst.setString(1, codigo);
            rs = cst.executeQuery();
            while (rs.next()) {
                Map<String, Object> map = new HashMap<>();
                map.put("idTrabajador", rs.getInt("idtrabajador"));
                map.put("nombres", rs.getString("nombres"));
                map.put("apellidos", rs.getString("apellidos"));
                map.put("idProfesor", rs.getInt("idprofesor"));
                map.put("codigo", rs.getString("codigo"));
                lista.add(map);
            }

        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return lista;
    }

}
