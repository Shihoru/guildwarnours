const Discord = require('discord.js');
const Tableau = require('./Tableau')
const bot = new Discord.Client();


bot.login(process.env.TOKEN);

bot.on('ready', function() {
	bot.user.setActivity('Finalisation du systeme gvg').catch(console.error)
});


bot.on('message', function (message) {

if (Tableau.match(message)){
	return Tableau.action(message)
}

if(message.content == "Salut"){
	message.reply("Hello :raised_hands:");
	console.log("Le bot dit bonjour");
}

if(message.content.endsWith(":star:")){
		
	message.react('🥇').then(() => message.react('🥈')).then(() => message.react('🥉')).then(() => message.react('❌'));
	
	const filter = (reaction, user) => {
	return ['🥇', '🥈', '🥉', '❌'].includes(reaction.emoji.name) && user.id !== message.author.id;
	};
	
	message.awaitReactions(filter)
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name ==='🥇') {
			var str = message.content;
			message.edit(str.substr(0, 28));
			reaction = collected.delete;
		}
	
		if (reaction.emoji.name ==='🥈') {
			var str = message.content;
			message.edit(str.substr(0, 21));
			reaction = collected.delete;
		}

					
		if (reaction.emoji.name === '🥉') {
			message.edit("Adversaire vide");
			reaction = collected.delete;
	
		}
		
		if(reaction.emoji.name === '❌') {
			var str = message.content;
			message.edit(str + " :star:");
			reaction = collected.delete;
		}

	})
}
	
});
