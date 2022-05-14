const CoinGecko = require("coingecko-api");

// does not like to cooperate with typescript
const CoinGeckoClient = new CoinGecko();

// custom padding function
const pad = (pad, str, padLeft) => {
	if (typeof str === "undefined") return pad;
	if (padLeft) {
		return (pad + str).slice(-pad.length);
	} else {
		return (str + pad).substring(0, pad.length);
	}
};

// format object data
const formatString = (arr) => {
	let formatArray = [];
	const baseString = `COIN           PRICE        24h HIGH        24h LOW        24h CHANGE\n`;
	for (var x = 0; x < arr.length; x++) {
		for (const key in arr[x]) {
			formatArray.push(pad("               ", arr[x][key], false));
		}
		formatArray.push("\n");
	}
	return (
		"```\n" +
		baseString +
		formatArray.toString().replaceAll(",", "") +
		"```"
	);
};

// get raw data and extract useful data into an array of objects
const Coins = async () => {
	let coinData = await CoinGeckoClient.coins.markets({
		ids: ["bitcoin, ethereum, monero, algorand, cosmos, chainlink"],
		vs_currency: "cad",
	});
	const usefulData = coinData.data.map((c) => ({
		name: c.name,
		current_price: c.current_price,
		high_24h: c.high_24h,
		low_24h: c.low_24h,
		price_change_percentage_24h: c.price_change_percentage_24h,
	}));
	console.log(formatString(usefulData));
	return formatString(usefulData);
};
export default Coins;
