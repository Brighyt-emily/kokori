package pe.edu.upeu.presup.dao;

import java.util.HashMap;

public interface UsuarioDao {
    HashMap<String,Object> validar(String x, String y);
}
