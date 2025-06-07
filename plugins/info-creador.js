import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    await m.react('🤍');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = await conn.getName(m.sender);

    // Descargar imagen como buffer
    let res = await fetch('https://files.catbox.moe/8an9fs.jpg');
    let thumb = await res.buffer();

    // VCARD
    let list = [{
        displayName: "Cristian Escobar",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Cristian Escobar\nitem1.TEL;waid=51927238856:51927238856\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET:cristianescobar.vx@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/dev.criss_vx\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Perú;;;;\nitem4.X-ABLabel:País\nEND:VCARD`
    }];

    // Enviar contacto con vista previa enriquecida
    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'Hello I am the creator of Naguara Bot Oficial',
                body: 'Dev.Criss 🇦🇱',
                thumbnail: thumb,
                sourceUrl: 'https://wa.me/51927238856?text=¡Hola!,+Quiero+bot+perzonalizando.',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    // Mensaje de texto adicional
    let txt = `👋🏻 *Hola \`${username}\` este es*\n*el contacto de mi creador*`;

    await conn.sendMessage(m.chat, { text: txt }, { quoted: m });
};

handler.help = ['owner', 'creador'];
handler.tags = ['info'];
handler.command = /^(creator|creador)$/i;

export default handler;