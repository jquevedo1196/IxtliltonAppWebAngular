import {Component, OnInit} from '@angular/core';
import {ConsultaModel} from '../../../core/models/consulta.model';
import {ConsultaService} from '../../../core/services/consulta/consulta.service';
import {MedicoModel} from '../../../core/models/medico.model';
import {MedicoService} from '../../../core/services/medico/medico.service';
import {PacienteService} from '../../../core/services/paciente/paciente.service';
import {PacienteModel} from '../../../core/models/paciente.model';
import {ObtenerqrService} from '../../../core/services/obtenerqr/obtenerqr.service';
import {ObtenerqrModel} from '../../../core/models/obtenerqr.model';
import {SessionService} from "../../../core/services/session/session.service";
import {PacEmailModel} from "../../../core/models/pacEmail.model";


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  consultas: ConsultaModel[] = [];
  medico: MedicoModel;
  paciente: PacienteModel;
  qr: ObtenerqrModel;
  pacienteEmail: PacEmailModel;


  constructor(private consultaService: ConsultaService,
              private medicoService: MedicoService,
              private pacienteService: PacienteService,
              private obtenerqrService: ObtenerqrService,
              private sessionService: SessionService) {
  }

  ngOnInit() {
    this.hasPacienteEmailByUsername();
    this.fetchConsultas();
    this.fetchMedicoByUsername();
    this.fetchPacienteByUsername();
    this.fetchConsultasByUsername();
    this.fetchQrByUsername();
  }

  hasPacienteEmailByUsername(){
    this.sessionService.hasPacienteEmailByUsername().subscribe(email =>{
      this.pacienteEmail = email;
      }
    );
  }
  fetchConsultas() {
    this.consultaService.getAllConsultsByCurp("QUTJ960701HDFVRS40").subscribe(consulta => {
      this.consultas = consulta;
    });
  }

  fetchMedicoByUsername() {
    this.medicoService.getMedicoByUsername().subscribe(medico => {
      this.medico = medico;
    });
  }

  fetchPacienteByUsername() {
    this.pacienteService.getPacienteByUsername(this.pacienteEmail.paciente).subscribe(paciente => {
      this.paciente = paciente;
    });
  }

  fetchConsultasByUsername() {
    this.consultaService.getAllRecetasdemedByUsername().subscribe(consultas => {
      this.consultas = consultas;
    });
  }

  fetchQrByUsername() {
    this.obtenerqrService.getQrByUsername().subscribe(qr => {
      this.qr = qr;
    });
  }


  putMedicoByUsername(medico: MedicoModel) {
    this.medicoService.putMedicoByUsername(medico).subscribe(medicoEdit => {
      this.medico = medicoEdit;
    });
  }
}
