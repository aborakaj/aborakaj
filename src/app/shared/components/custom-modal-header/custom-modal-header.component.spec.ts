import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModalHeaderComponent } from './custom-modal-header.component';

describe('CustomModalHeaderComponent', () => {
  let component: CustomModalHeaderComponent;
  let fixture: ComponentFixture<CustomModalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomModalHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
