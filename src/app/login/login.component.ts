import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  data = {
    email: 'doggy.huang@gmail.com',
    password: '123123',
    isRememberMe: true
  };

  origClassName: string;

  constructor() { }

  ngOnInit(): void {
    this.origClassName = document.body.className;
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = this.origClassName;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // TODO
      // this.http.post('/api/save', this.data).subscribe(result => {  });
    }
  }

}
