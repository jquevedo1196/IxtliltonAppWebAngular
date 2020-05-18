import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-formulario-datos',
  templateUrl: './formulario-datos.component.html',
  styleUrls: ['./formulario-datos.component.scss'],
})
export class FormularioDatosComponent implements OnInit {
  nationality: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  specialty: string[] = [
    'Alergología', 'Anestesiologí', 'Cardiología', 'Gastroenterología', 'Endocrinología', 'Epidemiología', 
    'Geriatría', 'Hepatología', 'Hematología', 'Infectología'
  ];

  subspecialty: string[] = [
    'Alergología', 'Anestesiologí', 'Cardiología', 'Gastroenterología', 'Endocrinología', 'Epidemiología', 
    'Geriatría', 'Hepatología', 'Hematología', 'Infectología'
  ];
  clu: string[] = [
    'UMF 13 NOCHE BUENA', 'UMF 40 CD. REFORMA', 'UMF 56 CD. JUáREZ', 'UMF 81 GRULLO', 'UMF 3 CORA'
  ];
  type: string[] = [
    'unifamiliares', 'plurifamiliares'
  ];
  state: string[] = [
 'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua',
 'Ciudad de México', 'Coahuila de Zaragoza', 'Colima', 'Durango', 'Estado de México', 'Guanajuato',
 'Guerrero', 'Hidalgo', 'Jalisco', 'Michoacán de Ocampo', 'Morelos', 'Nayarit', 'Nuevo León',
 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sin Localidad', 'Sinaloa', 'Sonora',
 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz de Ignacio de la Llave', 'Yucatán', 'Zacatecas'
  ];
  municipality: string[] = [
'Capulhuac', 'Coacalco de Berriozábal', 'Coatepec Harinas', 'Cocotitlán', 'Coyotepec',
'Cuautitlán', 'Chalco', 'Chapa de Mota', 'Chapultepec', 'Chiautla', 'Chicoloapan', 'Chiconcuac',
'Chimalhuacán', 'Donato Guerra', 'Ecatepec de Morelos', 'Ecatzingo', 'Huehuetoca', 'Hueypoxtla', 'Huixquilucan'
  ];
  location: string[] = [
'Ecatepec de Morelos', 'Ciudad Nezahualcóyotl', 'Naucalpan de Juárez', 'Ciudad de Tlalnepantla', 'Chimalhuacán',
'Toluca de Lerdo', 'Ciudad López Mateos', 'Cuautitlán Izcalli', 'Xico', 'Ixtapaluca', 'San Francisco Coacalco', 
'Ciudad Nicolás Romero', 'Ojo de Agua', 'Buenavista'
  ];
  Suburb: string[] = [
'Roma Norte', 'Del Valle Centro', 'Polanco', 'Narvarte Poniente', 'Lomas de Chapultepec', 'Centro',
'Narvarte Oriente', 'Doctores', 'Nonoalco Tlatelolco', 'Del Valle Sur'
  ];

  favoriteSeason: string;
  seasons: string[] = ['Masculino', 'Femenino'];

  private curpPattern: any = /^[A-Z]{4}[0-9]{6}[H,M][A-Z]{5}[0-9]{2}$/;
  private cpPattern: any = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
  // tslint:disable-next-line: max-line-length
  private telPattern: any = /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}$/;

  docForm: FormGroup;
  regisForm: FormGroup;

createFormGroup() {
  return new FormGroup ({
    cedula: new FormControl('', [Validators.required,
      Validators.minLength(8),
    Validators.maxLength(8)]),
    curp: new FormControl('', [Validators.required,
      Validators.minLength(18),
      Validators.maxLength(18),
      Validators.pattern(this.curpPattern)]),
    nombre: new FormControl('', [Validators.required,
      Validators.minLength(2),
    Validators.maxLength(50)]),
    apellidoP: new FormControl('', [Validators.required,
      Validators.minLength(2),
    Validators.maxLength(50)]),
    apellidoM: new FormControl('', [Validators.required,
      Validators.minLength(2),
    Validators.maxLength(50)]),
    fecha: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
    nacionalidad: new FormControl('', [Validators.required]),
    especialidad: new FormControl('', [Validators.required]),
    subespecialidad: new FormControl('', [Validators.required]),
    clue: new FormControl('', [Validators.required]),
  });
}

create2FormGroup(){
  return new FormGroup({
    tipo: new FormControl('', [Validators.required]),
    calle: new FormControl('', [Validators.required,
      Validators.minLength(2),
    Validators.maxLength(300)]),
    numext: new FormControl('', [Validators.minLength(2),
    Validators.maxLength(300)]),
    numint: new FormControl('', [Validators.minLength(2),
    Validators.maxLength(300)]),
    estado: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    localidad: new FormControl('', [Validators.required]),
    colonia: new FormControl('', [Validators.required]),
    codigopostal: new FormControl('', [Validators.required,
      Validators.pattern(this.cpPattern)]),
    telefono: new FormControl('', [Validators.required,
      Validators.pattern(this.telPattern)]),
  });
}



// tslint:disable-next-line: variable-name
constructor(private _snackBar: MatSnackBar) {
  this.regisForm = this.createFormGroup();
  this.docForm = this.create2FormGroup();
}


ngOnInit(): void {
  }
onValidoForm() {
  if (this.regisForm.valid) {

 console.log('valid');
  } else {
console.log('no valid');
  }
}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 2000,
  });
}
onDocForm() {
  if (this.docForm.valid) {
    console.log('valid');
  } else {
    console.log('no valid');
  }
}

get cedula() {return this.regisForm.get('cedula'); }
get curp() {return this.regisForm.get('curp'); }
get nombre() {return this.regisForm.get('nombre'); }
get apellidoP() {return this.regisForm.get('apellidoP'); }
get apellidoM() {return this.regisForm.get('apellidoM'); }
get fecha() {return this.regisForm.get('fecha'); }
get sexo() {return this.regisForm.get('sexo'); }
get nacionalidad() {return this.regisForm.get('nacionalidad'); }
get especialidad() {return this.regisForm.get('especialidad'); }
get subespecialidad() {return this.regisForm.get('subespecialidad'); }
get clue() {return this.regisForm.get('clue'); }

get tipo() {return this.docForm.get('tipo'); }
get calle() {return this.docForm.get('calle'); }
get numext() {return this.docForm.get('numext'); }
get numint() {return this.docForm.get('numint'); }
get estado() {return this.docForm.get('estado'); }
get municipio() {return this.docForm.get('municipio'); }
get localidad() {return this.docForm.get('localidad'); }
get colonia() {return this.docForm.get('colonia'); }
get codigopostal() {return this.docForm.get('codigopostal'); }
get telefono() {return this.docForm.get('telefono'); }


}
