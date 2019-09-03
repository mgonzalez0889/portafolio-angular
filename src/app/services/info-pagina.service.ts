import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

equipo:any [] = [];  
info: InfoPagina = {};
cargada = false;

  constructor(private _http : HttpClient) {

    

    // leer el Json
    this.cargaInfo();
    this.cargarEquipo();


  }

  private cargaInfo() {

    this._http.get('assets/data/data-pagina.json')
              .subscribe( (data : InfoPagina) =>{
      
      this.cargada = true;
      this.info = data;
      //console.log(data);

    });

  }

  private cargarEquipo(){
    //https://angular-html-3d827.firebaseio.com/equipo.json
    //https://angular-html-3d827.firebaseio.com/equipo.json
    this._http.get('https://angular-html-3d827.firebaseio.com/equipo.json')
              .subscribe( (resp : any[]) =>{
      
      this.cargada = true;      
      this.equipo = resp;      
      //console.log(this.equipo);
    
    },
    error =>{
      console.log(error);

    }
    );

  }

  



}
