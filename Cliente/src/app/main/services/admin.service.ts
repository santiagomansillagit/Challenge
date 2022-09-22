import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


    //Propiedades de uso para amdin arboles
    isEditUser: boolean = false;
    EditUser: Usuario = {};

  constructor() { }
}
