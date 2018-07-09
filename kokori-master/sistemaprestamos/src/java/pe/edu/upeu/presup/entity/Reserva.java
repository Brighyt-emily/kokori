/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.entity;

import java.sql.Date;



/**
 *
 * @author Kevin Peinado
 */
public class Reserva {
    
    private int idReserva;
    private int estado;
    private Date fe_reserva;
    private Date fe_devolucion;
    private String aula;
    private int idProfesor;
    private Date fe_prestamo;
    private String h_devolucion;
    private String h_prestamo;

    public Reserva() {
    }

    public Reserva(int estado, Date fe_reserva, Date fe_devolucion, String aula, int idProfesor, Date fe_prestamo, String h_devolucion, String h_prestamo) {
        this.estado = estado;
        this.fe_reserva = fe_reserva;
        this.fe_devolucion = fe_devolucion;
        this.aula = aula;
        this.idProfesor = idProfesor;
        this.fe_prestamo = fe_prestamo;
        this.h_devolucion = h_devolucion;
        this.h_prestamo = h_prestamo;
    }

    public Reserva(int idReserva, int estado, Date fe_reserva, Date fe_devolucion, String aula, int idProfesor, Date fe_prestamo, String h_devolucion, String h_prestamo) {
        this.idReserva = idReserva;
        this.estado = estado;
        this.fe_reserva = fe_reserva;
        this.fe_devolucion = fe_devolucion;
        this.aula = aula;
        this.idProfesor = idProfesor;
        this.fe_prestamo = fe_prestamo;
        this.h_devolucion = h_devolucion;
        this.h_prestamo = h_prestamo;
    }

    public int getIdReserva() {
        return idReserva;
    }

    public void setIdReserva(int idReserva) {
        this.idReserva = idReserva;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public Date getFe_reserva() {
        return fe_reserva;
    }

    public void setFe_reserva(Date fe_reserva) {
        this.fe_reserva = fe_reserva;
    }

    public Date getFe_devolucion() {
        return fe_devolucion;
    }

    public void setFe_devolucion(Date fe_devolucion) {
        this.fe_devolucion = fe_devolucion;
    }

    public String getAula() {
        return aula;
    }

    public void setAula(String aula) {
        this.aula = aula;
    }

    public int getIdProfesor() {
        return idProfesor;
    }

    public void setIdProfesor(int idProfesor) {
        this.idProfesor = idProfesor;
    }

    public Date getFe_prestamo() {
        return fe_prestamo;
    }

    public void setFe_prestamo(Date fe_prestamo) {
        this.fe_prestamo = fe_prestamo;
    }

    public String getH_devolucion() {
        return h_devolucion;
    }

    public void setH_devolucion(String h_devolucion) {
        this.h_devolucion = h_devolucion;
    }

    public String getH_prestamo() {
        return h_prestamo;
    }

    public void setH_prestamo(String h_prestamo) {
        this.h_prestamo = h_prestamo;
    }

    @Override
    public String toString() {
        return "reserva{" + "idReserva=" + idReserva + ", estado=" + estado + ", fe_reserva=" + fe_reserva + ", fe_devolucion=" + fe_devolucion + ", aula=" + aula + ", idProfesor=" + idProfesor + ", fe_prestamo=" + fe_prestamo + ", h_devolucion=" + h_devolucion + ", h_prestamo=" + h_prestamo + '}';
    }  
            
}
