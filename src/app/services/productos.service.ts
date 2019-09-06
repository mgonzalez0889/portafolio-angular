import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosInterface } from '../interfaces/productos.interfaces';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos : ProductosInterface [] = [];
  productosFiltrado : ProductosInterface [] = [];

  cargando = true;

  constructor(private http : HttpClient) { 

    this.cargarProductos();

  }

  /*
  private cargarProductos(){

    this.http.get('https://angular-html-3d827.firebaseio.com/productos_idx.json')
             .subscribe( (data: ProductosInterface[] ) =>{

              this.productos = data;  
              console.log(this.productos);

                this.cargando=false;

             });  
  }*/

  private cargarProductos(){

    return new Promise( (resolve, reject) =>{

      this.http.get('https://angular-html-3d827.firebaseio.com/productos_idx.json')
      .subscribe( (data: ProductosInterface[] ) =>{

       this.productos = data;  
       //console.log(this.productos);
        this.cargando=false;
        resolve();

      });  



    })
   
    
  }

  getProductos( id :string){

    return this.http.get(`https://angular-html-3d827.firebaseio.com/productos/${ id }.json`);             


  }

  buscarProducto( termino:string){

    if( this.productos.length ===0 ){
      //cargar productos
      this.cargarProductos().then(()=>{
        //ejecutar Despues de tener los productos
        //aplicar filtro
      this.filtrarProductos( termino );  
      })
    }else{
      //Aplicar el filtro
      this.filtrarProductos( termino );
    }

 

  }

  private filtrarProductos( termino:string){


    console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod =>{
    
      const tituloLower = prod.titulo.toLocaleLowerCase();
      
      if(prod.categoria.indexOf (termino) >=0 || tituloLower.indexOf(termino)>=0 ){
        this.productosFiltrado.push(prod)

      }

    })


  }



}
