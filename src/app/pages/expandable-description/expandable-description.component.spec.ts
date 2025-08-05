import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableDescriptionComponent } from './expandable-description.component';

describe('ExpandableDescriptionComponent', () => {
  let component: ExpandableDescriptionComponent;
  let fixture: ComponentFixture<ExpandableDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandableDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandableDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
