import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {environment} from "../../../../environments/environment";
import {PacienteModel} from "../../models/paciente.model";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {


  constructor(private http: HttpClient, private authService: AuthService) {}

  getPacienteByUsername(pacCurp: string) {
    return this.http.get<PacienteModel>(environment.url_api + '/pacientes/listar/' + pacCurp);
  }
}
