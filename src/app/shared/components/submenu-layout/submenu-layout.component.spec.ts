import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuLayoutComponent } from './submenu-layout.component';

describe('LayoutComponent', () => {
  let component: SubmenuLayoutComponent;
  let fixture: ComponentFixture<SubmenuLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmenuLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
