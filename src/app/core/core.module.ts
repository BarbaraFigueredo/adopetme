import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedMaterialModule } from '../shared/material.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule, SharedMaterialModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
