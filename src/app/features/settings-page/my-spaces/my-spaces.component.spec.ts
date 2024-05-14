import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpacesComponent } from './my-spaces.component';

describe('MySpacesComponent', () => {
  let component: MySpacesComponent;
  let fixture: ComponentFixture<MySpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySpacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
