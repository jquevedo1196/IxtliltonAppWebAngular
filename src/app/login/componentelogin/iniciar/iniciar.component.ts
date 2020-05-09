import {Component, OnInit} from '@angular/core';
import {ObtenerqrService} from "../../../core/services/obtenerqr/obtenerqr.service";
import {ObtenerqrModel} from "../../../core/models/obtenerqr.model";

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.scss']
})
export class IniciarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
