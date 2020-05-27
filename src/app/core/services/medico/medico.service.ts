import {Injectable} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {MedicoModel} from "../../models/medico.model";
import {MetadataModel} from "../../models/metadata.model";

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  currentUser = this.authService.currentUserValue;

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  getMedicoByUsername() {
    return this.http.get<MedicoModel>(environment.url_api + '/medicos/getByUser/' + this.currentUser.user.username);
  }

  putMedicoByUsername(medico: MedicoModel) {
    return this.http.put<MedicoModel>(`${environment.url_api}/medicos/actualizar/${medico.user}`, medico);
  }

}
