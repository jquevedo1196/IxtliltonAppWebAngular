import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {environment} from "../../../../environments/environment";
import {ObtenerqrModel} from "../../models/obtenerqr.model";

@Injectable({
  providedIn: 'root'
})
export class ObtenerqrService {

  currentUser = this.authService.currentUserValue;

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  getQrByUsername(username: string) {
    return this.http.get<ObtenerqrModel>(environment.url_api + '/qr/obtenerByUsername/' + this.currentUser.user.username);
  }
}
