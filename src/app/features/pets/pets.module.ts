import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';

@NgModule({
  declarations: [PetsPageComponent],
  imports: [CommonModule, PetsRoutingModule],
})
export class PetsModule {}
