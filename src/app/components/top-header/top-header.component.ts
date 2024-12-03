import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-top-header',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss'
})
export class TopHeaderComponent {

}
