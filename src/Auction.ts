import { Observable } from './interface/Observable';
import { Bidder } from './Bidder';

export class Auction implements Observable {
  bidders: Bidder[];

  constructor() {
    this.bidders = [];
  }

  register(bidder: Bidder): void {
    const isAlreadyJoined = this.bidders.some((joinedBidder) => {
      return joinedBidder.id === bidder.id;
    });

    if (isAlreadyJoined) throw Error('Already Joined !!!');

    this.bidders.push(bidder);
    this.notify();
  }

  unregister(bidder: Bidder): void {
    const isJoined = this.bidders.some((joinedBidder) => {
      return joinedBidder.id === bidder.id;
    });

    if (!isJoined) throw Error('Not Joined !!!');

    this.bidders = this.bidders.filter(
      (joinedBidder) => joinedBidder.id !== bidder.id
    );
    this.notify();
  }

  notify(): void {
    this.bidders.forEach((bidder) => bidder.getObserverableStatus());
  }

  getNumberOfBidders(): number {
    return this.bidders.length;
  }
}
