const Discord = require('discord.js')
exports.run = async (Bot, message, args) => {
  if(!args[0]) {
    const oe = new Discord.RichEmbed()
        .setColor('#36393F')
        .setTitle("Command List")
        .setURL("https://pastebin.com/073usLW4")
        .setThumbnail('https://cdn.discordapp.com/avatars/495381072612425733/12304fa62189f03a001caea1ab7566db.png')
        .setDescription("Commands that you may execute")
        .addField("**Administration** 👮", "**_Need to ban someone?_**")
        .addField("ban", "Description: Bans the user, **Useage: >ban {user}** ")
        .addField("kick", "Description: Kicks the user, **Useage: >kick {user} {reason}**")
        .addField("warn", "Description: warns the user, **Useage: >warn {user} {reason} *optional*{dm} (notify the user in dms)**")
        .addField("ban", "Description: Bans the user, **Useage: >ban {user}**")
        .addField("**Economy**💸", "**_Woah, theres an economy?!_**")
        .addField("level", "Description: Displays your level")
        .addField("rank", "Description: Displays your rank card ( Looks nicer :) )")
        .addField("**Memes** 🤔", "**_Dank memes_**")
        .addField("africameme", "Description: Gets a random meme from r/MildlyRacist")
        .addField("porn", "Description: (Trust me its not what you think it is) Displays **_porn_** from selected subreddit, **Useage: >porn hentai or >porn food**")
        .addField("rmeme", "Description: Displays memes from the r/memes")
        .addField("**Music**🎧", "**_Listen to some tunes!_**")
        .addField("play", "Description: plays music from link or query **Useage: >play {search} OR {link}**")
        .addField("pause", "Description: Pauses the Music")
        .addField("stop","Description: stops the music")
        .addField("volume","Description: Volume Adjuster, **Useage: >volume {Number from 0. -> 20}**")
        .addField("queue", "Description: Displays the queue.")
        .setFooter("Last updated on: Oct 3, 2018 8:25PM PST")
        message.author.send(oe)
    } else if(args[0] === "porn") {
      const oe = new Discord.RichEmbed()
        .setColor('#36393F')
        .setTitle("Command: **Porn**")
        .setAuthor("Command", 'https://cdn.discordapp.com/avatars/495381072612425733/12304fa62189f03a001caea1ab7566db.png')
        .setThumbnail('https://images-eu.ssl-images-amazon.com/images/I/418PuxYS63L.png')
        .setDescription("Fetches *porn* from the listed subreddits,")
        .addField("Useage:", ">porn {subreddit} i.e >porn food for r/foodporn ")
        .addField("**Subreddits to choose from:**", "Use subreddit prefix pls")
        .addBlankField(true)
        .addField("r/foodporn", "food")
        .addField("r/fakesubreddit", "fsr")
        .setFooter("Last updated on: Oct 3, 2018 8:25PM PST")
        message.author.send(oe)
    }  else if(args[0] === "level") {
      const oe = new Discord.RichEmbed()
        .setColor('#36393F')
        .setTitle("Command: **Level**")
        .setAuthor("Command", 'https://cdn.discordapp.com/avatars/495381072612425733/12304fa62189f03a001caea1ab7566db.png')
        // .setThumbnail('https://images-eu.ssl-images-amazon.com/images/I/418PuxYS63L.png')
        .setDescription("Shows your level")
        .addField("Useage:", ">level")
        .setFooter("Last updated on: Oct 3, 2018 8:25PM PST")
        message.author.send(oe)
    }  else if(args[0] === "rank") {
      const oe = new Discord.RichEmbed()
        .setColor('#36393F')
        .setTitle("Command: **rank**")
        .setAuthor("Command", 'https://cdn.discordapp.com/avatars/495381072612425733/12304fa62189f03a001caea1ab7566db.png')
        .setDescription("Basically the level command but more unstable")
        .setFooter("Last updated on: Oct 3, 2018 8:25PM PST")
        message.author.send(oe)
    }  else if(args[0] === "music") {
      const oe = new Discord.RichEmbed()
        .setColor('#36393F')
        .setTitle("Command: **Music**")
        .setAuthor("Command", 'https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/music.png')
        .setDescription("Play some tunes!")
        .setThumbnail('https://banner2.kisspng.com/20180411/wgq/kisspng-emoji-musical-note-symbol-musical-notation-music-notes-5acd9cb266fcb6.7959543115234244344218.jpg')
        .addField("play", "Description: plays music from link or query **Useage: >play {search} OR {link}**")
        .addField("pause", "Description: Pauses the Music")
        .addField("stop","Description: stops the music")
        .addField("volume","Description: Volume Adjuster, **Useage: >volume {Number from 0. -> 20}**")
        .addField("queue", "Description: Displays the queue.")
        .setFooter("Last updated on: Oct 3, 2018 8:25PM PST")
        message.author.send(oe)
    }  
  }
