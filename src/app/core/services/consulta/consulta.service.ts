import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConsultaModel} from '../../models/consulta.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConsultaService {

  constructor(private http: HttpClient) {
  }

  getAllConsultsByCurp() {
    return this.http.get<ConsultaModel[]>(environment.url_api + '/recetas/listar/QUTJ960701HDFVRS40');
  }
}
