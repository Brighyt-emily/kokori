package pe.edu.upeu.presup.daoimp;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import pe.edu.upeu.presup.dao.UsuarioDao;
import pe.edu.upeu.presup.util.Conexion;

public class UsuarioDaoImp implements UsuarioDao {

    private CallableStatement cst;
    private ResultSet rs;
    private Connection cx;

    @Override
    public HashMap<String, Object> validar(String x, String y) {
        HashMap<String, Object> map = new HashMap<>();
        try {
            cx = Conexion.getConexion();
            cst = cx.prepareCall("{call validarUser(?,?)}");
            cst.setString(1, x);
            cst.setString(2, y);
            rs = cst.executeQuery();
            while (rs.next()) {
                map.put("idu", rs.getInt(4));
                map.put("user", rs.getString(5));
                map.put("nom", rs.getString(2));
                map.put("apell", rs.getString(3));
                map.put("rol", rs.getString(7));
                map.put("irol", rs.getInt(6));
                map.put("itra", rs.getInt(1));
            }
        } catch (SQLException e) {
            System.out.println("Gran errror en : " + e);
        }
        return map;
    }

}
