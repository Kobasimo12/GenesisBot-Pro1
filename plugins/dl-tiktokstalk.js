import axios from 'axios'

let handler = async (m, {usedPrefix, command, conn, text }) => {

if (!text) throw `Error!\nMasukan username, *Ex: ${usedPrefix + command} mrbeast`
try {
m.reply(wait)
let ress = await axios.get(`https://www.api-nightmares.my.id/api/tiktok-stalk?q=${text}&apikey=Tio`)
let res = ress.data
let teks = `乂  *STALKER TIKTOK*

◦  Username : ${res.result.username}
◦  Nickname : ${res.result.name}
◦  Pengikut  : ${res.result.followers}
◦  Mengikuti : ${res.result.following}
◦  Deskripsi  : ${res.result.description}`
await conn.sendMessage(m.chat, {image: {url : res.result.pp_user}, caption: teks}, {quoted: m})
} catch (err) {
m.reply('Error Username tidak ditemukan\nSilahkan kirim Username yang valid!')
}

}
handler.help = ['stalktiktok <username>']
handler.tags = ['stalker']
handler.command = /^(tiktokstalk|stalktiktok|ttstalk)$/i
handler.limit = true
export default handler