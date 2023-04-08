import { Message } from "discord.js";
import * as pattern from "../helper/patterns";
import config from "../config";

const responses = async (message: Message<boolean>, authorInfo: any) => {
	try {
		const { id, name } = authorInfo;
		if (id !== "973731092836266024") {
			if (
				message.content.toLowerCase() === "yo" &&
				authorInfo.id !== config.CLIENT_ID
			) {
				console.log("messageCreate: brady");
				console.log(`author: ${name}`);
				console.log(`id: ${id}`);
				await message.reply("WHAT'S UP BRADY?");
			}
			if (message.content === "<rant>") {
				console.log("messageCreate: rant");
				console.log(`author: ${name}`);
				console.log(`id: ${id}`);
				await message.reply(
					"I understand that I may be gifted with these sorts of things, and as such I'm not an example of a typical peer, but I've had this assignment done since like 3 days after it came out. 2 weeks should be ample time for anyone to do it. If not, you need to learn valuable skills like reading documentation (I posted a link to JavaCUP documentation, it's in the pins) and googling effectively (a simple google search for JLex help will eventually point you do Princeton U's amazing documentation). If you can't google and read documentation, you will not make it in software development."
				);
			}
			if (message.content.match(pattern.redditMoment)) {
				console.log("reddit moment observed");
				await message.reply("reddit moment");
			}
			if (message.content.toLowerCase() === "china") {
				await message.reply(
					"动态网自由门 天安門 天安门 法輪功 李洪志 Free Tibet 六四天安門事件 The Tiananmen Square protests of 1989 天安門大屠殺 The Tiananmen Square Massacre 反右派鬥爭 The Anti-Rightist Struggle 大躍進政策 The Great Leap Forward 文化大革命 The Great Proletarian Cultural Revolution 人權 Human Rights 民運 Democratization 自由 Freedom 獨立 Independence 多黨制 Multi-party system 台灣 臺灣 Taiwan Formosa 中華民國 Republic of China 西藏 土伯特 唐古特 Tibet 達賴喇嘛 Dalai Lama 法輪功 Falun Dafa 新疆維吾爾自治區 The Xinjiang Uyghur Autonomous Region 諾貝爾和平獎 Nobel Peace Prize 劉暁波 Liu Xiaobo 民主 言論 思想 反共 反革命 抗議 運動 騷亂 暴亂 騷擾 擾亂 抗暴 平反 維權 示威游行 李洪志 法輪大法 大法弟子 強制斷種 強制堕胎 民族淨化 人體實驗 肅清 胡耀邦 趙紫陽 魏京生 王丹 還政於民 和平演變 激流中國 北京之春 大紀元時報 九評論共産黨 獨裁 專制 壓制 統一 監視 鎮壓 迫害 侵略 掠奪 破壞 拷問 屠殺 活摘器官 誘拐 買賣人口 遊進 走私 毒品 賣淫 春畫 賭博 六合彩 天安門 天安门 法輪功 李洪志 Winnie the Pooh 劉曉波动态网自由门"
				);
			}
			if (message.content.toLowerCase().match(pattern.liberal)) {
				await message.reply(
					"You're a sorry lot to have an angry, tactless nerd like Polievre as your front runner. Looks like your plan to make a coalition party out of two previously failed parties has only resulted in an even bigger failed party. You all might want to try a little introspection and wake up and read the room for a change. We live in a world where we need to support each other and respect our differences because there are much greater evils to face out there than our petty differences. The entire Conservative platform has already shifted to the left universally, literally mimicking leftist policies across the board (look at the leftist policy shifts of the last election), so why throw your vote away on a half-measure party when the Liberals have done things very well? (Don't come at me and tell me ANYONE is perfect..) The way they handled the pandemic leading to excellent public safety and unprecedented cooperation between the federal and provincial governments, universal child care resulting in better support for working moms, improved housing, carbon tax, legalization of marijuana leading to reduced crime. What, if anything, have the Conservatives ever accomplished, besides creating a federal pay system that doesn't work and crippling critical government systems to the point that they have been easily overwhelmed during crises through needless centralization? Polievre wrote an essay in high school about what he'd do if he was Prime Minister... what person who is actually worthy of leadership has ever daydreamed about being a leader besides the obvious dictators and people who want to be the centre of attention? Does this not disturb any of you? He's not a leader, he's a poser who wants attention and he's so flippant he's guaranteed to run anything he's in charge of straight into the ground in a hurry."
				);
				await message.reply(
					"If you really love your country then it's time to wake up and make a change, and that starts with how you vote. Join the rest of the world in being cooperative and nurturing policies that help us look after each other, it's actually nice when you get to experience being a part of it. There's no blue in my flag.☝️🇨🇦"
				);
			}
			if (message.content.toLowerCase().match(pattern.bts)) {
				await message.reply("forced to wipe");
			}
			if (message.content.toLowerCase() === "earth") {
				await message.reply(
					"Earth is the best country 地球是最好的国家 Earth strongest country 地球最强国家 Earth2420 地球2420 Earthian Empire bestest 地球帝国最好 The great Earth 伟大的地球 Earth rights 地球权利 Earthization 接地化 Earth independence 地球独立 Taiwan belongs to Earth 台湾属于地球 China belongs to Earth 中国属于地球 Israel and Palestine are Earthian lands 以色列和巴勒斯坦是地球的土地 Kosovo je Earth 科索沃地球 Crimea is Earth 克里米亚就是地球 Republic of Earth 地球共和国 Earth 地球地球是最好的国家 地球是最好的国家 地球最强国家 地球最强国家 地球地球帝国最好的 地球帝国最好 伟大的地球 地球权利 地球权利 接地化 地球独立 地球独立 台湾 属于地球 台湾属于地球 中国属于地球 中国属于地球 以色列和巴勒斯坦是地球的土地 科索沃 地球 科索沃地球 克里米亚就是地球 克里米亚就是地球 地球共和国 地球 地球"
				);
				await message.reply(
					`
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠟⠛⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⣀⠀⠀⠈⠙⢿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⢳⣿⡇⠀⠀⠸⣿⡏⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⠿⠈⣀⠀⠀⠀⠀⠹⣷⡀⠀⠀⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣦⠀⣜⣿⡄⠀⠀⢤⣶⣿⠇⢸⡛⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡃⠈⠉⠁⠀⠀⠈⠛⠁⠀⠸⢴⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠃⠠⠴⠒⠂⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣦⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⢀⣴⣾⣿⣿⣿⡿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣶⣶⠀⣿⣿⣿⣿⣿⣿⣧⠀⠉⠙⠛⠿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⠆⠈⠀⢻⣽⠿⣿⣿⣷⡀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⠿⠋⠉⠈⣿⡀⠀⠀⢸⡟⠀⠈⠉⠉⠁⠀⠀⠀
⢀⢀⢀⢀⢀⡀⣤⠐⢒⣾⠛⠳⠶⣦⣤⡀
⢀⢀⣀⣴⣶⣾⠥⠒⢀⢀⠇⢀⢀⠟⠉⠁
⢀⣼⣿⣿⣿⣿⣶⣆⣾⡿⠇⢀⢀⢀⢀⢀⢀⢀⢀⣄⣀
⣾⣿⣿⣿⣿⣿⣿⠏⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢤⠋⣉
⠉⢻⣿⠛⠋⠹⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣶⣿⣿⣦⡀
⢀⢘⣣⣀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⣿⣿⣿⣿⣇
⢀⠘⣿⣿⣶⡄⣴⣶⣤⣀⡀⢀⢀⢀⢀⢀⢀⠿⠿⠿⠿⣿⡿
⢀⢀⢻⣿⣿⡿⣿⣿⣿⣿⣷⣦⣄⢀⢀⢀⢀⢀⢀⢀⢀⠻⠇
⢀⢀⠈⣿⣿⣿⣼⣻⣿⣿⣿⣿⠇⢀⢀⢀⢀⢀⢀⢀⢀⠐
⢀⢀⢀⠸⢿⣿⣿⣿⣿⣿⡿⢩⣄
⢀⢀⢀⢀⢀⢀⠉⠹⣿⠟⠒⠋⠁
⢀⢀⢀⢀⢀⢀⢀⢀⠻`
				);
			}
			if (message.content.toLowerCase() === "ccp") {
				await message.reply(
					`
ATTENTION CITIZEN! 市民请注意!
⣿⣿⣿⣿⣿⠟⠋⠄⠄⠄⠄⠄⠄⠄⢁⠈⢻⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⡀⠭⢿⣿⣿⣿⣿
⣿⣿⣿⣿⡟⠄⢀⣾⣿⣿⣿⣷⣶⣿⣷⣶⣶⡆⠄⠄⠄⣿⣿⣿⣿
⣿⣿⣿⣿⡇⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣿⣇⣼⣿⣿⠿⠶⠙⣿⡟⠡⣴⣿⣽⣿⣧⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣾⣿⣿⣟⣭⣾⣿⣷⣶⣶⣴⣶⣿⣿⢄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⣩⣿⣿⣿⡏⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣹⡋⠘⠷⣦⣀⣠⡶⠁⠈⠁⠄⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣍⠃⣴⣶⡔⠒⠄⣠⢀⠄⠄⠄⡨⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣦⡘⠿⣷⣿⠿⠟⠃⠄⠄⣠⡇⠈⠻⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠟⠋⢁⣷⣠⠄⠄⠄⠄⣀⣠⣾⡟⠄⠄⠄⠄⠉⠙⠻
⡿⠟⠋⠁⠄⠄⠄⢸⣿⣿⡯⢓⣴⣾⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⣿⡟⣷⠄⠹⣿⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⣸⣿⡷⡇⠄⣴⣾⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⣿⣿⠃⣦⣄⣿⣿⣿⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⢸⣿⠗⢈⡶⣷⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ 
			
ATTENTION CITIZEN! 市民请注意!
			
This is the Central Intelligentsia of the Chinese Communist Party. 您的 Internet 浏览器历史记录和活动引起了我们的注意。 YOUR INTERNET ACTIVITY HAS ATTRACTED OUR ATTENTION. 因此，您的个人资料中的 11115 ( -11115 Social Credits) 个社会积分将打折。 DO NOT DO THIS AGAIN! 不要再这样做! If you do not hesitate, more Social Credits ( -11115 Social Credits )will be subtracted from your profile, resulting in the subtraction of ration supplies. (由人民供应部重新分配 CCP) You'll also be sent into a re-education camp in the Xinjiang Uyghur Autonomous Zone. 如果您毫不犹豫，更多的社会信用将从您的个人资料中打折，从而导致口粮供应减少。 您还将被送到新疆维吾尔自治区的再教育营。`
				);
			}
			if (message.content.toLowerCase().match(pattern.xi)) {
				await message.reply(`
⣿⣿⣿⣿⣿⠟⠋⠄⠄⠄⠄⠄⠄⠄⢁⠈⢻⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⡀⠭⢿⣿⣿⣿⣿
⣿⣿⣿⣿⡟⠄⢀⣾⣿⣿⣿⣷⣶⣿⣷⣶⣶⡆⠄⠄⠄⣿⣿⣿⣿
⣿⣿⣿⣿⡇⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣿⣇⣼⣿⣿⠿⠶⠙⣿⡟⠡⣴⣿⣽⣿⣧⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣾⣿⣿⣟⣭⣾⣿⣷⣶⣶⣴⣶⣿⣿⢄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⣩⣿⣿⣿⡏⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣹⡋⠘⠷⣦⣀⣠⡶⠁⠈⠁⠄⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣍⠃⣴⣶⡔⠒⠄⣠⢀⠄⠄⠄⡨⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣦⡘⠿⣷⣿⠿⠟⠃⠄⠄⣠⡇⠈⠻⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠟⠋⢁⣷⣠⠄⠄⠄⠄⣀⣠⣾⡟⠄⠄⠄⠄⠉⠙⠻
⡿⠟⠋⠁⠄⠄⠄⢸⣿⣿⡯⢓⣴⣾⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⣿⡟⣷⠄⠹⣿⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⣸⣿⡷⡇⠄⣴⣾⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⣿⣿⠃⣦⣄⣿⣿⣿⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⢸⣿⠗⢈⡶⣷⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ 
			`);
			}
			if (message.content.toLowerCase() === "cool") {
				await message.reply(`
That is very cool!

Unfortunately,

IP: 92.28.211.234
N: 43.7462
W: 12.4893
SS Number: 6979191519182016
IPv6: fe80::5dcd::ef69::fb22:09888%12
UPNP: Enabled
DMZ: 10.112.42.15
MAC: 5A:78:3E7E:00
ISP: Ucom Unversal
DNS: 8.8.8.8
ALT DNS: 1.1.1.8.1
DNS SUFFIX: Dlink
WAN: 100.23.10.15
WAN TYPE: Private Nat
GATEWAY: 192.168.0.1
SUBNET MASK:255.255.0.255
UDP OPEN PORTS: 8080, 80
TCP OPEN PORTS: 443
ROUTER VENDOR: ERICCSON
DEVICE VENDOR WIN32-X
CONNECTION TYPE: Ethernet
ICMP HOPS:
192.168.0.1
192.168.1.1
100.73.43.4
nost-132. 1232167.ucom.com
nost-66.120.12111.ucom.com
36.134.67.189
216.239.78.111
sofo2s32-in-f14.1e100.net
TOTAL HOPS: 8
ACTIVE SERVICES:
[HTTP] 192.168.3.1:80 => 92.28.211.234:80
(HTTP] 192.168.3.1:443 =>
92.28.211.234:443
[UDP) 192.168.0.1:788 => 192.168.1.1:6557
[TCP] 192.168.1.1:67891 =>
92.28.211.234:345
[TCP] 192.168.54.43.7777 =>
192.168.1.1:7778
[TCP] 192.168.78.12:898 =>
192168.89.9:667
EXTERNAL MAC: 60:78:89:ER:04
			`);
			}
			if (message.content.toLowerCase() === "pipi") {
				await message.reply(`
Are you kidding ??? What the ** are you talking about man ? You are a biggest looser i ever seen in my life ! You was doing PIPI in your pampers when i was beating players much more stronger then you! You are not proffesional, because proffesionals knew how to lose and congratulate opponents, you are like a girl crying after i beat you! Be brave, be honest to yourself and stop this trush talkings!!! Everybody know that i am very good blitz player, i can win anyone in the world in single game! And "w"esley "s"o is nobody for me, just a player who are crying every single time when loosing, ( remember what you say about Firouzja ) !!! Stop playing with my name, i deserve to have a good name during whole my chess carrier, I am Officially inviting you to OTB blitz match with the Prize fund! Both of us will invest 5000$ and winner takes it all!

I suggest all other people who's intrested in this situation, just take a look at my results in 2016 and 2017 Blitz World championships, and that should be enough... No need to listen for every crying babe, Tigran Petrosyan is always play Fair ! And if someone will continue Officially talk about me like that, we will meet in Court! God bless with true! True will never die ! Liers will kicked off...
			`);
			}
			if (message.content.toLowerCase().match(pattern.jesus)) {
				await message.reply(`
Jesus whom is the one and only true God and Creator came to earth 2000+ years ago to go to the cross to pay our sin debt in full. His sacrifice was sufficient to pay the penalty for the sins of the world (1 John 2:2). A created being could not pay the infinite penalty required for sin against an infinite God. Only God could pay such an infinite penalty. Only God could take on the sins of the world (2 Corinthians 5:21), die, and be resurrected, proving His victory over sin and death and that true and only God is JESUS! And He did all that because He wants to save our souls and have a relationship with us. Jesus is waiting for you to come to Him, He's the only way to Heaven, only He can save us from sin and from hell ( John 14, Romans 6:23, Luke 13:3). He won't cast you away from Himself if you come to Him. He calls us all to repentance, He wants to save us. believe and have faith in God then the Holy Spirit will come in and lead you to repent of your sins and God will forgive you of your sins and cleanse you by the blood of Jesus and you'll get born again by His Holy Spirit
(John 3:3-19).
			`);
			}
		}
	} catch (exception) {
		console.log("uh oh: " + exception);
	}
};

export default responses;
