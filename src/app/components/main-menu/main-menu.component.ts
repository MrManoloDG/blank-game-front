import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { JoinModalComponent } from './join-modal/join-modal.component';
import { GameControllerService } from 'src/api/gameController.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  constructor(public dialog: MatDialog, public gameService: GameControllerService,
    private router: Router){}

  async openCreateDialog(): Promise<void> {
    const blankTotal = await this.selectBlankNumber();
    const hostUser = `host${console.log(Math.floor(100000 + Math.random() * 900000))}`;
    const response = await lastValueFrom(this.gameService.createGame(hostUser, blankTotal)) as any;
      console.log('The dialog was closed');
      sessionStorage.setItem('username', hostUser);
      this.router.navigate([`/wait/${response.uuid}`]);

  }


  async selectBlankNumber(){
    const {value: number} = await Swal.fire({
      title: 'Select the number of Blank players',
      input: 'number',
      inputLabel: 'Number of Blank players',
      inputPlaceholder: '1',
      inputValue: 1
    });
    return number;
  }

  async openJoinDialog(): Promise<void> {
    const username = await this.enterUsername();
    const gameCode = await this.enterGameCode();

    if(gameCode && username){
      const response = await  lastValueFrom(this.gameService.joinToGame({
        uuid: gameCode,
        user: username
      }));
      sessionStorage.setItem('username', username);
      this.router.navigate([`/wait/${gameCode}`]);
      console.log('The dialog was closed');
    }

  }


  async enterUsername(){
    const {value: username} = await Swal.fire({
      title: 'Enter your username',
      input: 'text',
      inputLabel: 'Username',
      inputPlaceholder: 'Enter your username'
    });
    return username;
  }

  async enterGameCode(){
    const {value: username} = await Swal.fire({
      title: 'Enter game code',
      input: 'text',
      inputLabel: 'Game Code',
      inputPlaceholder: 'Enter game code'
    });
    return username;
  }



}
