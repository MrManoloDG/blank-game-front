import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { JoinModalComponent } from './join-modal/join-modal.component';
import { GameControllerService } from 'src/api/gameController.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  constructor(public dialog: MatDialog, public gameService: GameControllerService,
    private router: Router){}

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateModalComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(async result => {
      console.log(result);
      const response = await lastValueFrom(this.gameService.createGame(result.username));
      console.log('The dialog was closed');
      this.router.navigate([`/wait/${response}`]);
    });
  }

  openJoinDialog(): void {
    const dialogRef = this.dialog.open(JoinModalComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(async result => {
      const response = await  lastValueFrom(this.gameService.joinToGame({
        uuid: result.gameCode,
        user: result.username
      }));
      this.router.navigate([`/wait/${result.gameCode}`]);
      console.log('The dialog was closed');
    });
  }

}
