import {RecetaModel} from './receta.model';
import {DiagnosticoModel} from './diagnostico.model';
import {MedicoModel} from "./medico.model";
import {MedicamentosModel} from "./medicamentos.model";

export interface ConsultaModel {
  receta: RecetaModel;
  diagnostico: DiagnosticoModel;
  medico: MedicoModel;
  medicamentos: MedicamentosModel[];
}
