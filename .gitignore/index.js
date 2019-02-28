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

});


bot.on('messageReactionAdd', (reaction, user) => {
if(reaction.emoji.name === ":one:")
    bot.channels.get("549713458866814986").send('Tu as réagi avec ' + reaction.emoji.name + ' !');
});
