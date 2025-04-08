require('dotenv').config();

// Default numbers for OWNER_NUMBER and SUDO_USERS
const DEFAULT_OWNER_NUMBER = '2347034119314,2347086731800'; // Replace with your default owner numbers
const DEFAULT_SUDO_USERS = '1234567890,9876543210';   // Replace with your default sudo users

global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.split(',') : DEFAULT_OWNER_NUMBER.split(',');
global.anitav4 = process.env.BOT_NAME || "kingvirus_v4";
global.ownername = process.env.OWNER_NAME || "king virus";
global.packname = process.env.PACK_NAME || "kingvirus_v4";
global.author = process.env.AUTHOR || "king virus";
global.channelname = process.env.CHANNEL_NAME || "";
global.channeljid = process.env.CHANNEL_JID || "";
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autoRecord = process.env.AUTO_RECORD === 'true';
global.autoViewStatus = process.env.AUTO_VIEW_STATUS === 'true';
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";

global.LEVELUP = process.env.LEVELUP === 'true';

global.ANTIVIEWONCE = process.env.ANTIVIEWONCE === 'true';

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};

global.sudoUsers = process.env.SUDO_USERS ? process.env.SUDO_USERS.split(',').map(user => `${user}@s.whatsapp.net`) : DEFAULT_SUDO_USERS.split(',').map(user => `${user}@s.whatsapp.net`);

global.public = process.env.PUBLIC === 'false';

global.ANTIDELETE = process.env.ANTIDELETE === 'true';
global.unavailable = process.env.UNAVAILABLE === 'true';
global.available = process.env.AVAILABLE === 'true';
global.autoreadmessages = process.env.AUTO_READ_MESSAGES === 'true';
global.chatbot = process.env.CHATBOT === 'true';
global.autoreact = process.env.AUTO_REACT === 'false';

global.WELCOME = process.env.WELCOME === 'true';

global.prefix = process.env.PREFIX || '.';

global.autobio = process.env.AUTO_BIO === 'false';

global.ANTICALL = process.env.ANTICALL === 'false';

global.antilink = process.env.ANTILINK === 'false';
global.antilinkkick = process.env.ANTILINK_KICK === 'true';
global.antilinkwarn = process.env.ANTILINK_WARN === 'true';

global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};

let fs = require('fs');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});
