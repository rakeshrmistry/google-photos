import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-progress-bar',
  imports: [MatProgressBarModule, CommonModule, MatButtonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {

  currentSize:number = 7.5; // Current progress in GB (initially 0)
  totalSize:number= 15;  // Total size in GB (15GB)

  get progressPercentage() {
    return (this.currentSize / this.totalSize) * 100;
  }



}
