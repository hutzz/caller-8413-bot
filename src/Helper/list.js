const CoinGecko = require("coingecko-api");

const CoinGeckoClient = new CoinGecko();

// list all available coins
const list = async () => {
	console.log(await CoinGeckoClient.coins.all());
};
list();
