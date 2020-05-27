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
  getAllConsultsByCurp(string: pacCurp) {
    return this.http.get<ConsultaModel[]>(environment.url_api + '/recetas/listar/' + pacCurp);
  }

  getAllRecetasdemedByUsername() {
    return this.http.get<ConsultaModel[]>(environment.url_api + '/recetas/recetasByMedico/' + this.currentUser.user.username);
  }
}
