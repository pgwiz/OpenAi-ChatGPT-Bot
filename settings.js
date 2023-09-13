const fs = require('fs')
const chalk = require('chalk')


/*
🤖 𝗕𝗢𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦
*/
global.OFFLINE = false // if you want put bot offline put true
global.BOT_PRIVATE = false // if you want use bot privet 
global.AUTO_CHATGPT = false // if you want auto ai bot mod
global.READ_MESSAGE = false // if you want read message from bot
global.ONLY_INBOX = false // Only inbox mod ( only pm ) use
global.ONLY_GROUPS = false // Only Groups Use


/*
🤖 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦
*/
global.OWNER_NAME = 'mullah' // Owner Name
global.OWNER_NUMBER = ['254794110821'] //Owner Number
global.BOT_ADMINS = ['254790627796','254794110821'] //Bot admins numbers Like a Sudo Numbers
global.BLOCK_CHAT = [ '120363147404508506@g.us', '120363030304247368@g.us'] // If you want Block Bot From Chats Use .jid Command and put Jids
global.IMAGE_QUALITY = 'high' //Available Quality Are => low | mediam | high
global.CAPTION = '© ALWAYS MULLAH'

/*
📌⭕ 𝗬𝗢𝗨 𝗠𝗨𝗦𝗧 𝗣𝗥𝗢𝗩𝗜𝗗𝗘 𝗕𝗘𝗙𝗢𝗥𝗘 𝗗𝗘𝗣𝗟𝗢𝗬 𝗕𝗢𝗧 📌⭕
> Ai Bot Password Get From Watching This Video 
*/
global.AI_PASSWORD = 'mullah-gpt-bot'
global.SESSION_ID = 'elisa_md@;;;EdVDkJYB#8gQrpbi99TQ83AzymWXOX3HC2JuNQGO8vQrX2vzdq4M'

/*
🎲 𝗢𝗧𝗛𝗘𝗥 𝗦𝗘𝗧𝗜𝗡𝗚𝗦
*/
global.CMD1 = 'ai' // .ai Command
global.CMD2 = 'gpt' // .ai2 Command
global.IMAGE_CMD = 'aimg' // .aiimg Command 
global.PORT = process.env.PORT || '4053' // Port No need Change.

mess = {
	owner: '*This Command is restricted by Mullah  😮.*',
	need_text: '*what do can i do *'
}
react = {
    ai_message : '🤖',
    ai_image : '📸'
}










let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
