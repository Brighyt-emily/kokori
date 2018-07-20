package pe.edu.upeu.presup.dao;

import java.util.HashMap;
import pe.edu.upeu.presup.entity.Usuario;

public interface UsuarioDao {
    
     int create(Usuario usu);
    
    HashMap<String,Object> validar(String x, String y);
}
