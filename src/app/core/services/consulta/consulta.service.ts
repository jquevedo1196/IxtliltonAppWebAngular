import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConsultaModel} from '../../models/consulta.model';
import {environment} from '../../../../environments/environment';
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})

export class ConsultaService {

  currentUser = this.authService.currentUserValue;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getAllConsultsByCurp() {
    console.log(this.currentUser.user.username);
    return this.http.get<ConsultaModel[]>(environment.url_api + '/recetas/listar/QUTJ960701HDFVRS40');
  }

  getAllRecetasdemedByUsername(username: string) {
    return this.http.get<ConsultaModel[]>(environment.url_api + '/recetas/recetasbymedico/' + this.currentUser.user.username);
  }
}
