const Discord = require('discord.js');
const Tableau = require('./Tableau')
const bot = new Discord.Client();


bot.login(process.env.TOKEN);

bot.on('ready', function() {
	bot.user.setActivity('Ready to fight').catch(console.error)
});


bot.on('message', function (message) {

    if (Tableau.match(message)){
        return Tableau.action(message)
    }
    
    if(message.content == "Salut"){
        message.reply("Hello :raised_hands:");
        console.log("Le bot dit bonjour");
    }
	
	if(message.content == "$clear"){
		if(message.member.hasPermission("MANAGE_MESSAGES")){
			message.channel.fetMessages()
			.then(function(list){
				message.channel.bulkDelete(list);
			}, function(err){message.channel.send("Erreur")})
		}
	}
		
    
	if(message.content.endsWith(":star:")){
    
        message.react('💠');

        const filter = (reaction, user) => {
        return ['💠'].includes(reaction.emoji.name) && user.id !== message.author.id;
        };
        }
    });
