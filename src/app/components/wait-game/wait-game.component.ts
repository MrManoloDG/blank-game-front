import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { last, lastValueFrom } from 'rxjs';
import { GameControllerService } from 'src/api/gameController.service';

@Component({
  selector: 'app-wait-game',
  templateUrl: './wait-game.component.html',
  styleUrls: ['./wait-game.component.scss']
})
export class WaitGameComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private gameService: GameControllerService,
    private router: Router){}
  user!: string;
  gameId!: string;
  gameData: any;
  users = [];
  owner!: string;
  async ngOnInit() {
    this.user = sessionStorage.getItem('username') as unknown as string;
    this.activatedRoute.paramMap.subscribe(async obs => {
      this.gameId = obs.get('id') as unknown as string;
      console.log(this.gameId);
      await this.updateGameData();
      setInterval(async () => {
        await this.updateGameData();
      }, 2000);
    });
  }

  async updateGameData(){
    if(this.gameId){
      this.gameData = await lastValueFrom(this.gameService.getGame(this.gameId));
      console.log(this.gameData.isStarted);
      if(this.gameData.isStarted){
        this.router.navigate([`/play/${this.gameId}`]);
      }
      this.users = this.gameData.users;
      this.owner = this.gameData.createdBy;

    }
  }

  async startGame() {
    const response = await lastValueFrom(this.gameService.startGame(this.gameId, this.owner));
    console.log(response);
  }
}
