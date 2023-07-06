import { Component } from '@angular/core';
import { transferenciasRecibidas } from 'src/app/datos/transferencias.ejemplo';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
@Component({
  selector: 'app-transferencias-recibidas',
  templateUrl: './transferencias-recibidas.component.html',
  styleUrls: ['./transferencias-recibidas.component.css']
})
export class TransferenciasRecibidasComponent {

    transferencias: any[] = [];

  cliente: any= null

  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService){}

  ngOnInit() {
    this.cliente= this.clienteService.leerSesion();
    this.cargarTransferencias()
  }

  cargarTransferencias(){
    this.transferenciaService.obtenerTransferenciasPorIddestino(this.cliente.id)
    .subscribe((transferenciasCargadas:any)=>
    {console.log(transferenciasCargadas);
    this.transferencias= transferenciasCargadas;});
  }
}