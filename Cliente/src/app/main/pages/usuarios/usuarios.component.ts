import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario.interface';
import { AdminService } from '../../services/admin.service';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalEliminarComponent } from '../../components/modal-eliminar/modal-eliminar.component';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

// Traigo el objeto paginator al ts
 @ViewChild('paginatorUsers') paginatorUsers!: MatPaginator;

 userSelected : Usuario = {}

constructor(
  private usuarioService: UserService,
  private _snackBar: MatSnackBar,
  private adminService: AdminService,
  private router : Router,
  public dialog: MatDialog
) { }

//Metodos para mensajes genericos (hacer algo mas global y generico)
errorMessage(mje: string) {
  this._snackBar.open(mje, 'X', {
    panelClass: ['mat-toolbar', 'mat-warn'],
    duration: 4000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  })
}

SuccesMessage(mje: string) {
  this._snackBar.open(mje, '', {
    panelClass: ['mat-toolbar', 'mat-accent'],
    duration: 4000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  });
}



//TABLA:
//Declaro el objeto de columnas de la tabla
displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'fechaNacimiento', 'telefono','codigoPais','recibeInfo','update','delete'];
//declaro el dataSource

dataSource: MatTableDataSource<any> = new MatTableDataSource();


ngOnInit(): void {
this.getAllUsers()
}

getAllUsers() {

  this.usuarioService.getAllUsers()
    .then((resp: any) => {

      console.log(resp)
      //instancio el datasourse para cargar la tabla, le paso en resp el array de tree
      this.dataSource = new MatTableDataSource<any>(resp)
       this.dataSource.paginator = this.paginatorUsers;
    })
    .catch((error) => {
      if (error.status == 400) {

      }
      this.errorMessage("No se pudo eliminar el arbol")
      // console.log('Error: ', error.error)
    })
}

editUser(usuario: Usuario) {
  this.adminService.isEditUser = true;
  this.adminService.EditUser = usuario
  this.router.navigateByUrl('/main/nuevo-usuario')
}

deleteUser(usuario : number){
  this.usuarioService.deleteUser(usuario)
  .then((resp: any) => {

    this.SuccesMessage("Se eliminó el arbol correctamente")
    this.getAllUsers()
  })
  .catch((error) => {
    if (error.status == 400) {

    }
    this.errorMessage("No se pudo eliminar el arbol")
    // console.log('Error: ', error.error)
  })
}

NuevoUsuario(){
  this.adminService.isEditUser = false;
  this.adminService.EditUser ={}
  this.router.navigateByUrl('main/nuevo-usuario')
}

openDialogDelete(usuario :Usuario): void {
  this.userSelected = usuario
  const dialogRef = this.dialog.open(ModalEliminarComponent, {
    width: '250px',
    data:{
      name: usuario.nombre,
      respuesta: 0
    }

  });

  dialogRef.afterClosed().subscribe(result => {
    if (result == true){
       this.deleteUser(this.userSelected.idUsuario!)


    }

  });
}

}
