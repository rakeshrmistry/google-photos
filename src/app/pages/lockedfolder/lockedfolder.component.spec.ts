import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedfolderComponent } from './lockedfolder.component';

describe('LockedfolderComponent', () => {
  let component: LockedfolderComponent;
  let fixture: ComponentFixture<LockedfolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockedfolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockedfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
