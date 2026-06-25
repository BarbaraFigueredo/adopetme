import { Component } from '@angular/core';

export type Species = 'cachorro' | 'gato' | 'coelho' | 'cavalo';
export type AgeGroup = 'filhote' | 'jovem' | 'adulto' | 'senior';
export type Size = 'pequeno' | 'medio' | 'grande';
export type PetStatus = 'disponivel' | 'reservado' | 'em_adocao' | 'adotado';

export interface Pet {
  id: number;
  name: string;
  species: Species;
  breed: string;
  age: string;
  ageGroup: AgeGroup;
  size: Size;
  temperament: string[];
  color: string;
  sex: 'macho' | 'femea';
  location: string;
  imageUrl: string;
  status: PetStatus;
  description: string;
}

@Component({
  selector: 'app-pets-page',
  templateUrl: './pets-page.component.html',
  styleUrls: ['./pets-page.component.scss'],
  standalone: false,
})
export class PetsPageComponent {
  filtersOpen = false;

  species: Species | '' = '';
  size: Size | '' = '';
  ageGroup: AgeGroup | '' = '';
  temperament = '';
  color = '';

  readonly speciesOptions: Array<{ label: string; value: Species | ''; icon: string }> = [
    { label: 'Todos', value: '', icon: 'favorite' },
    { label: 'Cachorros', value: 'cachorro', icon: 'pets' },
    { label: 'Gatos', value: 'gato', icon: 'cruelty_free' },
    { label: 'Coelhos', value: 'coelho', icon: 'emoji_nature' },
    { label: 'Cavalos', value: 'cavalo', icon: 'agriculture' },
  ];

  readonly sizeOptions: Array<{ label: string; value: Size | '' }> = [
    { label: 'Todos', value: '' },
    { label: 'Pequeno', value: 'pequeno' },
    { label: 'Médio', value: 'medio' },
    { label: 'Grande', value: 'grande' },
  ];

  readonly ageGroupOptions: Array<{ label: string; value: AgeGroup | '' }> = [
    { label: 'Todas', value: '' },
    { label: 'Filhote', value: 'filhote' },
    { label: 'Jovem', value: 'jovem' },
    { label: 'Adulto', value: 'adulto' },
    { label: 'Sênior', value: 'senior' },
  ];

  readonly temperamentOptions = [
    { label: 'Todos', value: '' },
    { label: 'Tranquilo', value: 'Tranquilo' },
    { label: 'Brincalhão', value: 'Brincalhão' },
    { label: 'Carinhoso', value: 'Carinhoso' },
    { label: 'Independente', value: 'Independente' },
    { label: 'Ativo', value: 'Ativo' },
    { label: 'Dócil', value: 'Dócil' },
  ];

  readonly colorOptions = [
    { label: 'Todas', value: '', hex: '' },
    { label: 'Preto', value: 'Preto', hex: '#1a1a1a' },
    { label: 'Branco', value: 'Branco', hex: '#e8e8e8' },
    { label: 'Caramelo', value: 'Caramelo', hex: '#C8834A' },
    { label: 'Cinza', value: 'Cinza', hex: '#9E9E9E' },
    { label: 'Marrom', value: 'Marrom', hex: '#6D4C41' },
    { label: 'Laranja', value: 'Laranja', hex: '#FF7043' },
    { label: 'Malhado', value: 'Malhado', hex: '#A5896A' },
  ];

  readonly allPets: Pet[] = [
    {
      id: 1,
      name: 'Mel',
      species: 'cachorro',
      breed: 'Golden Retriever',
      age: '2 anos',
      ageGroup: 'adulto',
      size: 'grande',
      temperament: ['Brincalhão', 'Carinhoso', 'Ativo'],
      color: 'Caramelo',
      sex: 'femea',
      location: 'São Paulo, SP',
      imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop',
      status: 'disponivel',
      description: 'Mel é uma Golden adorável, ótima com crianças e outros animais. Adora passear e brincar no parque.',
    },
    {
      id: 2,
      name: 'Thor',
      species: 'cachorro',
      breed: 'Labrador',
      age: '3 anos',
      ageGroup: 'adulto',
      size: 'grande',
      temperament: ['Ativo', 'Brincalhão', 'Carinhoso'],
      color: 'Preto',
      sex: 'macho',
      location: 'Belo Horizonte, MG',
      imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      status: 'disponivel',
      description: 'Thor é um Labrador cheio de energia. Ama nadar e fazer trilhas com a família.',
    },
    {
      id: 3,
      name: 'Bob',
      species: 'cachorro',
      breed: 'Beagle',
      age: '1 ano',
      ageGroup: 'jovem',
      size: 'medio',
      temperament: ['Brincalhão', 'Ativo', 'Carinhoso'],
      color: 'Caramelo',
      sex: 'macho',
      location: 'Florianópolis, SC',
      imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=300&fit=crop',
      status: 'reservado',
      description: 'Bob é um Beagle curioso e animado. Adora explorar e farejar tudo ao redor.',
    },
    {
      id: 4,
      name: 'Bolt',
      species: 'cachorro',
      breed: 'Border Collie',
      age: '6 meses',
      ageGroup: 'filhote',
      size: 'medio',
      temperament: ['Ativo', 'Brincalhão', 'Independente'],
      color: 'Preto',
      sex: 'macho',
      location: 'Porto Alegre, RS',
      imageUrl: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=400&h=300&fit=crop',
      status: 'disponivel',
      description: 'Bolt é um filhote inteligentíssimo. Aprende comandos rapidamente e adora agility.',
    },
    {
      id: 5,
      name: 'Princesa',
      species: 'cachorro',
      breed: 'Poodle',
      age: '5 anos',
      ageGroup: 'adulto',
      size: 'pequeno',
      temperament: ['Tranquilo', 'Carinhoso', 'Dócil'],
      color: 'Branco',
      sex: 'femea',
      location: 'Recife, PE',
      imageUrl: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop',
      status: 'disponivel',
      description: 'Princesa é uma Poodle delicada e amorosa. Perfeita para apartamentos e famílias tranquilas.',
    },
    {
      id: 6,
      name: 'Luna',
      species: 'gato',
      breed: 'Siamês',
      age: '1 ano',
      ageGroup: 'jovem',
      size: 'pequeno',
      temperament: ['Independente', 'Carinhoso', 'Tranquilo'],
      color: 'Cinza',
      sex: 'femea',
      location: 'Rio de Janeiro, RJ',
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop',
      status: 'disponivel',
      description: 'Luna é elegante e misteriosa. Adora ficar no colo ao entardecer e observar o mundo pela janela.',
    },
    {
      id: 7,
      name: 'Simba',
      species: 'gato',
      breed: 'Maine Coon',
      age: '2 anos',
      ageGroup: 'adulto',
      size: 'medio',
      temperament: ['Carinhoso', 'Dócil', 'Brincalhão'],
      color: 'Caramelo',
      sex: 'macho',
      location: 'Campinas, SP',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      status: 'disponivel',
      description: 'Simba é um gigante gentil. Adora assistir séries no colo do dono e ronronar no friozinho.',
    },
    {
      id: 8,
      name: 'Bela',
      species: 'gato',
      breed: 'Persa',
      age: '4 anos',
      ageGroup: 'adulto',
      size: 'pequeno',
      temperament: ['Tranquilo', 'Independente', 'Dócil'],
      color: 'Branco',
      sex: 'femea',
      location: 'Porto Alegre, RS',
      imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop',
      status: 'disponivel',
      description: 'Bela é serena e elegante. Prefere ambientes tranquilos e adora ser escovada diariamente.',
    },
    {
      id: 9,
      name: 'Coco',
      species: 'gato',
      breed: 'Angorá',
      age: '8 meses',
      ageGroup: 'filhote',
      size: 'pequeno',
      temperament: ['Brincalhão', 'Carinhoso', 'Ativo'],
      color: 'Laranja',
      sex: 'macho',
      location: 'Belo Horizonte, MG',
      imageUrl: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=400&h=300&fit=crop',
      status: 'disponivel',
      description: 'Coco é laranjinha e cheio de energia. Adora brincar com bolinhas, cordas e fazer travessuras.',
    },
    {
      id: 10,
      name: 'Pipa',
      species: 'coelho',
      breed: 'Mini Lop',
      age: '8 meses',
      ageGroup: 'jovem',
      size: 'pequeno',
      temperament: ['Dócil', 'Carinhoso', 'Tranquilo'],
      color: 'Cinza',
      sex: 'femea',
      location: 'Curitiba, PR',
      imageUrl: 'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=400&h=300&fit=crop',
      status: 'disponivel',
      description: 'Pipa é uma coelha adorável. Adora ficar no colo durante o home office e adora cenouras.',
    },
    {
      id: 11,
      name: 'Pipoca',
      species: 'coelho',
      breed: 'Holandês',
      age: '1 ano',
      ageGroup: 'jovem',
      size: 'pequeno',
      temperament: ['Brincalhão', 'Carinhoso', 'Ativo'],
      color: 'Branco',
      sex: 'femea',
      location: 'Salvador, BA',
      imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop',
      status: 'disponivel',
      description: 'Pipoca é branca e cheia de personalidade. Interage com todo mundo que chega em casa.',
    },
    {
      id: 12,
      name: 'Trovão',
      species: 'cavalo',
      breed: 'Quarto de Milha',
      age: '5 anos',
      ageGroup: 'adulto',
      size: 'grande',
      temperament: ['Dócil', 'Ativo', 'Tranquilo'],
      color: 'Marrom',
      sex: 'macho',
      location: 'Campinas, SP',
      imageUrl: 'https://images.unsplash.com/photo-1553284966-19b8815c7817?w=400&h=300&fit=crop',
      status: 'disponivel',
      description: 'Trovão é manso e bem treinado. Excelente para equoterapia, hipismo e passeios em família.',
    },
    {
      id: 13,
      name: 'Aurora',
      species: 'cavalo',
      breed: 'Árabe',
      age: '4 anos',
      ageGroup: 'adulto',
      size: 'grande',
      temperament: ['Ativo', 'Tranquilo', 'Dócil'],
      color: 'Caramelo',
      sex: 'femea',
      location: 'Interior de SP',
      imageUrl: 'https://images.unsplash.com/photo-1566251037378-5e04e3bec343?w=400&h=300&fit=crop',
      status: 'disponivel',
      description: 'Aurora é uma égua elegante e ágil. Adora galopadas e é ótima para iniciantes no hipismo.',
    },
  ];

  get filteredPets(): Pet[] {
    return this.allPets.filter((pet) => {
      if (this.species && pet.species !== this.species) return false;
      if (this.size && pet.size !== this.size) return false;
      if (this.ageGroup && pet.ageGroup !== this.ageGroup) return false;
      if (this.temperament && !pet.temperament.includes(this.temperament)) return false;
      if (this.color && pet.color !== this.color) return false;
      return true;
    });
  }

  get activeFilterCount(): number {
    return [this.species, this.size, this.ageGroup, this.temperament, this.color]
      .filter((v) => v !== '').length;
  }

  get hasActiveFilters(): boolean {
    return this.activeFilterCount > 0;
  }

  clearFilters(): void {
    this.species = '';
    this.size = '';
    this.ageGroup = '';
    this.temperament = '';
    this.color = '';
  }

  statusLabel(status: PetStatus): string {
    const map: Record<PetStatus, string> = {
      disponivel: 'Disponível',
      reservado: 'Reservado',
      em_adocao: 'Em adoção',
      adotado: 'Adotado',
    };
    return map[status];
  }

  sizeLabel(size: Size): string {
    const map: Record<Size, string> = {
      pequeno: 'Pequeno',
      medio: 'Médio',
      grande: 'Grande',
    };
    return map[size];
  }

  speciesIcon(species: Species): string {
    const map: Record<Species, string> = {
      cachorro: 'pets',
      gato: 'cruelty_free',
      coelho: 'emoji_nature',
      cavalo: 'agriculture',
    };
    return map[species];
  }

  speciesLabel(species: Species): string {
    const map: Record<Species, string> = {
      cachorro: 'Cachorro',
      gato: 'Gato',
      coelho: 'Coelho',
      cavalo: 'Cavalo',
    };
    return map[species];
  }

  colorHex(color: string): string {
    return this.colorOptions.find((c) => c.value === color)?.hex ?? '';
  }
}
