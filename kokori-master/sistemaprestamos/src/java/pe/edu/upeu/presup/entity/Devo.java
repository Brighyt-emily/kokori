/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.entity;

/**
 *
 * @author EMILY
 */
public class Devo {
    private int iddevo;
    private String det;
    private int iddetapre;

    public Devo() {
    }

    public Devo(int iddevo, String det, int iddetapre) {
        this.iddevo = iddevo;
        this.det = det;
        this.iddetapre = iddetapre;
    }

    public Devo(String det, int iddetapre) {
        this.det = det;
        this.iddetapre = iddetapre;
    }

    public int getIddevo() {
        return iddevo;
    }

    public void setIddevo(int iddevo) {
        this.iddevo = iddevo;
    }

    public String getDet() {
        return det;
    }

    public void setDet(String det) {
        this.det = det;
    }

    public int getIddetapre() {
        return iddetapre;
    }

    public void setIddetapre(int iddetapre) {
        this.iddetapre = iddetapre;
    }


    
    
    
}
