import {Component, OnInit} from '@angular/core';
import {ConsultaModel} from '../../../core/models/consulta.model';
import {ConsultaService} from '../../../core/services/consulta/consulta.service';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.scss']
})
export class IniciarComponent implements OnInit {

  consultas: ConsultaModel[] = [];

  constructor(private consultaService: ConsultaService) {
  }

  ngOnInit() {
    this.fetchConsultas();
  }

  fetchConsultas() {
    this.consultaService.getAllConsultsByCurp().subscribe(response => {
      console.log(response)
    });
  }
}
