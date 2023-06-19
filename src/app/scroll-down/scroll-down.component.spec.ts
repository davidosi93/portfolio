import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDownComponent } from './scroll-down.component';

describe('ScrollDownComponent', () => {
  let component: ScrollDownComponent;
  let fixture: ComponentFixture<ScrollDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollDownComponent]
    });
    fixture = TestBed.createComponent(ScrollDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
