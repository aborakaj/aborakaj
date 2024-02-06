import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesksComponent } from './desks.component';

describe('DesksComponent', () => {
  let component: DesksComponent;
  let fixture: ComponentFixture<DesksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
