/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.entity;

/**
 *
 * @author nicob
 */
public class Prestamo {
    int idprestamo;
    int estado;
    String fe_prestamo;
    String nom_alumno;
    String fe_devolucion;
    String aula;

    public Prestamo() {
    }

    public Prestamo(int idprestamo, int estado, String fe_prestamo, String nom_alumno, String fe_devolucion, String aula) {
        this.idprestamo = idprestamo;
        this.estado = estado;
        this.fe_prestamo = fe_prestamo;
        this.nom_alumno = nom_alumno;
        this.fe_devolucion = fe_devolucion;
        this.aula = aula;
    }
    
    public Prestamo(int estado, String fe_prestamo, String nom_alumno, String fe_devolucion, String aula) {
        this.estado = estado;
        this.fe_prestamo = fe_prestamo;
        this.nom_alumno = nom_alumno;
        this.fe_devolucion = fe_devolucion;
        this.aula = aula;
    }

    public int getIdprestamo() {
        return idprestamo;
    }

    public void setIdprestamo(int idprestamo) {
        this.idprestamo = idprestamo;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public String getFe_prestamo() {
        return fe_prestamo;
    }

    public void setFe_prestamo(String fe_prestamo) {
        this.fe_prestamo = fe_prestamo;
    }

    public String getNom_alumno() {
        return nom_alumno;
    }

    public void setNom_alumno(String nom_alumno) {
        this.nom_alumno = nom_alumno;
    }

    public String getFe_devolucion() {
        return fe_devolucion;
    }

    public void setFe_devolucion(String fe_devolucion) {
        this.fe_devolucion = fe_devolucion;
    }

    public String getAula() {
        return aula;
    }

    public void setAula(String aula) {
        this.aula = aula;
    }
    
    
    
    
    
}
