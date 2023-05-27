import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { GameControllerService } from 'src/api/gameController.service';

@Component({
  selector: 'app-play-word',
  templateUrl: './play-word.component.html',
  styleUrls: ['./play-word.component.scss']
})
export class PlayWordComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private gameService: GameControllerService){}
  word!: string;
  isRevealed = false;
  uuid!: string;
  user!: string;
  gameData!: any;
  owner!: string;
  switchRevealed(){
    this.isRevealed = !this.isRevealed;
  }

  async ngOnInit() {
    this.user = sessionStorage.getItem('username') as unknown as string;
    this.activatedRoute.paramMap.subscribe(async obs => {
      this.uuid = obs.get('id') as unknown as string;
      this.gameData = await lastValueFrom(this.gameService.getGame(this.uuid));
      this.owner = this.gameData.createdBy;
      await this.updateGameData();
      setInterval(async () => {
        await this.updateGameData();
      }, 2000);
    });

  }

  async updateGameData(){
    lastValueFrom(this.gameService.getWord(this.uuid,this.user)).then(res => {
      console.log(res);
      this.word = res;
    }, err => {
      console.log(err);
      this.word = err.error.text;
    });
  }

  async startGame() {
    const response = await lastValueFrom(this.gameService.startGame(this.uuid, this.user));
    console.log(response);
  }

}
