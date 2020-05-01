import { Component, OnInit } from '@angular/core';
import {ConsultaModel} from "../../../core/models/consulta.model";
import {ConsultaService} from "../../../core/services/consulta/consulta.service";

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  consultas: ConsultaModel[] = [];

  constructor(private consultaService: ConsultaService) {
  }

  ngOnInit() {
    this.fetchConsultas();
  }

  fetchConsultas() {
    this.consultaService.getAllConsultsByCurp().subscribe(consulta => {
      this.consultas = consulta;
    });
  }

}
