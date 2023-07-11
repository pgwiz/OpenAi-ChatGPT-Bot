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
global.OWNER_NAME = 'WiPTech' // Owner Name
global.OWNER_NUMBER = ['254775146260'] //Owner Number
global.BOT_ADMINS = ['254775146260','254796711927'] //Bot admins numbers Like a Sudo Numbers
global.BLOCK_CHAT = [ '120363147404508506@g.us', '120363030304247368@g.us'] // If you want Block Bot From Chats Use .jid Command and put Jids
global.IMAGE_QUALITY = 'high' // Available Quality Are => low | mediam | high
global.CAPTION = '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ WiPTech ᴀɪ ʙᴏᴛ'

/*
📌⭕ 𝗬𝗢𝗨 𝗠𝗨𝗦𝗧 𝗣𝗥𝗢𝗩𝗜𝗗𝗘 𝗕𝗘𝗙𝗢𝗥𝗘 𝗗𝗘𝗣𝗟𝗢𝗬 𝗕𝗢𝗧 📌⭕
> Ai Bot Password Get From Watching This Video 
*/
global.AI_PASSWORD = 'king-nima-gpt-bot'
global.SESSION_ID = 'elisa_md@;;;hM9UnQbS#2hG4UlBIb3txJ5nDqiGBQ-bbrNiMb26OEG0lV3X0HXM'

/*
🎲 𝗢𝗧𝗛𝗘𝗥 𝗦𝗘𝗧𝗜𝗡𝗚𝗦
*/
global.CMD1 = 'ai' // .ai Command
global.CMD2 = 'gpt' // .ai2 Command
global.IMAGE_CMD = 'aimg' // .aiimg Command 
global.PORT = process.env.PORT || '4050' // Port No need Change.

mess = {
	owner: '*This Command is only For WiPTech.*',
	need_text: '*Please Give Some words*'
}
react = {
    ai_message : '🤖',
    ai_image : '🤖'
}










let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
