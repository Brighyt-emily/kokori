/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.edu.upeu.presup.test;

import com.google.gson.Gson;
import pe.edu.upeu.presup.dao.DevoDao;
import pe.edu.upeu.presup.dao.DevolucionDao;
import pe.edu.upeu.presup.dao.ProductoDao;
import pe.edu.upeu.presup.dao.TipoDao;
import pe.edu.upeu.presup.daoimp.DevoDaoImp;
import pe.edu.upeu.presup.daoimp.DevolucionDaoImp;
import pe.edu.upeu.presup.daoimp.ProductoDaoImp;
import pe.edu.upeu.presup.daoimp.TipoDaoImp;
import pe.edu.upeu.presup.entity.Devo;
import pe.edu.upeu.presup.entity.Producto;
import pe.edu.upeu.presup.entity.Tipo;
import static pe.edu.upeu.presup.test.Test.conexion;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author Kevin Peinado
 */
public class Test {
    static ProductoDao ko=new ProductoDaoImp();
    static Gson g=new Gson();
    static DevolucionDao kop=new DevolucionDaoImp();
    static TipoDao i=new TipoDaoImp();
    static DevoDao po=new DevoDaoImp();
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        //conexion();
        create();
        //listar();
        //delete();
    }

    static void conexion() {
        if (Conexion.getConexion() != null) {
            System.out.println("Conexion Correcta Pero eso no quiere decir dejas de ser un fracasado :v ");
        } else {
            System.out.println("Conexion Incorrecta Iguales eres un fracaso :v");
        }
    }
    static void create()
    {
        Devo p= new Devo("LOCURA",2);
        if(po.create(p)>0)
        {
            System.out.println("c:");
        }else
        {
            System.out.println(":c");
        }
    }
    static void listar()
    {
        System.out.println(g.toJson(kop.readAll()));

    }
    static void delete()
    {
        g.toJson(ko.deleate(10));
        
    }


}
