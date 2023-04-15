import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { JoinModalComponent } from './join-modal/join-modal.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  constructor(public dialog: MatDialog){}

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateModalComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
    });
  }

  openJoinDialog(): void {
    const dialogRef = this.dialog.open(JoinModalComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
    });
  }

}
