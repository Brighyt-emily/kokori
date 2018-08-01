package pe.edu.upeu.presup.dao;

import java.util.HashMap;
import java.util.List;
import pe.edu.upeu.presup.entity.Usuario;

public interface UsuarioDao {
    
     int create(Usuario usu);
    
    HashMap<String,Object> validar(String x, String y);
    
    List<Usuario>listarNomUsuario();
    
    int CambiarEstadoUsuario(Usuario u);
    
    int updateUsuario(Usuario u);
}
