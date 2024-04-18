import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSubmenuComponent } from './settings-submenu.component';

describe('SettingsSubmenuComponent', () => {
  let component: SettingsSubmenuComponent;
  let fixture: ComponentFixture<SettingsSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsSubmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
