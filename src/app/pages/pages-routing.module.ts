import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { transferenciasEnviadas } from '../datos/transferencias.enviadas.ejemplo';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { guardGuard } from '../guards/guard.guard';
import { DetalleTransferenciaComponent } from './detalle-transferencia/detalle-transferencia.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent,canActivate:[guardGuard]},
  {path: 'transferencias-recibidas', component:TransferenciasRecibidasComponent,canActivate:[guardGuard]},
  {path: 'transferencias-enviadas', component:TransferenciasEnviadasComponent,canActivate:[guardGuard]},
  {path: 'nueva-transferencia', component:NuevaTransferenciaComponent, canActivate:[guardGuard]},
  {path: 'mi-cuenta', component:MiCuentaComponent,canActivate:[guardGuard]},
  {path: 'detalle-transferencia/:id', component:DetalleTransferenciaComponent,canActivate:[guardGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
