import {Component, OnInit} from '@angular/core';
import {ConsultaModel} from "../../../core/models/consulta.model";
import {ConsultaService} from "../../../core/services/consulta/consulta.service";
import {MedicoModel} from "../../../core/models/medico.model";
import {MedicoService} from "../../../core/services/medico/medico.service";
import {PacienteService} from "../../../core/services/paciente/paciente.service";
import {PacienteModel} from "../../../core/models/paciente.model";
import {ObtenerqrService} from "../../../core/services/obtenerqr/obtenerqr.service";
import {ObtenerqrModel} from "../../../core/models/obtenerqr.model";


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  consultas: ConsultaModel[] = [];
  medicos: MedicoModel;
  paciente: PacienteModel;
  qr: ObtenerqrModel;


  constructor(private consultaService: ConsultaService,
              private medicoService: MedicoService,
              private pacienteService: PacienteService,
              private obtenerqrService: ObtenerqrService) {
  }

  ngOnInit() {
    this.fetchConsultas();
    this.fetchMedicoByUsername();
    this.fetchPacienteByUsername();
    this.fetchConsultasByUsername();
    this.fetchQrByUsername();

  }

  fetchConsultas() {
    this.consultaService.getAllConsultsByCurp().subscribe(consulta => {
      this.consultas = consulta;
    });
  }

  fetchMedicoByUsername() {
    this.medicoService.getMedicoByUsername("medico12@correo.com").subscribe(medico => {
      this.medicos = medico;
    });
  }

  fetchPacienteByUsername() {
    this.pacienteService.getPacienteByUsername().subscribe(paciente => {
      this.paciente = paciente;
    });
  }

  fetchConsultasByUsername() {
    this.consultaService.getAllRecetasdemedByUsername("medico12@correo.com").subscribe(consultas => {
      this.consultas = consultas;
    });
  }

  fetchQrByUsername() {
    this.obtenerqrService.getQrByUsername("medico12@correo.com").subscribe(qr => {
      this.qr = qr;
    });
  }


  putMedicoByUsername(medico: MedicoModel) {
    this.medicoService.putMedicoByUsername(medico).subscribe(medico => {
      this.medicos = medico;
    });
  }
}
