module.exports = (Bot, message) => {
  console.log(`Ready to serve in ${Bot.channels.size} channels on ${Bot.guilds.size} servers, for a total of ${Bot.users.size} users.`);
  Bot.user.setActivity('> for help.', 'https://google.com');
  console.log("Kanti Bot is ready to recive commands!");
  function getDateTime() {

    var date = new Date();
    date.setUTCHours()
    let hr = date.getHours()
    let m = date.getMinutes()
  console.log(`${hr} : ${m}`)

}
getDateTime();
}
