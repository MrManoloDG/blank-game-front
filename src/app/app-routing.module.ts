import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { WaitGameComponent } from './components/wait-game/wait-game.component';
import { PlayWordComponent } from './components/play-word/play-word.component';

const routes: Routes = [
  { path: 'play/:id', component: PlayWordComponent},
  { path: 'wait/:id', component: WaitGameComponent},
  { path: '', component: MainMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
