import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuMobileComponent } from './header-menu-mobile.component';

describe('HeaderMenuMobileComponent', () => {
  let component: HeaderMenuMobileComponent;
  let fixture: ComponentFixture<HeaderMenuMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderMenuMobileComponent]
    });
    fixture = TestBed.createComponent(HeaderMenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
