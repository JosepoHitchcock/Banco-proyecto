import { Injectable } from '@angular/core';

import { usuarios } from 'src/app/datos/usurios.ejemplo';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  loginear(nombreUsuario: string, password: string){

    for (let i = 0; i < usuarios.length; i++){
      const usuario= usuarios[i]
      if (usuario.usuario === nombreUsuario && usuario.password === password ){
        return usuario
      }
    }
    return null
  }
}