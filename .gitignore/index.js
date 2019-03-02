const Discord = require('discord.js');
const Tableau = require('./Tableau')
const bot = new Discord.Client();


bot.login(process.env.TOKEN);

bot.on('ready', function() {
	bot.user.setActivity('Preparation du systeme gvg').catch(console.error)
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
		
	message.react('🥇').then(() => message.react('🥈')).then(() => message.react('🥉'));
	
	const filter = (reaction, user) => {
	return ['🥇', '🥈','🥉'].includes(reaction.emoji.name) && user.id !== message.author.id;
	};
	
	message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

	if (reaction.emoji.name ==='🥇') {
		
		message.edit(String.prototype.slice(1, 27))
	}
	
	if (reaction.emoji.name ==='🥈') {
		message.edit(String.prototype.slice(1, 20))
	}
		
	if (reaction.emoji.name === '🥉') {
		message.edit(String.prototype.slice(1, 13));

	}
	})

}
	


});
