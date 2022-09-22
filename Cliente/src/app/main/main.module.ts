import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { MatTableModule } from '@angular/material/table';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalEliminarComponent } from './components/modal-eliminar/modal-eliminar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';






@NgModule({
  declarations: [MainComponent, ActividadesComponent,UsuariosComponent,ModalEliminarComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],

})
export class MainModule { }
