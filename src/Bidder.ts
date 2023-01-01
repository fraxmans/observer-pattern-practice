import type { Observer } from './interface/Observer';
import { Auction } from './Auction';

export class Bidder implements Observer {
  id: string;
  auction: Auction | null = null;

  constructor(id: string) {
    this.id = id;
  }

  joinAuction(auction: Auction): void {
    this.auction = auction;
    this.auction.register(this);
  }

  leaveAuction(): void {
    this.auction?.unregister(this);
    this.auction = null;
  }

  getObserverableStatus(): void {
    const numOfBidders = this.auction?.getNumberOfBidders();
    console.log(`[${this.id}]: There are ${numOfBidders} bidder(s) right now.`);
  }
}
