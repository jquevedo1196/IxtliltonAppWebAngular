import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {MedicoModel} from "../../models/medico.model";
import {environment} from "../../../../environments/environment";
import {PacienteModel} from "../../models/paciente.model";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {


  constructor(private http: HttpClient, private authService: AuthService) {

  }

  getPacienteByUsername() {
    return this.http.get<PacienteModel>(environment.url_api + '/pacientes/listar/jenrique_qt@hotmail.com');
  }
}
