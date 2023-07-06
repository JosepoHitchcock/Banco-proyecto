import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: string = ""
  password: string = ""
  constructor(private usuarioService:ClienteService, private router: Router){}

  validarLogin(){
    console.log("validando...",this.user,this.password);
    const usuario= this.usuarioService.loginear(this.user, this.password)
    if(usuario!=null)(
      console.log(usuario)
    )
    else{
      console.error("no registrado")
    }
  }
  enviarLogin(){
    this.usuarioService.hacerLogin(this.user,this.password)
    .subscribe(
      (cliente)=>{console.log({cliente});
      if(cliente){
        this.usuarioService.crearSesion(cliente);
        this.router.navigateByUrl("/pages/dashboard")    
      }
      else{
        console.error("login fallido")
      }
    },
      (error)=> {console.log({error});
  }
  )
  }
}
