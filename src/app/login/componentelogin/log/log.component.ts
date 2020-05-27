import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
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
  form: FormGroup;
  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100)])
    });
  }
  constructor(private route: Router,
              private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {
    this.buildForm();
    this.contactForm = this.createFormGroup();
  }
  ngOnInit() {
  }
  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login(value.email, value.password).toPromise()
        .then(() => {
          this.router.navigate(['/bienvenido']);
        })
        .catch(() => {
          alert('no es valido');
        });
    }
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  onValidoForm() {
    if (this.contactForm.valid) {
      this.route.navigate(['/bienvenido']);
      console.log('valid');
    } else {
      console.log('no valid');
    }
  }
  get email() { return this.contactForm.get('email'); }
  get password() { return this.contactForm.get('password'); }
}
