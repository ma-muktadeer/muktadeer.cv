import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedComponentComponent } from './animated-component.component';

describe('AnimatedComponentComponent', () => {
  let component: AnimatedComponentComponent;
  let fixture: ComponentFixture<AnimatedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
