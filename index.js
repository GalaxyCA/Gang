const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTY1NjM3Njg3NTUwMTQ4NjEw.XLepkQ.rImp4PLuvHtHWno0ghfKFDgHR_E';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.login(token);