import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Pais } from '../../interfaces/pais.interface';
import { Usuario } from '../../interfaces/usuario.interface';
import { AdminService } from '../../services/admin.service';
import { UserService } from '../../services/user.service';
import { Pipe, PipeTransform } from '@angular/core';




@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  form: UntypedFormGroup;
  checked: boolean = false;
  isEdit: boolean = false
  editUser: Usuario = {}
  paises: Pais[]= [];
  selectedPais: string = ""
  pais : Pais ={}

  constructor(
    private fb: UntypedFormBuilder,
    private usuarioService: UserService,
    private _snackBar: MatSnackBar,
    private adminService: AdminService,
    private router: Router,
    private dateAdapter: DateAdapter<Date>)
      //dd/MM/yyyy
   {
    this.dateAdapter.setLocale('en-GB');
    this.form = this.fb.group({
      nombre: [this._editUser.nombre, Validators.required], //Valido que sea requerido estos campos
      apellido: [this._editUser.apellido, Validators.required],
      email: [this._editUser.email, [Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])]],
      telefono: [this._editUser.telefono, ],
      fechaNacimiento: [this._editUser.fechaNacimiento, Validators.required],
      paises: [this._editUser.pais, Validators.required],
      check:[this._editUser.recibeInfo, ],

    });

  }

   //Creo un get para checkear si estoy en edit desde el service
   get _isEdit(): boolean {
    this.isEdit = this.adminService.isEditUser
    return this.isEdit
  }

  //Creo un get para obtener el Tree seleccionado
  get _editUser(): Usuario {
    return this.adminService.EditUser
  }


  ngOnInit(): void {

    this.obtenerPaises()

     if (this.adminService.EditUser){

     }

    console.log('ES EDIT', this._isEdit)
  }


  obtenerPaises(){
    this.usuarioService.getAllPaises()
    .then((res) => {
      res.forEach(element => {

        this.pais = {name: element.name, cca2: element.cca2 }
        this.paises.push(this.pais)
      });

      this.paises = this.paises.sort(function (a, b){
        if ( a.name!.common! < b.name!.common!)
        return -1;
        if ( a.name!.common! > b.name!.common! )
          return 1;
        return 0;
        })


    }
    )
    //si trae un error la manejo con un mensaje y consola
    .catch((error) => {
      if (error.status == 400) {

      }
      this.errorMessage("No se pudo obtener paises")
      // // console.log('Error: ', error.error)

    })

  }



  keyPress(event:any) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

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



  toggleChanges($event: MatSlideToggleChange) {
    // this.checked = $event.checked;
    this.checked = !this.checked

 }

 guardarAndUpdate(){
  if (!this._isEdit)
  this.guardar()
  else this.updateUser()
 }


  guardar() {
    //traigo los valos del form y los guardo en constantes
    const nombre = this.form.value.nombre;
    const apellido = this.form.value.apellido;
    const email = this.form.value.email;
    const telefono = this.form.value.telefono;
    const fechaNacimiento = this.form.value.fechaNacimiento;
    const recibeInfo = this.checked;
    const pais = this.selectedPais;

    // const precio = this.form.value.precio;

    //genero el objeto tree con los valores de los input
    const usuario: Usuario = {
      nombre: nombre, apellido: apellido, email: email, telefono:telefono,
      fechaNacimiento:fechaNacimiento, recibeInfo:recibeInfo, pais:pais,
    }

    console.log('Se va crear',usuario)
    //llamo al metodo crear tree del service le paso el objeto
    this.usuarioService.createUser(usuario)

      //Si recibo un respuesta mando mensaje de que se guardo y navego a la pantalla inicial de admin
      .then((res) => {
        if (res)
          this.SuccesMessage('Se guardo correctamente')
        this.router.navigateByUrl('main/usuarios')

      }
      )
      //si trae un error la manejo con un mensaje y consola
      .catch((error) => {
        if (error.status == 400) {

        }
        this.errorMessage("No se pudo guardar el usuario")
        // // console.log('Error: ', error.error)

      })

  }

  updateUser(){
    const id = this._editUser.idUsuario;
    const nombre = this.form.value.nombre;
    const apellido = this.form.value.apellido;
    const email = this.form.value.email;
    const telefono = this.form.value.telefono;
    const fechaNacimiento = this.form.value.fechaNacimiento;
    const recibeInfo = this.checked;
    const pais =  this.selectedPais;

    // const precio = this.form.value.precio;

    //genero el objeto tree con los valores de los input
    const usuario: Usuario = { idUsuario:id,
      nombre: nombre, apellido: apellido, email: email, telefono:telefono,
      fechaNacimiento:fechaNacimiento, recibeInfo:recibeInfo, pais:pais,
    }

    console.log('Se va update ',usuario)
    //llamo al metodo crear tree del service le paso el objeto
    this.usuarioService.updateUser(usuario)

      //Si recibo un respuesta mando mensaje de que se guardo y navego a la pantalla inicial de admin
      .then((res) => {
        if (res)
          this.SuccesMessage('Se actualizo correctamente')
        this.router.navigateByUrl('main/usuarios')

      }
      )
      //si trae un error la manejo con un mensaje y consola
      .catch((error) => {
        if (error.status == 400) {

        }
        this.errorMessage("No se pudo actualizar el usuario")
        // // console.log('Error: ', error.error)

      })

  }



}
