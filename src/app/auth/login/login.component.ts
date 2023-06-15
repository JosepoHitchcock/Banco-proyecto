import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: string = ""
  password: string = ""
  constructor(private usuarioServices:ClienteService){}

  validarLogin(){
    console.log("validando...",this.user,this.password);
    const usuario= this.usuarioServices.loginear(this.user, this.password)
    if(usuario!=null)(
      console.log(usuario)
    )
    else{
      console.error("no registrado")
    }
  }

}
