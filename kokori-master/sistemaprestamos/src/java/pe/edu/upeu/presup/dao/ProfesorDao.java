/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.dao;

import java.util.List;
import java.util.Map;
import pe.edu.upeu.presup.entity.Escuela;
import pe.edu.upeu.presup.entity.Facultad;
import pe.edu.upeu.presup.entity.Profesor;

/**
 *
 * @author Kevin Peinado
 */
public interface ProfesorDao {

    int create(Profesor p);

    int update(Profesor p);

    int delete(int key);
    
    List<Map<String, Object>> listarRegisProfesores();
    
    List<Map<String, Object>> listarDescProfById(int key);
    
    List<Facultad> listFacultad();
    
    List<Escuela> listEscuelaByIdFacultad(int key);
    
    Profesor SearchDniprof(String x);
}
