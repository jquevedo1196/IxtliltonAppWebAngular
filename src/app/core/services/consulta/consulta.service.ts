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
      // tslint:disable-next-line:max-line-length
      'Content-Type': 'application/json',
      // tslint:disable-next-line:max-line-length
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6Ilt7XCJhdXRob3JpdHlcIjpcIlJPTEVfVVNFUlwifV0iLCJzdWIiOiJqZW5yaXF1ZV9xdEBob3RtYWlsLmNvbSIsImlhdCI6MTU4NzY3OTYyMiwiZXhwIjoxNTg3NjkzNjIyfQ.SIIU-j76KoUYEo52X5QWfjpZcBOnJcNFCxgdcYlzY8iZsnf2uFowYRV0KNsrf8qPSmTpGXztdMnvJ_cPaCqeiQ'
    });
    return this.http.get<ConsultaModel[]>(environment.url_api + '/recetas/listar/QUTJ960701HDFVRS40', {
      headers: reqHeader
    });
  }
}
