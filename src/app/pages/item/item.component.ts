import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductosInterface } from 'src/app/interfaces/productos.interfaces';
import { productoDescripcion } from 'src/app/interfaces/producto.descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {

  producto: productoDescripcion;
  id:string;
  constructor(private route : ActivatedRoute,
              private productoService : ProductosService) { }

  ngOnInit() {

    this.route.params
              .subscribe( parametros =>{

                //console.log(parametros['id']);

                this.productoService.getProductos( parametros['id'])
                                    .subscribe( (productos: ProductosInterface ) => {
                                      this.id = parametros['id'];
                                      this.producto = productos;  
                                      //console.log(this.producto);

                                    });

              }); 

  }

}
