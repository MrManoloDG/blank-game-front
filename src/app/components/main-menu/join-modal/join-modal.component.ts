import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateGame } from 'src/app/interfaces/create-game';
import { JoinGame } from 'src/app/interfaces/join-game';

@Component({
  selector: 'app-join-modal',
  templateUrl: './join-modal.component.html',
  styleUrls: ['./join-modal.component.scss']
})
export class JoinModalComponent {
  constructor(
    public dialogRef: MatDialogRef<JoinModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JoinGame,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  OnlyNumbers($event: any) {
    let regex: RegExp = new RegExp(/^[0-9]{1,}$/g);
    let specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowRight','ArrowLeft'];
    if (specialKeys.indexOf($event.key) !== -1) {
      return;
    } else {
      if (regex.test($event.key)) {
        return true;
      } else {
        return false;
      }
    }
    }
}
