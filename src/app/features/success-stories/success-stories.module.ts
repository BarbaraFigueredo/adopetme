import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessStoriesRoutingModule } from './success-stories-routing.module';
import { SuccessStoriesPageComponent } from './pages/success-stories-page/success-stories-page.component';
import { SharedMaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [SuccessStoriesPageComponent],
  imports: [CommonModule, SuccessStoriesRoutingModule, SharedMaterialModule],
})
export class SuccessStoriesModule {}
