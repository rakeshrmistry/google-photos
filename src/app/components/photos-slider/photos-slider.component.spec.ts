import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosSliderComponent } from './photos-slider.component';

describe('PhotosSliderComponent', () => {
  let component: PhotosSliderComponent;
  let fixture: ComponentFixture<PhotosSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
