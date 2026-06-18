import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { SharedMaterialModule } from './shared/material.module';
import { CoreModule } from './core/core.module';
import { App } from './app';
import { NotFoundComponent } from './features/not-found/not-found.component';

@NgModule({
  declarations: [App, NotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SharedMaterialModule,
    CoreModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
  ],
  bootstrap: [App],
})
export class AppModule {}
