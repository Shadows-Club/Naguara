import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
   ['', 'Martinpi', true],
   ['51927238856', 'Cristian Escobar', true],
   ['51990841568', 'Moderador', false],
   ['51965911060', 'Moderador', false]
]

global.creadorbot = [
   ['51927238856', 'Cristian Escobar', true]
]

global.mods = []
global.prems = []


global.packname = 'Naguara Bot - MD'
global.botname = 'Naguara Bot - MD'
global.wm = 'Garu Bot - MD'
global.author = '𝖲𝗁⍺𝖽ᦅ𝗐′𝗌 𝖢𝗅𝗎𝖻'
global.dev = '𝖯𑄜𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 𝖲𝗁⍺𝖽ᦅ𝗐′𝗌 𝖢𝗅𝗎𝖻'
global.errorm = 'Error: ${error.message}'
global.nombrebot = 'Bot Naguara Oficial'
global.textbot = `NAGUARA OFICIAL`
global.vs = '1.0.0'


global.catalogo = fs.readFileSync('./media/catalogo.jpg')


global.repobot = 'https://github.com/Shadows-Club/GaruBot'
global.grupo = 'https://chat.whatsapp.com/FCS6htvAmlT7nq006lxU4I'
global.comu = 'https://chat.whatsapp.com/Kn1pPVAO08pFRo7qJnKuh6'
global.channel = 'https://whatsapp.com/channel/0029VauTE8AHltY1muYir31n'
global.insta = 'https://www.instagram.com/dev.criss_vx'


global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Shadow′s 乂 Club', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}


global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        


global.multiplier = 69 
global.maxwarn = '3'


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})