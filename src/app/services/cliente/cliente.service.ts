import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { usuarios } from 'src/app/datos/usurios.ejemplo';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlApi: string ="http://localhost:8082/cliente"

  constructor(private http: HttpClient) { }

  loginear(nombreUsuario: string, password: string){

    for (let i = 0; i < usuarios.length; i++){
      const usuario= usuarios[i]
      if (usuario.usuario === nombreUsuario && usuario.password === password ){
        return usuario
      }
    }
    return null
  }
  obtenerClientes(){
    return this.http.get(this.urlApi);
  }
  hacerLogin(correo: string,password:string){
    const url = `${this.urlApi}/login?correo=${correo}&password=${password}`
    return this.http.get(url);
  }
  crearSesion(clienteLogueado:any){
    const clienteJSON = JSON.stringify(clienteLogueado);
    sessionStorage.setItem('sesion',clienteJSON);
  }
  leerSesion(){
    const clienteJSON = sessionStorage.getItem("sesion");
    if (clienteJSON){
      const clienteLogueado = JSON.parse(clienteJSON);
      return clienteLogueado;
    }
    return null;
  }

  cerrarSesion(){
    sessionStorage.removeItem("sesion");
  }
}