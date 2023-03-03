import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapIntigrationComponent } from './map-intigration.component';

describe('MapIntigrationComponent', () => {
  let component: MapIntigrationComponent;
  let fixture: ComponentFixture<MapIntigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapIntigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapIntigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
