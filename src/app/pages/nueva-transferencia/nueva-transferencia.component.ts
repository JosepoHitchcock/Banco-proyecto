import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.css']
})
export class NuevaTransferenciaComponent implements OnInit {

  nuevaTransferencia:any = {
    origen:{
      id:null
    },
    destino:{
      id:null,
    },
    concepto:"",
    importe: 0,
  };

  ordenante:any = null;

  feedback: string =""

  constructor(private transferenciService:TransferenciaService,private clienteService:ClienteService){}

    ngOnInit(): void {
      this.ordenante=this.clienteService.leerSesion();
    }

    enviarTransferencia(){
      if(this.ordenante){
      this.nuevaTransferencia.origen.id = this.ordenante.id;
      this.transferenciService
      .guardar(this.nuevaTransferencia)
      .subscribe((transferenciaGuardada)=> {console.log(transferenciaGuardada);
      this.feedback = "Transferencia Enviada"},
      (error)=>{this.feedback = "error de transferencia"})}
    }
  
}
