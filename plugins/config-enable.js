const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

  const optionsFull = `🤖𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎 𝘿𝙀𝙇 𝘽𝙊𝙏\n\n _funcion para activar y desactivar funciones del bot para activar usa .on
para desactivar usa .off_

*ACTIVAR/DESACTIVAR ADMINS ☁️*


• 𝗗𝗮𝗿 𝗯𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗮 𝗮𝗹 𝘂𝘀𝘂𝗮𝗿𝗶𝗼
*» .on welcome*

• 𝗘𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝗲𝗻𝗹𝗮𝗰𝗲𝘀 𝗴𝗿𝘂𝗽𝗮𝗹𝗲𝘀
*» .on antilink*

• 𝗘𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝘁𝗼𝗱𝗼𝘀 𝗹𝗼𝘀 𝗲𝗻𝗹𝗮𝗰𝗲𝘀
*» .on antilink2*

• 𝘿𝙚𝙩𝙚𝙘𝙩𝙤𝙧 𝙙𝙚 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤𝙣
*» .on detect*

• 𝘿𝙚𝙩𝙚𝙘𝙩𝙤𝙧 𝙙𝙚 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤𝙣2
*» .on detect2*

• 𝗥𝗲𝗲𝗻𝘃𝗶𝗮𝗿 𝗺𝗲𝗻𝘀𝗮𝗷𝗲𝘀 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗱𝗼𝘀
*» .on antidelete*

• 𝙋𝙚𝙧𝙢𝙞𝙩𝙞𝙧 𝙖𝙪𝙙𝙞𝙤𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩
*» .on audios_*

• 𝗠𝗼𝗱𝗼 𝗵𝗼𝘁
*» .on modohorny*

• 𝗠𝗼𝗱𝗼 𝗵𝗼𝘁 2
*» .on nsfw*

• 𝗘𝗻𝘃𝗶𝗮 𝗮𝘂𝗱𝗶𝗼𝘀 𝗽𝗼𝗿 𝗽𝗮𝗹𝗮𝗯𝗿𝗮𝘀 𝗰𝗹𝗮𝘃𝗲
*» .on audios*

*ACTIVAR/DESACTIVAR USER 🫧*


• 𝗦𝘂𝗯𝗶𝗿 𝗱𝗲 𝗻𝗶𝘃𝗲𝗹 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮𝗺𝗲𝗻𝘁𝗲
*» .on autolevelup*


*ACTIVAR/DESACTIVAR OWNER 🐈‍⬛*

• 𝗦𝗮𝗹𝗶𝗱𝗮 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮 𝗱𝗲 𝘀𝘂𝗯𝗯𝗼𝘁𝘀
*» .on antibotclone*

• 𝙉𝙤 𝙝𝙖𝙗𝙡𝙖𝙧 𝙖𝙡 𝙗𝙤𝙩 𝙚𝙣 𝙥𝙧𝙞𝙫𝙖𝙙𝙤
*» .on antiprivado*

• 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙤𝙡𝙤 𝙝𝙖𝙗𝙡𝙖𝙧𝙖 𝙚𝙣 𝙘𝙝𝙖𝙩𝙨 𝙥𝙧𝙞𝙫𝙖𝙙𝙤𝙨
*» .on solopv*

• 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙤𝙡𝙤 𝙝𝙖𝙗𝙡𝙖𝙧𝙖 𝙚𝙣 𝙘𝙝𝙖𝙩𝙨 𝙜𝙧𝙪𝙥𝙖𝙡𝙚𝙨
*» .on sologp*


*🐈‍⬛ EJEMPLO :*
*${usedPrefix}on* welcome
*${usedPrefix}off* welcome`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
     case 'nsfw':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.nsfw = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: fkontak});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `*❱❱ 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎 𝙂𝙀𝙉𝙀𝙎𝙄𝙎 ❰❰*\n\n*» 𝙊𝙋𝘾𝙄𝙊𝙉 |* _${type.toUpperCase()}_\n*» 𝙀𝙎𝙏𝘼𝘿𝙊 |* ${isEnable ? '𝘈𝘊𝘛𝘐𝘝𝘈𝘋𝘖' : '𝘋𝘌𝘚𝘈𝘊𝘛𝘐𝘝𝘈𝘋𝘖'}\n*» 𝙋𝘼𝙍𝘼 |* ${isAll ? '𝘌𝘚𝘛𝘌 𝘊𝘏𝘈𝘛' : isUser ? '' : '𝘌𝘚𝘛𝘌 𝘊𝘏𝘈𝘛'}\n> 𝙂𝙚𝙣𝙚𝙨𝙞𝙨𝘽𝙤𝙩:𝙂𝙚𝙣𝙚𝙨𝙞𝙨𝘽𝙤𝙩`}, {quoted: fkontak});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['nable', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler;