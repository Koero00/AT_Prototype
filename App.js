const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Up and running.");
});

client.on('message', (msg) => {
    if(msg.content == "!test")
    {
        msg.channel.send("Hello World");
    }
});

client.login('NTQ0NDYyMzI5NDYzNTcwNDUy.D0LeHQ.Wrbw1NB972F5SiKvDP-aVb1MQqU');