import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-box',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DialogBoxComponent {
  
  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>) {}

  closeDialog() {
    this.dialogRef.close('Closed by user');
  }

  confirmDialog() {
    this.dialogRef.close('Confirmed');
  }
}
