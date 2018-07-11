/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.dao;

import java.util.List;
import pe.edu.upeu.presup.entity.Devolucion;
import pe.edu.upeu.presup.entity.Prestamo;
import pe.edu.upeu.presup.entity.Producto;
import pe.edu.upeu.presup.entity.Tipo;

/**
 *
 * @author EMILY
 */
public interface DevolucionDao {
    int delete (int key);
    List<Devolucion> readAll();
    int update(Prestamo p);
    List<Devolucion> ListarByTipo(String tipo);
    List<Tipo>listarTipo();
    List<Producto> ListarProductosByFecha(String fe,String nom,String ape);
}
