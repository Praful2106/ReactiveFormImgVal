import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutlinkComponent } from './routlink.component';

describe('RoutlinkComponent', () => {
  let component: RoutlinkComponent;
  let fixture: ComponentFixture<RoutlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
