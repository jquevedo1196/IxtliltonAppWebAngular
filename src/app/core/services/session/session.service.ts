import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {environment} from "../../../../environments/environment";
import {PacEmailModel} from "../../models/pacEmail.model";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  currentUser = this.authService.currentUserValue;

  constructor(private http: HttpClient, private authService: AuthService) {}

  hasPacienteEmailByUsername() {
    return this.http.get<PacEmailModel>(environment.url_api + '/session/hasSession/' + this.currentUser.user.username);
  }

}
