let handler = async (m, { conn }) => {
  await m.react('🪶');

  // Crear contacto VCARD
  let list = [{
    displayName: "Sofi",
    vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Sofi\nitem1.TEL;waid=51920487891:51920487891\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET:team.sunflare@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/nee\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Perú 🇵🇪;;;;\nitem4.X-ABLabel:País\nEND:VCARD`
  }];

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: `${list.length} Contacto`,
      contacts: list
    }
  }, { quoted: m });
};

handler.help = ['owner', 'creador'];
handler.tags = ['info'];
handler.command = /^(owner|dueño)$/i;

export default handler;