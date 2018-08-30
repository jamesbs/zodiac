import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { declarations } from './app.declarations'
import { AppRootComponent } from './components'

@NgModule({
  declarations,
  imports: [
    BrowserModule,
  ],
  bootstrap: [ AppRootComponent ],
})
export class AppModule {

}
