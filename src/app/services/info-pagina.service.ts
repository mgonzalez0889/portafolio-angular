import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

info: InfoPagina = {};
cargada = false;

  constructor(private _http : HttpClient) {

    console.log("Servicio listo y cargado");

    // leer el Json

    this._http.get('assets/data/data-pagina.json')
              .subscribe( (data : InfoPagina) =>{
                
                this.cargada = true;
                this.info = data;
                console.log(data);

              })

   }




}
