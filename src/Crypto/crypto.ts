import coins from "./coin-fetch";
const coinsWrapper = async () => {
	const hold = await coins();
	return hold;
};
export default coinsWrapper;
