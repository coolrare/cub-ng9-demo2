import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginViewModel } from '../login/login.component';
import { NgForm, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  data: LoginViewModel = {
    email: 'doggy.huang@gmail.com',
    password: '123123',
    isRememberMe: true
  };

  form: FormGroup;

  origClassName: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.origClassName = document.body.className;
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required, Validators.minLength(3)
      ]],
      isRememberMe: false
    });

    this.resetForm();

  }

  ngOnDestroy(): void {
    document.body.className = this.origClassName;
  }

  onSubmit(form: FormGroupDirective) {
    console.log(form);
    if (form.valid) {
      // TODO
      // this.http.post('/api/save', this.form.value).subscribe(result => {  });
    }
  }

  resetForm() {
    console.log(this.data);
    this.form.reset(this.data);
  }


}
