import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private route : ActivatedRoute,
              public productoService : ProductosService) { }

  ngOnInit() {

    this.route.params
              .subscribe( parametro => {

     console.log(parametro['termino']);      
     this.productoService.buscarProducto(parametro['termino']);//Envia el parametro     

    })

  }

}
