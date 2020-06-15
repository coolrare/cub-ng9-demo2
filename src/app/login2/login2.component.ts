import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginViewModel } from '../login/login.component';
import { NgForm, FormGroup, FormBuilder, Validators, FormGroupDirective, FormControl } from '@angular/forms';
import {
  isGuiNumberValid, // 統一編號
  isNationalIdentificationNumberValid, // 身分證字號
  isResidentCertificateNumberValid, // 居留證編號
  isCitizenDigitalCertificateValid, // 自然人憑證
  isEInvoiceCellPhoneBarcodeValid, // 手機條碼
  isEInvoiceDonateCodeValid // 捐贈碼
} from 'taiwan-id-validator'

function isValidTaiwanId(control: FormControl) {
  if (isNationalIdentificationNumberValid(control.value)) {
    return null;
  } else {
    return { isNationalIdentificationNumberValid: true };
  }
}


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
        Validators.required, isValidTaiwanId
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
