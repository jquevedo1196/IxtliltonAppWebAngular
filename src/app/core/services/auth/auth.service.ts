import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {environment} from "../../../../environments/environment";
import {MetadataModel} from "../../models/metadata.model";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<MetadataModel>;
  public currentUser: Observable<MetadataModel>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<MetadataModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): MetadataModel {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<MetadataModel>(`${environment.url_api}/api/login`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        console.log("voy a logearme");
        console.log(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
