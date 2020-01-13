export class Quote {

    showQuote: boolean;

    constructor(public id: number, public name: string, public quoteText: string, public quoteAuthor: string, public quoteSubmitter: string, public quoteUpVote: number = 0, public quoteDownVote: number = 0, public dateCreated: Date) {

        this.showQuote = false;

    }

}