import {DomicilioModel} from "./domicilio.model";
import {TiposanModel} from "./tiposan.model";
import {DiscapacidadModel} from "./discapacidad.model";
import {ReligionModel} from "./religion.model";
import {EdoNacModel} from "./edoNac.model";
import {ContactoModel} from "./contacto.model";

export interface PacienteModel {
  curp: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  fechaNacimiento: string;
  sexo: string;
  nacionalidad: string;
  nivelSocioeconomico: string;
  vivienda: number;
  grupoEtnico: number;
  tipoSanguineo: TiposanModel;
  discapacidad: DiscapacidadModel;
  religion: ReligionModel;
  edoNac: EdoNacModel;
  domicilio: DomicilioModel;
  user: string;
  contacto1: ContactoModel;
  contacto2: ContactoModel;
}
