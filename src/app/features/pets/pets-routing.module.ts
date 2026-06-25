import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { PetDetailPageComponent } from './pages/pet-detail-page/pet-detail-page.component';

const routes: Routes = [
  { path: '', component: PetsPageComponent },
  { path: ':id', component: PetDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
