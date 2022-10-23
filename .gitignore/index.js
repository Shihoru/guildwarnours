const Discord = require('discord.js');
const Clear = require('./Clear')
const bot = new Discord.Client();


bot.login(process.env.TOKEN);

bot.on('ready', function() {
	bot.user.setActivity('Ready to play').catch(console.error)
});


bot.on('message', function (message) {
	
    if (Clear.match(message)){
        return Clear.action(message)
    }
	
    if(message.content == "Salut"){
        message.reply("Hello :raised_hands:");
        console.log("Le bot dit bonjour");
    }
     if(message.content == "MasterPine"){
        message.reply("@everyone");
        console.log("Le bot est pret pour la pine");
    }
     if(message.content == "Paladins"){
        message.reply("@everyone go rush palouf !");
        console.log("Ready pour un paladin");
    }
     if(message.content == "AmongUs"){
        message.reply("@everyone You looking sus ! https://media1.tenor.com/images/c5b612df9ef285c67d38c17ddd9635b9/tenor.gif?itemid=17674950");
        console.log("Ready pour un amongus");
    }
	if(message.content == "OW"){
        message.reply("@everyone Appel Overwatch");
        console.log("Ready pour un overwatchs");
    }
	
    });
