import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Freedom', 'Its always to early to quit', 'Norman Vincent Peale', 'Ciku', 0, 0, new Date(2000, 1, 1)),
    new Quote(2, 'Silly', 'Nitwit, Blubber, Odmeant and Tweak', 'Albus Dumbledore','Ciku', 0, 0, new Date(2001, 1, 1)),
    new Quote(3, 'Improvement', 'What you do today can  improve your tommorrow', 'Ralph Marston','Ciku', 0, 0, new Date(2002, 1, 1)),
    new Quote(4, 'Goals', 'Set your goals high and dont stop unitl you get  there', 'Bo Jackson','Ciku', 0, 0, new Date(2003, 1, 1)),
    new Quote(5, 'Success', 'Success consists  of going from failure to failure without loss of enthusiasm', 'Winston Churchill','Ciku', 0, 0, new Date(2004, 1, 1)),
    new Quote(6, 'Perserverence', 'Perserverence is failing 19 times and succeeding the 20th', 'Julie Andrews','Ciku', 0, 0, new Date(2005, 1, 1)),
    new Quote(7, 'Wake Up', 'Wake up Wake up, better get this bread better get this cake up', 'Jhene Aiko','Ciku', 0, 0, new Date(2006, 1, 1)),
    new Quote(8, 'Motivation', 'Imma break you off let me be your motivation', 'Normani','Ciku', 0, 0, new Date(2007, 1, 1)),
    new Quote(9, 'Clout', 'They do anything for clout', 'Cardi B and Offset','Ciku', 0, 0, new Date(2008, 1, 1)),
    new Quote(10, 'Cartier', 'Bartier Cardi in the rarri diamonds all over my body','Cardi B','Ciku', 0, 0, new Date(2018, 1, 1))
  ];

  toggleDetails(index) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm('Are you sure you want to delete this goal?');

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  upvoteQuote(isUpVoted, index) {
    if (isUpVoted) {
      this.quotes[index].quoteUpVote++;
    }
  }

  downvoteQuote(isDownVoted, index) {
    if (isDownVoted) {
      this.quotes[index].quoteDownVote++;
    }
  }

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.dateCreated = new Date();
    this.quotes.push(quote);
  }

  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return (b.quoteUpVote) as any - (a.quoteUpVote) as any;
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
