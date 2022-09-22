import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Actividad } from '../interfaces/actividad.interface';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  private _baseUrl: string = env.apiUrl
  constructor(
    private http: HttpClient,
  ) { }

    //OBTENER TODOS LOS ARBOLES
    GetAllActividades(): Promise<Actividad[]> {
      const url = `${this._baseUrl}/api/Actividad/GetAllActividades`

      return new Promise((resolve, reject) => {
        this.http.get<Actividad[]>(url)
          .subscribe(
            (res: Actividad[]) => {

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
