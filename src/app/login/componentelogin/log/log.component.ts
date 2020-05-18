import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  hide = true;
  // tslint:disable-next-line: max-line-length
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  contactForm: FormGroup;
createFormGroup(){
  return new FormGroup ({
    email: new FormControl('', [Validators.required,
      Validators.minLength(5),
      Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required,
      Validators.minLength(8),
    Validators.maxLength(16)])
  });
}

constructor(private route: Router) {
  this.contactForm = this.createFormGroup();
}

  ngOnInit(): void {
  }


onValidoForm() {
  if (this.contactForm.valid){
 this.route.navigate(['/bienvenido']);
 console.log('valid');
  } else {
console.log('no valid');
  }
}

get email() {return this.contactForm.get('email'); }
get password() {return this.contactForm.get('password'); }


}
