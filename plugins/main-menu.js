import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, isPrems }) => {
  try {
    await m.react('🕷️');

    let img = 'https://files.catbox.moe/g30f94.jpg';
    let insta = 'https://instagram.com/dev.criss_vx';

    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);

    const user = global.db.data.users[m.sender];
    const { money, joincount, exp, diamantes, level, role } = user;

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    const text = `
ㅤ𐙚ㅤ   *Naguará*   ﾉㅤ*Oficial*  ㅤ🕷️ ㅤׄ
ᗝ̵ *Hᴏʟᴀ ${taguser}*\nㅤ *✰⃕${saludo}*

> ꒰꛱ ͜Desarrollado por *Cristian Escobar* +51927238856

╭─‌┈‌ׅ┉‌ׁ‌┈┉ׁ‌┈‌ׅ┉‌ׁ‌┈‌ׅ┉‌ׁ‌┈‌ׅ┉‌ׁ‌┈‌ׅ┉‌ׁ‌┈‌ׅ
│╭╴╴╴╴╴╴
││ *Cliente* » ${taguser}
││ *Librería* » Baileys
││ *Diamantes* » ${diamantes}
││ *Tiempo* » ${uptime}
││ *Usuarios* » ${rtotalreg}
││ *Estado* » Activo
│╰╴╴╴╴╴╴
╰┉꙰╾‌━ٜ͙͙͙͙͙┅ٜ͙͙͙͙┉ٜ͙͙͙͙͙͙┄ٜ͙͙•●᪱•ٜ┄ٜ͙͙┉ٜ͙͙͙͙͙͙┅ٜ͙͙͙͙͙━͙͙͙͙╾‌ࣩ


> 🪶 Si encuentra un comando con errores no dudes en reportarlo con el Creador

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Menús::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│Ⓜ️┊${usedPrefix}menunsfw 
│Ⓜ️┊${usedPrefix}menulogos
│Ⓜ️┊${usedPrefix}menuowner
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Información::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│🌹┊${usedPrefix}totalf
│🌹┊${usedPrefix}grupos
│🌹┊${usedPrefix}sugerir
│🌹┊${usedPrefix}report
│🌹┊${usedPrefix}owner
│🌹┊${usedPrefix}creador
│🌹┊${usedPrefix}ping
│🌹┊${usedPrefix}uptime
│🌹┊${usedPrefix}horario
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Config::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│⚙️┊${usedPrefix}enable
│⚙️┊${usedPrefix}disable
│⚙️┊${usedPrefix}on
│⚙️┊${usedPrefix}off
│⚙️┊${usedPrefix}manual
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Descargas::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│🍭┊${usedPrefix}play
│🍭┊${usedPrefix}ytmp4doc 
│🍭┊${usedPrefix}ytmp4doc 
│🍭┊${usedPrefix}apk
│🍭┊${usedPrefix}pinterest
│🍭┊${usedPrefix}pinvid
│🍭┊${usedPrefix}tiktok
│🍭┊${usedPrefix}instagram
│🍭┊${usedPrefix}facebook
│🍭┊${usedPrefix}mediafire
│🍭┊${usedPrefix}mega
│🍭┊${usedPrefix}playstore 
│🍭┊${usedPrefix}xnxxdl
│🍭┊${usedPrefix}xvideosdl
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Buscadores::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│🔎┊${usedPrefix}applemusicsearch
│🔎┊${usedPrefix}tiktoksearch
│🔎┊${usedPrefix}ytsearch
│🔎┊${usedPrefix}spotifysearch 
│🔎┊${usedPrefix}playstoresearch 
│🔎┊${usedPrefix}xnxxsearch 
│🔎┊${usedPrefix}xvsearch 
│🔎┊${usedPrefix}gnula
│🔎┊${usedPrefix}mercadolibre
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Listas::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│📋┊${usedPrefix}v4fem
│📋┊${usedPrefix}v4masc
│📋┊${usedPrefix}v4mixto
│📋┊${usedPrefix}v6fem
│📋┊${usedPrefix}v6masc
│📋┊${usedPrefix}v6mixto
│📋┊${usedPrefix}infem4
│📋┊${usedPrefix}inmasc4
│📋┊${usedPrefix}inmixto4
│📋┊${usedPrefix}infem6
│📋┊${usedPrefix}inmasc6
│📋┊${usedPrefix}inmixto6
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Frases::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│🌻┊${usedPrefix}piropo
│🌻┊${usedPrefix}consejo
│🌻┊${usedPrefix}fraseromantica
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Convertidores::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│🍁┊{usedPrefix}tourl
│🍁┊${usedPrefix}toptt
│🍁┊${usedPrefix}toimg
│🍁┊{usedPrefix}tovid
│🍁┊{usedPrefix}tomp3
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Herramientas::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│☁️┊${usedPrefix}clima
│☁️┊${usedPrefix}readmore
│☁️┊${usedPrefix}read
│☁️┊${usedPrefix}fake
│☁️┊${usedPrefix}trad
│☁️┊${usedPrefix}hd
│☁️┊${usedPrefix}remini
│☁️┊${usedPrefix}whatmusic
│☁️┊${usedPrefix}flag
│☁️┊${usedPrefix}inspect
│☁️┊${usedPrefix}nuevafotochannel
│☁️┊${usedPrefix}nosilenciarcanal
│☁️┊${usedPrefix}silenciarcanal
│☁️┊${usedPrefix}seguircanal
│☁️┊${usedPrefix}avisoschannel
│☁️┊${usedPrefix}resiviravisos
│☁️┊${usedPrefix}eliminarfotochannel
│☁️┊${usedPrefix}reactioneschannel
│☁️┊${usedPrefix}nuevonombrecanal
│☁️┊${usedPrefix}nuevadescchannel
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Grupos::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│🫧┊${usedPrefix}add
│🫧┊${usedPrefix}grupo
│🫧┊${usedPrefix}grouptime
│🫧┊${usedPrefix}notify
│🫧┊Aviso
│🫧┊Admins
│🫧┊${usedPrefix}todos
│🫧┊${usedPrefix}setwelcome
│🫧┊${usedPrefix}setbye
│🫧┊${usedPrefix}setkick
│🫧┊${usedPrefix}groupdesc
│🫧┊${usedPrefix}promote
│🫧┊${usedPrefix}demote
│🫧┊${usedPrefix}kick
│🫧┊${usedPrefix}mute
│🫧┊${usedPrefix}unmute
│🫧┊${usedPrefix}inactivos
│🫧┊${usedPrefix}tagnum
│🫧┊${usedPrefix}link
│🫧┊${usedPrefix}warn
│🫧┊${usedPrefix}unwarn
│🫧┊${usedPrefix}delete
│🫧┊${usedPrefix}fantasmas
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Efectos::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│🍃┊${usedPrefix}bass
│🍃┊${usedPrefix}blown
│🍃┊${usedPrefix}deep
│🍃┊${usedPrefix}earrape
│🍃┊${usedPrefix}fast
│🍃┊${usedPrefix}smooth
│🍃┊${usedPrefix}tupai
│🍃┊${usedPrefix}nightcore
│🍃┊${usedPrefix}reverse
│🍃┊${usedPrefix}robot
│🍃┊${usedPrefix}slow
│🍃┊${usedPrefix}squirrel
│🍃┊${usedPrefix}chipmunk
│🍃┊${usedPrefix}reverb
│🍃┊${usedPrefix}chorus
│🍃┊${usedPrefix}flanger
│🍃┊${usedPrefix}distortion
│🍃┊${usedPrefix}pitch
│🍃┊${usedPrefix}highpass
│🍃┊${usedPrefix}lowpass
│🍃┊${usedPrefix}underwater 
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Diversión::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│🦥┊${usedPrefix}gay
│🦥┊${usedPrefix}lesbiana
│🦥┊${usedPrefix}pajero
│🦥┊${usedPrefix}pajera
│🦥┊${usedPrefix}puto
│🦥┊${usedPrefix}puta
│🦥┊${usedPrefix}manco
│🦥┊${usedPrefix}manca
│🦥┊${usedPrefix}rata
│🦥┊${usedPrefix}prostituto
│🦥┊${usedPrefix}prostituta
│🦥┊${usedPrefix}doxear
│🦥┊${usedPrefix}simi
│🦥┊${usedPrefix}pregunta 
│🦥┊${usedPrefix}genio
│🦥┊${usedPrefix}top
│🦥┊${usedPrefix}sorteo
│🦥┊${usedPrefix}piropo
│🦥┊${usedPrefix}chiste
│🦥┊${usedPrefix}facto
│🦥┊${usedPrefix}verdad
│🦥┊${usedPrefix}pareja
│🦥┊${usedPrefix}parejas
│🦥┊${usedPrefix}love
│🦥┊${usedPrefix}personalidad 
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Juegos::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│👽┊${usedPrefix}pregunta
│👽┊${usedPrefix}ttt
│👽┊${usedPrefix}delttt
│👽┊${usedPrefix}ppt
│👽┊${usedPrefix}acertijo
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Anime::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│💋┊${usedPrefix}messi
│💋┊${usedPrefix}cr7
│💋┊${usedPrefix}waifu
│💋┊${usedPrefix}loli
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Nsfw::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│🙈┊${usedPrefix}violar
│🙈┊${usedPrefix}follar
│🙈┊${usedPrefix}anal
│🙈┊${usedPrefix}coger
│🙈┊${usedPrefix}coger2
│🙈┊${usedPrefix}penetrar
│🙈┊${usedPrefix}sexo
│🙈┊${usedPrefix}rusa
│🙈┊${usedPrefix}sixnine
│🙈┊${usedPrefix}pies
│🙈┊${usedPrefix}mamada
│🙈┊${usedPrefix}lickpussy
│🙈┊${usedPrefix}grabboobs
│🙈┊${usedPrefix}suckboobs
│🙈┊${usedPrefix}cum
│🙈┊${usedPrefix}fap
│🙈┊${usedPrefix}manosear 
│🙈┊${usedPrefix}lesbianas
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Stickers::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│🌿┊${usedPrefix}sticker
│🌿┊${usedPrefix}brat
│🌿┊${usedPrefix}bratv
│🌿┊${usedPrefix}qc
│🌿┊${usedPrefix}dado
│🌿┊${usedPrefix}scat
│🌿┊${usedPrefix}wm
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Rpg::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│💸┊${usedPrefix}mine
│💸┊${usedPrefix}cofre 
│💸┊${usedPrefix}slut
│💸┊${usedPrefix}nivel
│💸┊${usedPrefix}ruleta
│💸┊${usedPrefix}claim
│💸┊${usedPrefix}daily
│💸┊${usedPrefix}crimen
│💸┊${usedPrefix}cartera
│💸┊${usedPrefix}robarxp
│💸┊${usedPrefix}robar2
│💸┊${usedPrefix}depositar
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Registro::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│💌┊${usedPrefix}reg
│💌┊${usedPrefix}unreg
│💌┊${usedPrefix}perfil
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒*
┊ ‹‹ \`Owner::\`
┊•*⁀➷ °⭒⭒⭒ •*⁀➷ °⭒⭒⭒
╰─── ︶︶︶︶ ✰⃕  ⌇ ⭒  ˚̩̥̩̥✧
│🤴🏻┊${usedPrefix}salir
│🤴🏻┊${usedPrefix}fix
│🤴🏻┊${usedPrefix}blocklist
│🤴🏻┊${usedPrefix}chetar
│🤴🏻┊${usedPrefix}deschetar
│🤴🏻┊${usedPrefix}grouplist
│🤴🏻┊${usedPrefix}join
│🤴🏻┊${usedPrefix}block
│🤴🏻┊${usedPrefix}unblock
│🤴🏻┊${usedPrefix}autoadmin
│🤴🏻┊${usedPrefix}getplugin
│🤴🏻┊${usedPrefix}let
│🤴🏻┊${usedPrefix}dsowner
│🤴🏻┊${usedPrefix}banchat
│🤴🏻┊${usedPrefix}unbanchat
│🤴🏻┊${usedPrefix}banuser
│🤴🏻┊${usedPrefix}unbanuser
│🤴🏻┊${usedPrefix}restart
│🤴🏻┊${usedPrefix}creargc
│🤴🏻┊${usedPrefix}leavegc
│🤴🏻┊${usedPrefix}broatcast
│🤴🏻┊${usedPrefix}bcgc
│🤴🏻┊${usedPrefix}bgc2
│🤴🏻┊${usedPrefix}kickall
│🤴🏻┊${usedPrefix}savefile
│🤴🏻┊${usedPrefix}upload
│🤴🏻┊${usedPrefix}timeout
│🤴🏻┊${usedPrefix}base64
│🤴🏻┊${usedPrefix}doxearip
│🤴🏻┊${usedPrefix}doxnum
│🤴🏻┊${usedPrefix}doxdni
│🤴🏻┊${usedPrefix}doxplaca
╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
`.trim();

    conn.sendMessage(m.chat, {
      text: text,
      contextInfo: {
        mentionedJid: conn.parseMention(text),
        isForwarded: true,
        forwardingScore: 999,
        externalAdReply: {
          title: `${await conn.getName(m.sender)}, Thank for using Naguará, you can follow me on Instagram by clicking here`,
          body: 'Im Dev Criss 💋',
          thumbnail: await (await fetch(img)).buffer(),
          sourceUrl: insta,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: fkontak });

  } catch (e) {
    conn.reply(m.chat, '❎ Error en el comando. Inténtalo más tarde.', m);
  }
};

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.fail = null;

export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}