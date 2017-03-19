const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Batter is online. Currently in ' + client.guilds.size + ' servers.');
client.user.setGame('in ' + client.guilds.size + ' servers.')
client.user.setStatus('online');
});

client.on("guildMemberAdd", member => {

let guild = member.guild;
guild.defaultChannel.sendMessage(`Welcome to the server ${member.user}!`);
});

client.on('guildMemberRemove', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`${member.user} just left the server.`);
});
    
client.on('guildCreate', guild => {
guild.defaultChannel.sendMessage('At your service. Type >help to get started.');
});

const prefix = ">"

client.on('message', message => {
	
if (message.author.bot) return;

	  let args = message.content.split(" ").slice(1)	 

	  if (!message.content.startsWith(prefix)) return;
	  
	  if (message.content.startsWith(prefix + "feedback")) {
		  if (message.content.includes("@everyone")) return;
		  if (message.content.includes("@here")) return;
		  message.channel.sendMessage("Feedback sent! :thumbsup:");
		  message.client.channels.get("293037988865114112").sendMessage(message.author.username + "#" + message.author.discriminator + " (**" + message.author.id + "**)" + " suggested the following: " + args.join(" "));
	  } else
	  
	  if (message.content.startsWith(prefix + "help")) {
		  message.channel.sendMessage("", {embed: {
			  color: 3447003,
			  fields: [
			  {
		      name: '**Batter**',
			  value: 'Help can be found [here](http://cspsandyhookreport.ct.gov/)'
			  }
			 ],
			 timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: '© Bata#2662'
  }
		  }});
	  } else
		  
	  if (message.content.startsWith(prefix + "embed")) {
		  message.channel.sendMessage("", {embed: {
			  color: 3447003,
			  fields: [
			  {
				  name: message.author.username + ' says:',
				  value: args.join(" ")
			  }
			  ],
			  timestamp: new Date(),
			  footer: {
				  icon_url: message.author.avatarURL,
				  text: 'Made by ' + message.author.username
			  }
		  }});
	  } else
		  
	  if (message.content.startsWith(prefix + "rate")) {
	if (!message.content.split(" ").slice(1)) return message.reply("Give me something to rate.");
	const RatingList = ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10", "8/10", "9/10", "10/10"];
	const Rating = RatingList[Math.floor(Math.random() * RatingList.length)];
	message.channel.sendMessage("I give " + args.join(" ") + " a " + Rating);
} else
	  
	  if (message.content.startsWith(prefix + "purge")) {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) {
		return message.channel.sendMessage("`You don't have the permissions to do that.` :no_entry:");
	}
	const user = message.mentions.users.first();
const amount = message.content.split(" ")[1]

if (!amount) return message.channel.sendMessage("`Specify an amount to delete!` :no_entry:");
if (!amount && !user) return message.channel.sendMessage("`Must specify a user and amount, or just an amount, of messages to purge!` :no_entry:");
message.channel.fetchMessages({
  limit: amount,
}).then((messages) => {
  if (user) {
    const filterBy = user ? user.id : Client.user.id;
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
  }
  message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
} else
	  
	  
	  if (message.content.startsWith(prefix + "eval")) {
	if (message.author.id !== "214822211574431744") return;
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

});

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.login("lmao you aint getting this one");
