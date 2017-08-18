import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { FormattingPanelComponent } from './formatting-panel/formatting-panel.component';
import {FormsModule} from '@angular/forms';
import { ImgPanelComponent } from './img-panel/img-panel.component';
import { CanvasSettingsComponent } from './canvas-settings/canvas-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    FormattingPanelComponent,
    ImgPanelComponent,
    CanvasSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
