import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessStoriesPageComponent } from './pages/success-stories-page/success-stories-page.component';

const routes: Routes = [{ path: '', component: SuccessStoriesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessStoriesRoutingModule {}
