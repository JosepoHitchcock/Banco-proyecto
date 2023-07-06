import { Component } from '@angular/core';
import { ClienteService } from './services/cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  title = 'proyecto-banco';
  cerrarSesion(){
    sessionStorage.removeItem("sesion");
    this.router.navigateByUrl("/auth/login")
    console.log("Sesion Cerrada")
  }
}
