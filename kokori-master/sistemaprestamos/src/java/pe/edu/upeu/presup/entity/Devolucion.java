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
public class Devolucion extends Tipo{
    private String nom;
    private String  ape;
    private String codi;
    private String fep;
    private String fed;
    private int est;
    private String no;
<<<<<<< HEAD
    private int idprestamo;
=======
    private String nom_tip;
>>>>>>> 6df3122703164ec15b992424a2e7f6359d2f5a1d

    public Devolucion(String nom, String ape, String codi, String fep, String fed, int est, String no, int idprestamo, int idTipo, String noTipo) {
        super(idTipo, noTipo);
        this.nom = nom;
        this.ape = ape;
        this.codi = codi;
        this.fep = fep;
        this.fed = fed;
        this.est = est;
        this.no = no;
        this.idprestamo = idprestamo;
    }

<<<<<<< HEAD
    public Devolucion(String nom, String ape, String codi, String fep, String fed, int est, String no, int idprestamo, String noTipo) {
=======
    public Devolucion() {
    }

<<<<<<< HEAD
    public Devolucion(String nom, String ape, String codi, String fep, String fed, int est, String no, String nom_tip) {
=======
    public Devolucion(String nom, String ape, String codi, String fep, String fed, int est, String no, String noTipo) {
>>>>>>> 6df3122703164ec15b992424a2e7f6359d2f5a1d
        super(noTipo);
>>>>>>> 21568a7e38981306c81dab3ee76f58f423f22ff6
        this.nom = nom;
        this.ape = ape;
        this.codi = codi;
        this.fep = fep;
        this.fed = fed;
        this.est = est;
        this.no = no;
<<<<<<< HEAD
        this.idprestamo = idprestamo;
    }

    public Devolucion() {
=======
        this.nom_tip = nom_tip;
>>>>>>> 6df3122703164ec15b992424a2e7f6359d2f5a1d
    }

    public String getNom_tip() {
        return nom_tip;
    }

    public void setNom_tip(String nom_tip) {
        this.nom_tip = nom_tip;
    }

    

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getApe() {
        return ape;
    }

    public void setApe(String ape) {
        this.ape = ape;
    }

    public String getCodi() {
        return codi;
    }

    public void setCodi(String codi) {
        this.codi = codi;
    }

    public String getFep() {
        return fep;
    }

    public void setFep(String fep) {
        this.fep = fep;
    }

    public String getFed() {
        return fed;
    }

    public void setFed(String fed) {
        this.fed = fed;
    }

    public int getEst() {
        return est;
    }

    public void setEst(int est) {
        this.est = est;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public int getIdprestamo() {
        return idprestamo;
    }

    public void setIdprestamo(int idprestamo) {
        this.idprestamo = idprestamo;
    }

    

}