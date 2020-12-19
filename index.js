const Discord = require('discord.js')

const client = new Discord.Client();

client.on ('ready', ()=> {
  console.log("connected as " + client.user.tag)
  const generalChannel = client.channels.cache.get("786410076863856647")
  
  if(generalChannel){
    generalChannel.send("Wazzzzuuupppp")
    const attachment = "https://tzaphiel.files.wordpress.com/2013/01/fire-breathing-dragon-2560x1600.jpg"
    generalChannel.send("sending an image", {files:[attachment]})
  }else{
    console.log("the channel id was invalid")
  }
  client.user.setActivity("One Server", {type:"WATCHING"})
  client.guilds.cache.forEach((guild) => {
    console.log(guild.name)
    guild.channels.cache.forEach((channel) => {
      console.log (" - " + guild.name)
      guild.channels.cache.forEach((channel) =>{
            console.log (`-- ${channel.name} ({channel.type} - ${channel.id})`)
      })
    })
  })
})

// var generalChannel = client.channels.get("786410076863856647")


client.on ('message', message => {
    console.log(message.content);
})

const PREFIX = 'dd'
client.login(process.env.DISCORD_BOT_SECRET)
