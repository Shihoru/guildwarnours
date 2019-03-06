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
        return ['🥇', '🥈','🥉','❌'].includes(reaction.emoji.name) && user.id !== message.author.id;
        };
    
        message.awaitReactions(filter, {max : 1, time: 360000, errors: ['time']  })
        .then(collected => {
            const reaction = collected.last();
            
        if (reaction.emoji.name ==='🥇') {
            var str = message.content;
            message.edit(str.substring(0, 28));
        }
        })
        
         .then(message.awaitReactions(filter, {max : 2, time: 360000, errors: ['time']  })
        .then(collected => {
            const reaction = collected.last();
    
        if (reaction.emoji.name ==='🥈') {
            var str = message.content;
            message.edit(str.substring(0, 21));
        }
        })  
          
          
        .then(message.awaitReactions(filter, {max : 2, time: 360000, errors: ['time']  })
        .then(collected => {
            const reaction = collected.last();
    
        if (reaction.emoji.name ==='❌') {
            var str = message.content;
            message.edit(str.substring(0, 34));
        }
        })
          
        
        .then(message.awaitReactions(filter, {max : 3, time: 360000, errors: ['time']  })
        .then(collected => {
            const reaction = collected.last();
            
        if (reaction.emoji.name ==='🥇') {
            var str = message.content;
            message.edit(str.substring(0, 28));
        }
        })
	 .then(message.awaitReactions(filter, {max : 2, time: 360000, errors: ['time']  })
        .then(collected => {
            const reaction = collected.last();
    
        if (reaction.emoji.name ==='🥈') {
            var str = message.content;
            message.edit(str.substring(0, 21));
        }
        })  
          
        .then(message.awaitReactions(filter, {max : 3, time: 360000, errors: ['time']  })
        .then(collected => {
    
            const reaction = collected.last();
    
    
        if (reaction.emoji.name === '🥉') {
            message.edit("Adversaire vide");
    
        }
        })
          
        .then(message.awaitReactions(filter, {max : 3, time: 360000, errors: ['time']  })
        .then(collected => {
            const reaction = collected.last();
    
        if (reaction.emoji.name ==='❌') {
            var str = message.content;
            message.edit(str.substring(0, 21));
        }
        })
          
        
         .then(message.awaitReactions(filter, {max : 4, time: 360000, errors: ['time']  })
        .then(collected => {
            const reaction = collected.last();
    
        if (reaction.emoji.name ==='🥈') {
            var str = message.content;
            message.edit(str.substring(0, 21));
        }
        })  
          
        .then(message.awaitReactions(filter, {max : 4, time: 360000, errors: ['time']  })
        .then(collected => {
    
            const reaction = collected.last();
    
    
        if (reaction.emoji.name === '🥉') {
            message.edit("Adversaire vide");
    
        }
        })
          
        .then(message.awaitReactions(filter, {max : 4, time: 360000, errors: ['time']  })
        .then(collected => {
            const reaction = collected.last();
    
        if (reaction.emoji.name ==='❌') {
            var str = message.content;
            message.edit(str.substring(0, 14));
        }
        })
        
          
        .then(message.awaitReactions(filter, {max : 5, time: 360000, errors: ['time']  })
        .then(collected => {
    
            const reaction = collected.last();
    
    
        if (reaction.emoji.name === '🥉') {
            message.edit("Adversaire vide");
    
        }
        })
          
        .then(message.awaitReactions(filter, {max : 5, time: 360000, errors: ['time']  })
        .then(collected => {
            const reaction = collected.last();
    
        if (reaction.emoji.name ==='❌') {
            var str = message.content;
            message.edit(str.substring(0, 14));
        }
        }))))))))))))
        
    }
             
    });
