import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Pet,
  PetStatus,
  Species,
  Size,
  TimelineEventType,
  PETS_DATA,
} from '../../pets.data';

@Component({
  selector: 'app-pet-detail-page',
  templateUrl: './pet-detail-page.component.html',
  styleUrls: ['./pet-detail-page.component.scss'],
  standalone: false,
})
export class PetDetailPageComponent implements OnInit {
  pet: Pet | null = null;
  notFound = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pet = PETS_DATA.find((p) => p.id === id) ?? null;
    this.notFound = !this.pet;
  }

  largeImageUrl(pet: Pet): string {
    return pet.imageUrl.replace('?w=400&h=300&fit=crop', '?w=1200&h=600&fit=crop');
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

  sexLabel(sex: 'macho' | 'femea'): string {
    return sex === 'macho' ? 'Macho' : 'Fêmea';
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

  pronoun(sex: 'macho' | 'femea'): string {
    return sex === 'femea' ? 'ela' : 'ele';
  }

  eventConfig(type: TimelineEventType): { icon: string; color: string; label: string } {
    const map: Record<TimelineEventType, { icon: string; color: string; label: string }> = {
      resgate:      { icon: 'volunteer_activism', color: '#2196F3', label: 'Resgate' },
      veterinario:  { icon: 'medical_services',  color: '#8D6E63', label: 'Veterinário' },
      vacinacao:    { icon: 'vaccines',           color: '#4CAF50', label: 'Vacinação' },
      castracao:    { icon: 'health_and_safety',  color: '#9C27B0', label: 'Castração' },
      vermifugacao: { icon: 'medication',         color: '#FF9800', label: 'Vermifugação' },
      banho_tosa:   { icon: 'shower',             color: '#00BCD4', label: 'Banho e Tosa' },
      disponivel:   { icon: 'favorite',           color: '#C2724F', label: 'Disponível' },
      reservado:    { icon: 'bookmark',           color: '#D9836A', label: 'Reservado' },
      em_adocao:    { icon: 'home',               color: '#C7A882', label: 'Em Adoção' },
      adotado:      { icon: 'celebration',        color: '#4CAF50', label: 'Adotado' },
    };
    return map[type];
  }
}
