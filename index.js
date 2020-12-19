const Discord = require ('discord.js')

const client = new Discord.Client ();

client.on ('ready', ()=> {

  var generalChannel = client.channels.get ("786410076863856647")
    generalChannel.send("Hello,world!")


    console.log("connected as " + client.user.tag)

    client.user.setActivity("YouTube", {type:"WATCHING"})
    client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log (" - " + guild.name)

        guild.channels.forEach((channel) =>
             console.log (`-- ${channel.name} ({channel.type} - ${channel.id})`)
        })
    })
})

var generalChannel = client.channels.get ("786410076863856647")
const attachment = new Discord.Attachment(https://tzaphiel.files.wordpress.com/2013/01/fire-breathing-dragon-2560x1600.jpg)
    generalChannel.send(attachment)


client.on ('message', message => {
    console.log(message.content);
}))

const PREFIX = 'dd'  
client.login ('xxxxxx')
