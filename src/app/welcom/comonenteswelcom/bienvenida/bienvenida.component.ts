import {Component, OnInit} from '@angular/core';
import {ConsultaModel} from '../../../core/models/consulta.model';
import {ConsultaService} from '../../../core/services/consulta/consulta.service';
import {MedicoModel} from '../../../core/models/medico.model';
import {MedicoService} from '../../../core/services/medico/medico.service';
import {PacienteService} from '../../../core/services/paciente/paciente.service';
import {PacienteModel} from '../../../core/models/paciente.model';
import {ObtenerqrService} from '../../../core/services/obtenerqr/obtenerqr.service';
import {ObtenerqrModel} from '../../../core/models/obtenerqr.model';


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
    this.medicoService.getMedicoByUsername().subscribe(medico => {
      console.log(medico);
      this.medico = medico;
    });
  }

  fetchPacienteByUsername() {
    this.pacienteService.getPacienteByUsername().subscribe(paciente => {
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
