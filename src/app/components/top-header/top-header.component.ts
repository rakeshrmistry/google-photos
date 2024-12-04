import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-top-header',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule, MatDialogModule],
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  private dialogRef: any;  // Reference to the currently opened dialog

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    // Listen for route changes and close the dialog on navigation start
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.dialogRef) {
          this.dialogRef.close();  // Close the dialog if it's open
        }
      }
    });
  }

  openDialog(event: MouseEvent): void {
    // Check if the dialog is already open
    if (this.dialogRef && this.dialogRef.getState() === 'opened') {
      // If dialog is open, close it
      this.dialogRef.close();
    } else {
      // If dialog is closed, open it
      this.dialogRef = this.dialog.open(DialogBoxComponent, {
        panelClass: 'custom-dialog-container',  // Custom class for dialog styling
        width: '400px',
        data: { message: 'Hello from the header button!' },  // Passing data to the dialog
        hasBackdrop: false  // Remove backdrop (overlay)
      });

      // Position the dialog based on the click location (optional)
      this.dialogRef.afterOpened().subscribe(() => {
        const overlayContainer = document.querySelector('.mat-dialog-container');
        if (overlayContainer) {
          const overlay = overlayContainer as HTMLElement;
          overlay.style.position = 'absolute';
          overlay.style.top = `${event.clientY + 10}px`;  // Adjust vertical position
          overlay.style.left = `${event.clientX - 150}px`;  // Adjust horizontal position
        }
      });
    }

    // Log dialog result when closed
    this.dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
