import { Component } from '@angular/core';
import { Pet, PetStatus, Species, AgeGroup, Size, PETS_DATA } from '../../pets.data';

export type { Species, AgeGroup, Size, PetStatus, Pet };

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

  readonly allPets: Pet[] = PETS_DATA;

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
