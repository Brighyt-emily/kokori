/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.dao;

import java.util.List;
import pe.edu.upeu.presup.entity.DetallePrestamo;



/**
 *
 * @author HP
 */
public interface PrestamoDetalleDao {
    List<DetallePrestamo> readAll();
    int create(DetallePrestamo p);
    boolean search(String dp);
    
  }
