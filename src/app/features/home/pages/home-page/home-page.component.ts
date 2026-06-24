import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: false,
})
export class HomePageComponent {
  readonly stats = [
    { value: '1.240+', label: 'Animais disponíveis' },
    { value: '3.800+', label: 'Adoções realizadas' },
    { value: '120+', label: 'ONGs parceiras' },
  ];

  readonly featuredPets = [
    {
      id: 1,
      name: 'Mel',
      species: 'Cachorro',
      breed: 'Golden Retriever',
      age: '2 anos',
      location: 'São Paulo, SP',
      imageUrl:
        'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=280&fit=crop',
      available: true,
    },
    {
      id: 2,
      name: 'Luna',
      species: 'Gato',
      breed: 'Siamês',
      age: '1 ano',
      location: 'Rio de Janeiro, RJ',
      imageUrl:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=280&fit=crop',
      available: true,
    },
    {
      id: 3,
      name: 'Thor',
      species: 'Cachorro',
      breed: 'Labrador',
      age: '3 anos',
      location: 'Belo Horizonte, MG',
      imageUrl:
        'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=280&fit=crop',
      available: true,
    },
    {
      id: 4,
      name: 'Pipa',
      species: 'Coelho',
      breed: 'Mini Lop',
      age: '8 meses',
      location: 'Curitiba, PR',
      imageUrl:
        'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=400&h=280&fit=crop',
      available: true,
    },
    {
      id: 5,
      name: 'Bela',
      species: 'Gato',
      breed: 'Persa',
      age: '4 anos',
      location: 'Porto Alegre, RS',
      imageUrl:
        'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=280&fit=crop',
      available: true,
    },
    {
      id: 6,
      name: 'Bob',
      species: 'Cachorro',
      breed: 'Beagle',
      age: '1 ano',
      location: 'Florianópolis, SC',
      imageUrl:
        'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=280&fit=crop',
      available: false,
    },
  ];

  readonly steps = [
    {
      number: 1,
      icon: 'person_add',
      title: 'Crie seu perfil',
      description:
        'Cadastre-se gratuitamente e preencha seu perfil com informações sobre seu estilo de vida e preferências.',
    },
    {
      number: 2,
      icon: 'search',
      title: 'Encontre seu pet',
      description:
        'Navegue pelo catálogo ou use nossa busca inteligente para encontrar o companheiro ideal para você.',
    },
    {
      number: 3,
      icon: 'assignment',
      title: 'Solicite a adoção',
      description:
        'Preencha o formulário e aguarde a análise da ONG parceira responsável pelo animal.',
    },
    {
      number: 4,
      icon: 'home',
      title: 'Leve para casa!',
      description:
        'Após a aprovação, agende a retirada e comece uma nova história de amor com seu novo companheiro.',
    },
  ];

  readonly stories = [
    {
      petName: 'Max',
      adopterName: 'Família Oliveira',
      testimonial:
        'O Max chegou tímido, mas em poucos dias já era o rei da casa. Hoje não consigo imaginar nossa vida sem ele!',
      imageUrl:
        'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=480&h=320&fit=crop',
      date: 'Março de 2025',
    },
    {
      petName: 'Nina',
      adopterName: 'Ana Clara Santos',
      testimonial:
        'Adotar a Nina foi a melhor decisão da minha vida. Ela trouxe alegria e carinho para o meu apartamento.',
      imageUrl:
        'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=480&h=320&fit=crop',
      date: 'Janeiro de 2025',
    },
    {
      petName: 'Coco',
      adopterName: 'Pedro Mendes',
      testimonial:
        'Processo rápido, equipe atenciosa e um gatinho maravilhoso. O AdoPetMe tornou tudo muito fácil!',
      imageUrl:
        'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=480&h=320&fit=crop',
      date: 'Fevereiro de 2025',
    },
  ];
}
