import { Component, inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  private fb = inject(FormBuilder);
  cadastroForm = this.fb.group({
    id: '',
    fullName: [null, Validators.required],
    email: [null, Validators.required],
    phone: [null, Validators.required],
    password: [null, Validators.required],
    confirmPassword: [null, Validators.required]
  }, { validator: this.passwordMatchValidator });

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')!.value;
    const confirmPassword = group.get('confirmPassword')!.value;

    if (password !== confirmPassword) {
      return { mismatch: true };
    }

    return null;
  }


  hasUnitNumber = false;

  onSubmit(): void {
    alert('Cadastrado com sucesso!');
  }
}
