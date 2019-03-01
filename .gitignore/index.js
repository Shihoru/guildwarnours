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
	message.react('🥇').then(() => message.react('🥈')).then(() => message.react('🥉'));
        
                 const filter = (reaction, user) => {
                     return ['🥇', '🥈','🥉'].includes(reaction.emoji.name) && user.id === message.author.id;
                 };
            
}
	
});

bot.on('messageReactionAdd', (reaction, user) => {
// on vérifie que ce soit bien la bonne réaction et on ne compte pas celui du bot
	if (reaction.emoji.name === '🥇' && user.id !== bot.user.id) {
	// ici tu ajoute ce que ton bot doit faire quand il y a la bonne réaction
		message.react('❌')
   	  }
});

