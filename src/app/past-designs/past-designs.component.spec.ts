import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastDesignsComponent } from './past-designs.component';

describe('PastDesignsComponent', () => {
  let component: PastDesignsComponent;
  let fixture: ComponentFixture<PastDesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastDesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
