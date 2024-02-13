import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './modules/game/components/game/game.component';
import { GameModule } from './modules/game/game.module';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    GameModule
  ],
  exports: [
    GameComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
