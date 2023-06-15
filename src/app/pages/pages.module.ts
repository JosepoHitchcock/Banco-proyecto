import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';


@NgModule({
  declarations: [DashboardComponent, TransferenciasRecibidasComponent, TransferenciasEnviadasComponent, NuevaTransferenciaComponent, MiCuentaComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
  ]
})
export class PagesModule { }
