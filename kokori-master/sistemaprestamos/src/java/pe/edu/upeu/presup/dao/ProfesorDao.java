/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.dao;

import java.util.List;
import java.util.Map;
import pe.edu.upeu.presup.entity.Profesor;

/**
 *
 * @author Kevin Peinado
 */
public interface ProfesorDao {

    int create(Profesor p);

    int update(Profesor p);

    int delete(int key);

    Profesor read(int key);

    List<Profesor> readAll();
    
    List<Map<String, Object>> listarRegisProfesores();
}
