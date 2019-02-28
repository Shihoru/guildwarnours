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

if(message.content.endsWith(":star:") ){
	message.react('1️⃣').then(() => message.react('2️⃣')).then(() => message.react('3️⃣'));
        
                 const filter = (reaction, user) => {
                     return ['1️⃣', '2️⃣','3️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
                 };
            
                 message.awaitReactions(filter, { max: 1}).then(collected => {
                    const reaction = collected.first();
        
                    if (reaction.emoji.name === '1️⃣') {
                          message.reply('you reacted with 1️⃣.');
					} 
					if (reaction.emoji.name === '2️⃣'){
                          message.reply('you reacted with 2️⃣.');
					} 
					if (reaction.emoji.name === '3️⃣'){
                            message.reply('you reacted with 3️⃣.');
                    }
                 });
}
});
