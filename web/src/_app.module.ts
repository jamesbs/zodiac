import { NgModule } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { SharedModule } from './shared/shared.module'
import { AppRootComponent } from './presentation/app-root'
import { declarations } from './app.declarations'
import { Routes } from './app.routes'
import { config, Config, configProviders } from './config'
import { CardProvider } from './domain/providers';

@NgModule({
  declarations,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
    SharedModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: Config, useValue: config },
    ...configProviders,
    CardProvider,
  ],
  bootstrap: [ AppRootComponent ],
})
export class AppModule { }
