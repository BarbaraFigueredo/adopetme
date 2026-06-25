import { Component } from '@angular/core';

export type SpeciesFilter = 'todos' | 'cachorro' | 'gato' | 'coelho' | 'outro';

export interface SuccessStory {
  id: number;
  petName: string;
  species: 'cachorro' | 'gato' | 'coelho' | 'outro';
  breed: string;
  adopterName: string;
  location: string;
  testimonial: string;
  imageUrl: string;
  date: string;
  featured?: boolean;
}

@Component({
  selector: 'app-success-stories-page',
  templateUrl: './success-stories-page.component.html',
  styleUrls: ['./success-stories-page.component.scss'],
  standalone: false,
})
export class SuccessStoriesPageComponent {
  activeFilter: SpeciesFilter = 'todos';

  readonly filters: { label: string; value: SpeciesFilter; icon: string }[] = [
    { label: 'Todas', value: 'todos', icon: 'favorite' },
    { label: 'Cachorros', value: 'cachorro', icon: 'pets' },
    { label: 'Gatos', value: 'gato', icon: 'cruelty_free' },
    { label: 'Coelhos', value: 'coelho', icon: 'emoji_nature' },
    { label: 'Outros', value: 'outro', icon: 'star' },
  ];

  readonly stats = [
    { value: '3.800+', label: 'Adoções realizadas' },
    { value: '1.200+', label: 'Histórias compartilhadas' },
    { value: '47', label: 'Cidades atendidas' },
    { value: '98%', label: 'Adotantes satisfeitos' },
  ];

  readonly allStories: SuccessStory[] = [
    {
      id: 1,
      petName: 'Max',
      species: 'cachorro',
      breed: 'Labrador',
      adopterName: 'Família Oliveira',
      location: 'São Paulo, SP',
      testimonial:
        'O Max chegou tímido, mas em poucos dias já era o rei da casa. Hoje não consigo imaginar nossa vida sem ele! Ele brinca com meu filho o dia todo e dorme ao pé da minha cama toda noite.',
      imageUrl:
        'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop',
      date: 'Março de 2025',
      featured: true,
    },
    {
      id: 2,
      petName: 'Nina',
      species: 'gato',
      breed: 'Siamês',
      adopterName: 'Ana Clara Santos',
      location: 'Rio de Janeiro, RJ',
      testimonial:
        'Adotar a Nina foi a melhor decisão da minha vida. Ela trouxe alegria e carinho para o meu apartamento. Todo dia quando chego do trabalho ela me espera na porta.',
      imageUrl:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop',
      date: 'Janeiro de 2025',
      featured: true,
    },
    {
      id: 3,
      petName: 'Coco',
      species: 'gato',
      breed: 'Persa',
      adopterName: 'Pedro Mendes',
      location: 'Belo Horizonte, MG',
      testimonial:
        'Processo rápido, equipe atenciosa e um gatinho maravilhoso. O AdoPetMe tornou tudo muito fácil! Coco se adaptou em menos de uma semana e hoje é dono da casa.',
      imageUrl:
        'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop',
      date: 'Fevereiro de 2025',
      featured: true,
    },
    {
      id: 4,
      petName: 'Thor',
      species: 'cachorro',
      breed: 'Golden Retriever',
      adopterName: 'Rodrigo e Camila Lima',
      location: 'Porto Alegre, RS',
      testimonial:
        'O Thor mudou completamente nossa rotina, para melhor! Fazemos caminhadas todos os dias e ele adora brincar com as crianças da vizinhança. Uma escolha que transformou a família.',
      imageUrl:
        'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop',
      date: 'Abril de 2025',
    },
    {
      id: 5,
      petName: 'Pipa',
      species: 'coelho',
      breed: 'Mini Lop',
      adopterName: 'Isabela Ferreira',
      location: 'Curitiba, PR',
      testimonial:
        'Nunca pensei que um coelho pudesse ser tão carinhoso! A Pipa passa horas deitada no meu colo enquanto trabalho de casa. É uma companhia perfeita para o home office.',
      imageUrl:
        'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=600&h=400&fit=crop',
      date: 'Março de 2025',
    },
    {
      id: 6,
      petName: 'Bela',
      species: 'gato',
      breed: 'Angorá',
      adopterName: 'Mariana Costa',
      location: 'Florianópolis, SC',
      testimonial:
        'A Bela tem personalidade única. Ela escolheu nosso quarto como seu território e nos acorda com ronrons toda manhã. Uma adoção que trouxe paz e alegria para casa.',
      imageUrl:
        'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&h=400&fit=crop',
      date: 'Maio de 2025',
    },
    {
      id: 7,
      petName: 'Duke',
      species: 'cachorro',
      breed: 'Beagle',
      adopterName: 'Carlos Andrade',
      location: 'Recife, PE',
      testimonial:
        'O Duke é o melhor parceiro de corrida que já tive. Acordamos juntos às 6h todos os dias. A adoção foi rápida e o suporte pós-adoção da equipe foi incrível.',
      imageUrl:
        'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=400&fit=crop',
      date: 'Janeiro de 2025',
    },
    {
      id: 8,
      petName: 'Mel',
      species: 'cachorro',
      breed: 'SRD',
      adopterName: 'Família Rodrigues',
      location: 'Brasília, DF',
      testimonial:
        'A Mel chegou como uma promessa e ficou como uma filha. Ela é esperta, amorosa e cuida de cada membro da família. Adotar foi a melhor escolha que já fizemos.',
      imageUrl:
        'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
      date: 'Junho de 2025',
    },
    {
      id: 9,
      petName: 'Pipoca',
      species: 'coelho',
      breed: 'Holandês',
      adopterName: 'Letícia Almeida',
      location: 'Salvador, BA',
      testimonial:
        'A Pipoca foi o presente que dei a mim mesma. Ela adora ser escovada e interage com todo mundo que chega em casa. Uma joia de animal!',
      imageUrl:
        'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=400&fit=crop',
      date: 'Fevereiro de 2025',
    },
    {
      id: 10,
      petName: 'Simba',
      species: 'gato',
      breed: 'Maine Coon',
      adopterName: 'Diego e Fernanda Torres',
      location: 'Campinas, SP',
      testimonial:
        'Adotamos o Simba quando ele tinha 4 meses. Hoje com 1 ano é um gigante gentil que adora ficar no colo assistindo séries. Imensamente recomendado!',
      imageUrl:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      date: 'Abril de 2025',
    },
    {
      id: 11,
      petName: 'Ginger',
      species: 'outro',
      breed: 'Hamster Sírio',
      adopterName: 'Sofia Nakamura',
      location: 'São Paulo, SP',
      testimonial:
        'Minha filha de 8 anos ficou apaixonada pela Ginger na hora. Ela alimenta, cuida e limpa a gaiola com todo o cuidado. Uma grande lição de responsabilidade para toda a família.',
      imageUrl:
        'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=400&fit=crop',
      date: 'Maio de 2025',
    },
    {
      id: 12,
      petName: 'Bolt',
      species: 'cachorro',
      breed: 'Border Collie',
      adopterName: 'Rafael Carvalho',
      location: 'Manaus, AM',
      testimonial:
        'O Bolt é incrivelmente inteligente. Em 2 meses aprendeu mais de 20 comandos. Fazemos agility juntos nos finais de semana e já participamos de competições amistosas.',
      imageUrl:
        'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=600&h=400&fit=crop',
      date: 'Junho de 2025',
    },
  ];

  get filteredStories(): SuccessStory[] {
    if (this.activeFilter === 'todos') return this.allStories;
    return this.allStories.filter((s) => s.species === this.activeFilter);
  }

  countByFilter(filter: SpeciesFilter): number {
    if (filter === 'todos') return this.allStories.length;
    return this.allStories.filter((s) => s.species === filter).length;
  }

  setFilter(filter: SpeciesFilter): void {
    this.activeFilter = filter;
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  speciesLabel(species: string): string {
    const map: Record<string, string> = {
      cachorro: 'Cachorro',
      gato: 'Gato',
      coelho: 'Coelho',
      outro: 'Outro',
    };
    return map[species] ?? species;
  }
}
