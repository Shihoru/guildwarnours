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
    
        message.react('💠');

        const filter = (reaction, user) => {
        return ['💠'].includes(reaction.emoji.name) && user.id !== message.author.id;
        };
        })
    });
