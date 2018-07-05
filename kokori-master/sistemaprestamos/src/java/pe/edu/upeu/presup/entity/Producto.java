/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.entity;


/**
 *
 * @author HP
 */
public class Producto {
    private int idP;
    private String nom;
    private String cod;
    private int est;
    private int iTip;

    public Producto() {
    }

    public Producto(int idP, String nom, String cod, int est, int iTip) {
        this.idP = idP;
        this.nom = nom;
        this.cod = cod;
        this.est = est;
        this.iTip = iTip;
    }

    public Producto(String nom, String cod, int est, int iTip) {
        this.nom = nom;
        this.cod = cod;
        this.est = est;
        this.iTip = iTip;
    }

    public int getIdP() {
        return idP;
    }

    public void setIdP(int idP) {
        this.idP = idP;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getCod() {
        return cod;
    }

    public void setCod(String cod) {
        this.cod = cod;
    }

    public int getEst() {
        return est;
    }

    public void setEst(int est) {
        this.est = est;
    }

    public int getiTip() {
        return iTip;
    }

    public void setiTip(int iTip) {
        this.iTip = iTip;
    }
    
    
    
    
    
    
}