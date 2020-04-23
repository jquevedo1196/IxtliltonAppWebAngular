import {RecetaModel} from './receta.model';
import {DiagnosticoModel} from './diagnostico.model';

export interface ConsultaModel {
  receta: RecetaModel;
  diagnostico: DiagnosticoModel;
  medico: number;
  medicamentos: string;
}
