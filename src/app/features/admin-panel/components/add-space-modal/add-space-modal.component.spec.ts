import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpaceModalComponent } from './add-space-modal.component';

describe('AddSpaceModalComponent', () => {
  let component: AddSpaceModalComponent;
  let fixture: ComponentFixture<AddSpaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSpaceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSpaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
