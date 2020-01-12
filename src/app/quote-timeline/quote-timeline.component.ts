import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-timeline',
  templateUrl: './quote-timeline.component.html',
  styleUrls: ['./quote-timeline.component.css']
})
export class QuoteTimelineComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean) {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
