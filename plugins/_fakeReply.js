import fetch from 'node-fetch'

export async function before(m, { conn }) {
let img = await (await fetch(`https://tinyurl.com/2c5hk765`)).buffer()

 global.rcanal = {
    contextInfo: {
            isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363220939514640@newsletter",
      serverMessageId: 100,
      newsletterName: "𝘎𝘦𝘯𝘦𝘴𝘪𝘴 𝘊𝘢𝘯𝘢𝘭 🐈‍⬛",
    },
    },
  }

 global.adReply = {
            contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
                                    showAdAttribution: true,
                                        title: packname,
                                        body: packname,
                                        mediaUrl: null,
                                        description: null,
                                        previewType: "PHOTO",
                                        thumbnailUrl: img,
                    thumbnail: img,
                           sourceUrl: fgcanal,
                           mediaType: 1,
                   renderLargerThumbnail: true
                                }
                        }
                }
}