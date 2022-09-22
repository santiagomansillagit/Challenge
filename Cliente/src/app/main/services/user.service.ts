
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userId, Usuario } from '../interfaces/usuario.interface';
import { environment as env } from 'src/environments/environment';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _baseUrl: string = env.apiUrl
  constructor(
    private http: HttpClient,
  ) { }

    //OBTENER TODOS LOS ARBOLES
    getAllUsers(): Promise<Usuario[]> {
      const url = `${this._baseUrl}/api/Usuario/GetAllUsuarios`

      return new Promise((resolve, reject) => {
        this.http.get<Usuario[]>(url)
          .subscribe(
            (res: Usuario[]) => {

              resolve(res)
            },
            err => {
              // console.log(err)
              reject(err)
            }
          )
      })
    }


    createUser(usuario: Usuario) {

      const url = `${this._baseUrl}/api/Usuario/CreateUsuario`

      return new Promise((resolve, reject) => {
        this.http.post<boolean>(url, usuario).subscribe(
          (res: boolean) => {
            // console.log(res)
            resolve(res)
          },
          (err) => {
            if (err.status == 400) {
              const errorCode = err.error.errorCode
              reject(errorCode)
            }
            else {
              reject(err.status)
            }
          }
        )
      })
    }

    updateUser(usuario: Usuario) {

      const url = `${this._baseUrl}/api/Usuario/UpdateUsuario`

      return new Promise((resolve, reject) => {
        this.http.post<boolean>(url, usuario).subscribe(
          (res: boolean) => {
            // console.log(res)
            resolve(res)
          },
          (err) => {
            if (err.status == 400) {
              const errorCode = err.error.errorCode
              reject(errorCode)
            }
            else {
              reject(err.status)
            }
          }
        )
      })
    }


    deleteUser(userId: number): Promise<boolean> {
      interface treeId {
        treeId: number
      }
      const user: userId = { id: userId }
      const url = `${this._baseUrl}/api/Usuario/DeleteUsuario/${userId} `


      return new Promise((resolve, reject) => {
        this.http.post<boolean>(url, user).subscribe(
          (res: boolean) => {
            resolve(res)
          },
          (err) => {
            if (err.status == 400) {
              const errorCode = err.error.errorCode
              reject(errorCode)
            }
            else {
              reject(err.status)
            }
          }
        )
      })
    }


    //OBTENER TODOS LOS PAISES
    getAllPaises(): Promise<Pais[]> {
      const url = `https://restcountries.com/v3.1/all`

      return new Promise((resolve, reject) => {
        this.http.get<Pais[]>(url)
          .subscribe(
            (res: Pais[]) => {

              resolve(res)
            },
            err => {
              // console.log(err)
              reject(err)
            }
          )
      })
    }
}
