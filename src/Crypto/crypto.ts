import Coins from "./CoinFetch";
// index.ts won't let me import CoinFetch... but this will apparently
const coinsWrapper = async () => {
	const hold = await Coins();
	return hold;
};
export default coinsWrapper;
