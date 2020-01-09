import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTimelineComponent } from './quote-timeline.component';

describe('QuoteTimelineComponent', () => {
  let component: QuoteTimelineComponent;
  let fixture: ComponentFixture<QuoteTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
