import { Auction } from "./Auction";
import { Bidder } from "./Bidder";

const greenIslandAuction = new Auction();
const xiaoJ = new Bidder('Xiao-Jay');
const chiYar = new Bidder('Chi-Yar');
const layOhLee = new Bidder('Lay-Oh-Lee');

xiaoJ.joinAuction(greenIslandAuction);
chiYar.joinAuction(greenIslandAuction);
layOhLee.joinAuction(greenIslandAuction);

xiaoJ.leaveAuction();
chiYar.leaveAuction();
layOhLee.leaveAuction();
