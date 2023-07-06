import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient) { }
  urlApi: string = "http://localhost:8082/transferencia";
  
  //traer todas la transferencias
  obtenerTransferencias(){
    return this.http.get(this.urlApi);
  }
  //traer transferencia por id ordenante
  obtenerTransferenciasPorIdOrdenante(id:number){
    return this.http.get(`${this.urlApi}/ordenante/${id}`)
  }
  obtenerTransferenciasPorIddestino(id:number){
    return this.http.get(`${this.urlApi}/destino/${id}`)
  }
  guardar(transferencia:any){
    return this.http.post(this.urlApi, transferencia);
  }
  obtenerTransferenciaPorId(id:number){
    return this.http.get(this.urlApi+"/"+id);
  }
}