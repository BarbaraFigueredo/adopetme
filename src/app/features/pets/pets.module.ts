import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { SharedMaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [PetsPageComponent],
  imports: [CommonModule, RouterModule, PetsRoutingModule, SharedMaterialModule],
})
export class PetsModule {}
