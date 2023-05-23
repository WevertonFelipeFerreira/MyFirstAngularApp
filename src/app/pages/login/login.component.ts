import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private autorizacaoService = inject(AutorizacaoService)
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  });

  onSubmit(): void {
    this.loginClick();
    alert('Thanks!');
  }

  loginClick() {
    if (this.autorizacaoService.obterLoginStatus())
      this.autorizacaoService.deslogar();
    else
      this.autorizacaoService.autorizar();
  }
}
