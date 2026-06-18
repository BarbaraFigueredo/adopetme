import { Component, HostListener } from '@angular/core';

interface NavLink {
  label: string;
  path: string;
  exact: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false,
})
export class NavbarComponent {
  isScrolled = false;
  mobileMenuOpen = false;

  navLinks: NavLink[] = [
    { label: 'Início', path: '/', exact: true },
    { label: 'Animais', path: '/animais', exact: false },
    { label: 'Encontre seu Pet', path: '/compatibilidade', exact: false },
    { label: 'Histórias de Sucesso', path: '/historias', exact: false },
    { label: 'Sobre', path: '/sobre', exact: false },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
