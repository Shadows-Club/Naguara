let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `*${emojis} Chat baneado.*`, m)

}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|banearchat|naguaraoff$/i
handler.rowner = true

export default handler