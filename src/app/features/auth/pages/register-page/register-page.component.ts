import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';

function confirmarSenhaValidator(senhaCtrl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return senhaCtrl.value && control.value && senhaCtrl.value !== control.value
      ? { senhasNaoCoincidem: true }
      : null;
  };
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  standalone: false,
})
export class RegisterPageComponent implements OnInit {
  dadosPessoaisForm!: FormGroup;
  enderecoForm!: FormGroup;
  perfilForm!: FormGroup;

  loading = false;
  loadingCep = false;
  hideSenha = true;
  hideConfirmar = true;

  readonly estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
    'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
    'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dadosPessoaisForm = this.fb.group({
      nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      dataNascimento: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      confirmarSenha: ['', Validators.required],
    });

    const senhaCtrl = this.dadosPessoaisForm.get('senha')!;
    const confirmarCtrl = this.dadosPessoaisForm.get('confirmarSenha')!;
    confirmarCtrl.addValidators(confirmarSenhaValidator(senhaCtrl));
    senhaCtrl.valueChanges.subscribe(() =>
      confirmarCtrl.updateValueAndValidity({ onlySelf: true })
    );

    this.enderecoForm = this.fb.group({
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    });

    this.perfilForm = this.fb.group({
      tipoMoradia: ['', Validators.required],
      temQuintal: ['', Validators.required],
      temOutrosAnimais: ['', Validators.required],
      experienciaAnimais: ['', Validators.required],
      motivacao: [''],
    });
  }

  buscarCep(): void {
    const cep = this.enderecoForm.get('cep')?.value;
    if (!cep || cep.length !== 8) return;

    this.loadingCep = true;
    this.http
      .get<any>(`https://viacep.com.br/ws/${cep}/json/`)
      .pipe(finalize(() => (this.loadingCep = false)))
      .subscribe({
        next: (data) => {
          if (data.erro) {
            this.snackBar.open('CEP não encontrado.', 'Fechar', { duration: 3000 });
            return;
          }
          this.enderecoForm.patchValue({
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          });
        },
        error: () =>
          this.snackBar.open('Erro ao buscar CEP. Verifique sua conexão.', 'Fechar', {
            duration: 3000,
          }),
      });
  }

  onSubmit(): void {
    if (
      this.dadosPessoaisForm.invalid ||
      this.enderecoForm.invalid ||
      this.perfilForm.invalid
    ) {
      return;
    }
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.snackBar.open(
        'Cadastro realizado com sucesso! Faça login para continuar.',
        'Fechar',
        { duration: 5000 }
      );
      this.router.navigate(['/login']);
    }, 1500);
  }
}
