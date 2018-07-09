/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.dao;

import java.util.List;
import java.util.Map;

/**
 *
 * @author Kevin Peinado
 */
public interface ReservaDao {

    List<Map<String, Object>> validarProfesorByCodigo(String codigo);

    List<Map<String, Object>> listarProductosReserva();
    
    List<Map<String, Object>> selecionarProdById(int idProducto);
}
