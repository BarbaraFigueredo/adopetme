import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../../../../core/services/auth.service';

function confirmarNovaSenhaValidator(novaCtrl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null =>
    novaCtrl.value && control.value && novaCtrl.value !== control.value
      ? { senhasNaoCoincidem: true }
      : null;
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  standalone: false,
})
export class ProfilePageComponent implements OnInit {
  dadosPessoaisForm!: FormGroup;
  enderecoForm!: FormGroup;
  perfilAdotanteForm!: FormGroup;
  segurancaForm!: FormGroup;

  loadingDados = false;
  loadingEndereco = false;
  loadingPerfil = false;
  loadingSenha = false;
  loadingCep = false;

  hideAtual = true;
  hideNova = true;
  hideConfirmar = true;

  readonly userName: string;
  readonly userEmail: string;
  readonly userRole: string;

  readonly estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
    'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
    'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private authService: AuthService,
  ) {
    const user = authService.getCurrentUser();
    this.userName = user?.name ?? 'Usuário Demo';
    this.userEmail = user?.email ?? 'usuario@email.com';
    this.userRole = user?.role ?? 'ADOTANTE';
  }

  ngOnInit(): void {
    this.dadosPessoaisForm = this.fb.group({
      nomeCompleto: [this.userName, [Validators.required, Validators.minLength(3)]],
      email: [this.userEmail, [Validators.required, Validators.email]],
      telefone: ['(11) 99234-5678', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      dataNascimento: [new Date(1995, 2, 15), Validators.required],
    });

    this.enderecoForm = this.fb.group({
      cep: ['01310100', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      logradouro: ['Avenida Paulista', Validators.required],
      numero: ['1000', Validators.required],
      complemento: ['Apto 42'],
      bairro: ['Bela Vista', Validators.required],
      cidade: ['São Paulo', Validators.required],
      estado: ['SP', Validators.required],
    });

    this.perfilAdotanteForm = this.fb.group({
      tipoMoradia: ['apartamento', Validators.required],
      temQuintal: ['nao', Validators.required],
      temOutrosAnimais: ['nao', Validators.required],
      experienciaAnimais: ['basica', Validators.required],
      motivacao: ['Sempre amei animais e quero dar um lar para um pet que precisa de carinho.'],
    });

    this.segurancaForm = this.fb.group({
      senhaAtual: ['', Validators.required],
      novaSenha: ['', [Validators.required, Validators.minLength(8)]],
      confirmarNovaSenha: ['', Validators.required],
    });

    const novaCtrl = this.segurancaForm.get('novaSenha')!;
    const confirmarCtrl = this.segurancaForm.get('confirmarNovaSenha')!;
    confirmarCtrl.addValidators(confirmarNovaSenhaValidator(novaCtrl));
    novaCtrl.valueChanges.subscribe(() =>
      confirmarCtrl.updateValueAndValidity({ onlySelf: true })
    );
  }

  get userInitials(): string {
    const parts = this.userName.trim().split(' ').filter(Boolean);
    if (parts.length === 0) return 'U';
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  get roleLabel(): string {
    const labels: Record<string, string> = {
      ADOTANTE: 'Adotante',
      FUNCIONARIO: 'Funcionário',
      ADMINISTRADOR: 'Administrador',
    };
    return labels[this.userRole] ?? 'Adotante';
  }

  get roleIcon(): string {
    const icons: Record<string, string> = {
      ADOTANTE: 'favorite',
      FUNCIONARIO: 'work',
      ADMINISTRADOR: 'admin_panel_settings',
    };
    return icons[this.userRole] ?? 'favorite';
  }

  trocarFoto(): void {
    this.snackBar.open('Funcionalidade de upload de foto em breve!', 'Fechar', { duration: 3000 });
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
          this.snackBar.open('Erro ao buscar CEP.', 'Fechar', { duration: 3000 }),
      });
  }

  salvarDados(): void {
    if (this.dadosPessoaisForm.invalid) {
      this.dadosPessoaisForm.markAllAsTouched();
      return;
    }
    this.loadingDados = true;
    setTimeout(() => {
      this.loadingDados = false;
      this.snackBar.open('Dados pessoais atualizados com sucesso!', 'Fechar', { duration: 3000 });
    }, 1200);
  }

  salvarEndereco(): void {
    if (this.enderecoForm.invalid) {
      this.enderecoForm.markAllAsTouched();
      return;
    }
    this.loadingEndereco = true;
    setTimeout(() => {
      this.loadingEndereco = false;
      this.snackBar.open('Endereço atualizado com sucesso!', 'Fechar', { duration: 3000 });
    }, 1200);
  }

  salvarPerfil(): void {
    if (this.perfilAdotanteForm.invalid) {
      this.perfilAdotanteForm.markAllAsTouched();
      return;
    }
    this.loadingPerfil = true;
    setTimeout(() => {
      this.loadingPerfil = false;
      this.snackBar.open('Perfil do adotante atualizado!', 'Fechar', { duration: 3000 });
    }, 1200);
  }

  alterarSenha(): void {
    if (this.segurancaForm.invalid) {
      this.segurancaForm.markAllAsTouched();
      return;
    }
    this.loadingSenha = true;
    setTimeout(() => {
      this.loadingSenha = false;
      this.segurancaForm.reset();
      this.snackBar.open('Senha alterada com sucesso!', 'Fechar', { duration: 3000 });
    }, 1200);
  }
}
