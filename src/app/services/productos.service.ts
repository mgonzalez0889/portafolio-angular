import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosInterface } from '../interfaces/productos.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos : ProductosInterface [] = [];

  cargando = true;
  constructor(private http : HttpClient) { 

    this.cargarProductos();

  }


  private cargarProductos(){

    this.http.get('https://angular-html-3d827.firebaseio.com/productos_idx.json')
             .subscribe( (data: ProductosInterface[] ) =>{

              this.productos = data;  
              console.log(this.productos);

             

                this.cargando=false;
            
              

             });  


  }




}
