import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PhotosSliderComponent } from '../../components/photos-slider/photos-slider.component';

@Component({
  selector: 'app-photos',
  imports: [CommonModule, PhotosSliderComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {

}
