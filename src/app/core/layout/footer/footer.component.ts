import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Animais para Adoção', path: '/animais' },
    { label: 'Encontre seu Pet Ideal', path: '/compatibilidade' },
    { label: 'Histórias de Sucesso', path: '/historias' },
    { label: 'Sobre Nós', path: '/sobre' },
  ];

  adotanteLinks = [
    { label: 'Criar conta', path: '/auth/cadastro' },
    { label: 'Fazer login', path: '/auth/login' },
    { label: 'Meu perfil', path: '/perfil' },
    { label: 'Minhas solicitações', path: '/solicitacoes' },
    { label: 'Animais favoritos', path: '/favoritos' },
  ];

  socialLinks = [
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  ];
}
