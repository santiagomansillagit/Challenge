import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActividadService } from '../../services/actividad.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  // Traigo el objeto paginator al ts
 @ViewChild('paginatorAct') paginatorAct!: MatPaginator;

  constructor(
    private actividadService: ActividadService
  ) { }

  displayedColumns: string[] = ['id', 'fechaCreacion', 'actividad'];
//declaro el dataSource
 dataSource: MatTableDataSource<any> = new MatTableDataSource();

  ngOnInit(): void {
    this.getAllActividades()
  }


  getAllActividades() {

    this.actividadService.GetAllActividades()
      .then((resp: any) => {

        console.log(resp)
        //instancio el datasourse para cargar la tabla, le paso en resp el array de tree
        this.dataSource = new MatTableDataSource<any>(resp)
         this.dataSource.paginator = this.paginatorAct;
      })
      .catch((error) => {
        if (error.status == 400) {

        }
        //this.errorMessage("No se pudo eliminar el arbol")
        // console.log('Error: ', error.error)
      })
  }

}
