import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { JoinModalComponent } from './components/main-menu/join-modal/join-modal.component';
import { CreateModalComponent } from './components/main-menu/create-modal/create-modal.component';
import { FormsModule } from '@angular/forms';
import { WaitGameComponent } from './components/wait-game/wait-game.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlayWordComponent } from './components/play-word/play-word.component';
import { GameControllerService } from 'src/api/gameController.service';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    JoinModalComponent,
    CreateModalComponent,
    WaitGameComponent,
    PlayWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    QRCodeModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [GameControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
