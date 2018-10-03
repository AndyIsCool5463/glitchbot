const Enmap = require('enmap');
exports.run = (Bot, message, args) => {
    const key = `${message.guild.id}-${message.author.id}`;
    return message.channel.send(`You currently have ${Bot.points.get(key, "points")} points, and are level ${Bot.points.get(key, "level")}!`);
}
