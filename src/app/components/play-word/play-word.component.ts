import { Component } from '@angular/core';

@Component({
  selector: 'app-play-word',
  templateUrl: './play-word.component.html',
  styleUrls: ['./play-word.component.scss']
})
export class PlayWordComponent {

  isRevealed = false;

  switchRevealed(){
    this.isRevealed = !this.isRevealed;
  }

}
