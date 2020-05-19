import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConsultaModel} from '../../models/consulta.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConsultaService {

  constructor(private http: HttpClient) {
  }

  getAllConsultsByCurp() {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + environment.token
    });
    return this.http.get<ConsultaModel[]>(environment.url_api + '/recetas/listar/QUTJ960701HDFVRS40', {
      headers: reqHeader
    });
  }
}
