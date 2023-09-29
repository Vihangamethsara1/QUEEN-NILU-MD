/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94761105459
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;gu50HQTY#tiycExo-BTYyT_o-ZjPyk3uqMVgbfgzppG-z3yRdL0Y' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://vihanga_iuhm_user:FJXChI6t8N1rRXjtiYuuqA1eQaAuOSWm@dpg-ckba5ahkms5s73e39hmg-a/vihanga_iuhm'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94761105459'

global.OWNER_NAME = '*St_Vihanga*'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "false" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '꧁•༆ 𝑫яαͥ¢к 𝑪уᷧвᷟєя вσт 𒆜'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@St_Vihanha 🤹‍♂️' //sticker

global.FOOTER = '꧁•༆ 𝑫яαͥ¢к 𝑪уᷧвᷟєя вσт 𒆜 ρσωєя∂ ву ѕт_νιнαηgα'

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = '꧁•༆ 𝑫яα¢к 𝑪увєя вσт 𒆜© 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/32719683c430e9c32b405.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'ʜᴇʏ @user ꧁•༆ _𝑫яα¢к 𝑪увєя вσт 𒆜 ʙᴏʏ ɪꜱ ᴀʟɪᴠᴇ ɴᴏᴡ..._ ⚡                                                   _ᴛʏᴇᴍᴇ [.ᴍᴇɴᴜ] ɢᴇᴛ ᴍʏ ᴄᴍᴅ ʟɪꜱᴛ...🌚💫_                                            ᴍʏ ᴏᴡɴᴇʀ - ѕт_νιнαηgα_   🍀⚡                  _ѕнαяє тнιѕ ℓιηк_ - https://chat.whatsapp.com/D6lMuDoPocWBt3e6vM2VpE                                     _тнαηкѕ ƒσя υѕιηg ꧁•༆ 𝑫яα¢к 𝑪увєя вσт 𒆜💫🌀💗_' // Set Alive Message

global.MAX_SIZE = '480' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'true' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = 'false'

global.ONLY_GROUP = 'true' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/D6lMuDoPocWBt3e6vM2VpE' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: vihangamethsara1" //ur github or insta name
global.location = "Srilanka, вuduruwagala" //ur location

