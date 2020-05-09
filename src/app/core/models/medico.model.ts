import {DomicilioModel} from "./domicilio.model";

export interface MedicoModel {
  cedula: number;
  curp: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  fechaNacimiento: string;
  sexo: string;
  nacionalidad: string;
  especialidad: number;
  subEspecialidad: number;
  domicilio: DomicilioModel;
  clue: number;
  user: string;
}
