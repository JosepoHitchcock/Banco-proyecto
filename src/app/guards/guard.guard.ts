import { CanActivateFn } from '@angular/router';
import { ClienteService } from '../services/cliente/cliente.service';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  const clienteService = inject(ClienteService)
  const sesion = clienteService.leerSesion();
  if (sesion){
  return true;
  } else{
  return false;
  }
};
