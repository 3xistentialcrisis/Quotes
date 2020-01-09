import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteVotingComponent } from './quote-voting.component';

describe('QuoteVotingComponent', () => {
  let component: QuoteVotingComponent;
  let fixture: ComponentFixture<QuoteVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
