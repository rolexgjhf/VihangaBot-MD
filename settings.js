//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['918139011523']
global.premium = ['918139011523']
global.ownernomer = '918139011523'
global.ownername = '៚ꪖ𝘳ᦔ𝓲᥊ ᥇ꪮ𝓽ɀ ʏᴛ͢⁸⁵⁴¹⃟✦⃝̮̮〽️'
global.botname = 'ArdixBotz MD'
global.footer = '@ArdixBotz MD'
global.cap = '*Genarated By Ardix Md*'
global.ig = 'https://github.com/'
global.region = 'India, Sabaragamuwa, Embilipitiya'
global.sc = 'https://github.com/'
global.myweb = 'https://chat.whatsapp.com/'
global.packname = 'Ardix Md Sticker Bot'
global.author = '៚ ʏᴛ͢⁸⁵⁴¹⃟✦⃝̮̮〽️'
global.autobio = 'trꪖ𝘳ᦔ𝓲᥊᥇ꪮ𝓽ɀue'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '𝚂𝚞𝚌𝚌𝚎𝚜𝚜 ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: '𝙿𝚕𝚎𝚊𝚜𝚎 𝚆𝚊𝚒𝚝...',
    error: '𝙽𝚘𝚝 𝙵𝚒𝚗𝚍 𝙴𝚛𝚛𝚘𝚛🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 100,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
