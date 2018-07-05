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
public class DetallePrestamo {
    int id_detpres;
    int id_prestamo;
    int id_prod;
    int cantidad;
    

    public DetallePrestamo() {
    }
    
    
    
    public int getId_prestamo() {
        return id_prestamo;
    }

    public void setId_prestamo(int id_prestamo) {
        this.id_prestamo = id_prestamo;
    }

    public int getId_prod() {
        return id_prod;
    }

    public void setId_prod(int id_prod) {
        this.id_prod = id_prod;
    }
    public DetallePrestamo(int id_detpres) {
        this.id_detpres = id_detpres;
    }

    public DetallePrestamo(int id_detpres, int cantidad) {
        this.id_detpres = id_detpres;
        this.cantidad = cantidad;
    }

    public int getId_detpres() {
        return id_detpres;
    }

    public void setId_detpres(int id_detpres) {
        this.id_detpres = id_detpres;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
    
    
    
}
