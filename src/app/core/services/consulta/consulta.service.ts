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
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6Ilt7XCJhdXRob3JpdHlcIjpcIlJPTEVfVVNFUlwifV0iLCJzdWIiOiJqZW5yaXF1ZV9xdEBob3RtYWlsLmNvbSIsImlhdCI6MTU4NzU5NzE1NiwiZXhwIjoxNTg3NjExMTU2fQ.Z6iljdTvemCB7OKiXQ0Ww4AwvCRdE7TMVj3rvrv6lWTIKAtxIJYhvDgWQOo7SVWfk9EL__Cz2SQz5AifAj8swA'
    });
    return this.http.get<ConsultaModel[]>(environment.url_api + '/recetas/listar/QUTJ960701HDFVRS40', {
      headers: reqHeader
    });
  }
}
