package pe.edu.upeu.presup.test;

import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import pe.edu.upeu.presup.dao.DevoDao;
import pe.edu.upeu.presup.dao.DevolucionDao;
import pe.edu.upeu.presup.dao.PrestamoDao;
import pe.edu.upeu.presup.dao.ProductoDao;
import pe.edu.upeu.presup.dao.ProfesorDao;
import pe.edu.upeu.presup.dao.TipoDao;
import pe.edu.upeu.presup.dao.UsuarioDao;
import pe.edu.upeu.presup.daoimp.DevoDaoImp;
import pe.edu.upeu.presup.daoimp.DevolucionDaoImp;
import pe.edu.upeu.presup.daoimp.PrestamoDaoImp;
import pe.edu.upeu.presup.daoimp.ProductoDaoImp;
import pe.edu.upeu.presup.daoimp.ProfesorDaoImp;
import pe.edu.upeu.presup.daoimp.TipoDaoImp;
import pe.edu.upeu.presup.daoimp.UsuarioDaoImp;
import pe.edu.upeu.presup.entity.Devon;
import pe.edu.upeu.presup.entity.Prestamo;
import pe.edu.upeu.presup.entity.Producto;
import pe.edu.upeu.presup.entity.Profesor;
import pe.edu.upeu.presup.entity.Tipo;
import pe.edu.upeu.presup.entity.Usuario;
import static pe.edu.upeu.presup.test.Test.conexion;
import pe.edu.upeu.presup.util.Conexion;

/**
 *
 * @author Kevin Peinado
 */
public class Test {

    static ProductoDao ko = new ProductoDaoImp();
    static Gson g = new Gson();
    static DevolucionDao kop = new DevolucionDaoImp();
    static TipoDao i = new TipoDaoImp();
    static DevoDao po = new DevoDaoImp();
    static UsuarioDao us = new UsuarioDaoImp();
    static ProfesorDao pr=new ProfesorDaoImp();
    static PrestamoDao psr=new PrestamoDaoImp();
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
       conexion();
        //create();
      //listar();
        //delete();
        //update();
        //update();
       // validar();
       //create();
        //listar();
        //delete();
        //update();
        //ate();
        //validar();
        //read();
        //jip();
        //nop();
    }
    static void listar(){
        System.out.println(g.toJson(kop.listarDevolucion()));
    }

    static void conexion() {
        if (Conexion.getConexion() != null) {
            System.out.println("Conexion Correcta Pero eso no quiere decir dejas de ser un fracasado :v ");
        } else {
            System.out.println("Conexion Incorrecta Iguales eres un fracaso :v");
        }
    }

    static void create() {
        Producto p = new Producto("vcv");
        if (ko.crea(p) > 0) {
            System.out.println("c:");
        } else {
            System.out.println(":c");
        }
    }

   
    static void delete() {
        g.toJson(ko.deleate(7));

    }

    static void ate() {
        Producto lop = new Producto(3,1);
        int p=lop.getEst();
        System.out.println(p);
        System.out.println(g.toJson(lop));
        if (ko.update(lop) > 0) {
            System.out.println("c:");
        } else {
            System.out.println(":c");
        }
    }

    static void validar() {
        HashMap<String, Object> data = new HashMap<>();
        data = us.validar("marco", "0106");
        System.out.println(data);
        System.out.println(data.size());

    }
    static void read()
    {
        System.out.println(g.toJson(ko.read(1)));
    }
    static void nop()
    {
List<Map<String, Object>> lista = new ArrayList<>();
lista = po.listt();
        System.out.println(lista);
        System.out.println(lista.size());
    }
    static void jip()
    {
        System.out.println(g.toJson(ko.ko()));
    }

}
