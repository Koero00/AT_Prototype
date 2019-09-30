const { apiKey } = require('./config.json');
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Up and running.");
});

client.on('message', (msg) => {
    
    // Messages get displayed underneath here:

    if(msg.content == "!test")
    {
        msg.channel.send("Ik wil naar huus!!!");
    }
});

client.login(apiKey);
