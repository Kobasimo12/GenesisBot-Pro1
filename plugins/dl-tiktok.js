import axios from 'axios'
import cheerio from 'cheerio'

var handler = async (m, { conn, args }) => {
    if (!args[0]) {
        throw '➤ `𝗔𝗩𝗜𝗦𝗢` 🐈‍⬛\n\n*INGRESA EL LINK DEL TIKTOK*\n_Ejemplo: ${usedPrefix + command} <link>_';
    }
        m.react('🕒') 

    try {

        const tiktokData = await tryServer1(args[0]);

        if (!tiktokData) {
            throw '➤ `𝗔𝗩𝗜𝗦𝗢` 🐈‍⬛\n\n*¡NO SE PUDO DESCARGAR EL VIDEO!*';
        }

        const videoURL = tiktokData.video.noWatermark;

        const videoURLWatermark = tiktokData.video.watermark;

        let ppTiktok = '';
        if (tiktokData.author && tiktokData.author.avatar) {
            ppTiktok = tiktokData.author.avatar;
        }

        const infonya_gan = `𝗔𝗤𝗨𝗜 𝗧𝗜𝗘𝗡𝗘𝗦 𝗧𝗨 𝗩𝗜𝗗𝗘𝗢 🐈‍⬛\n\n𝗙𝗲𝗰𝗵𝗮: ${tiktokData.created_at}\n𝗨𝘀𝘂𝗮𝗿𝗶𝗼: ${tiktokData.author.name || 'No hay información'}\n`;

        if (videoURL || videoURLWatermark) {
            await conn.sendFile(m.chat, videoURL, 'tiktok.mp4', `${infonya_gan}`, m);
            setTimeout(async () => {
                //await conn.sendFile(m.chat, videoURLWatermark, 'tiktokwm.mp4', `${infonya_gan}`, m);
                //await conn.sendFile(m.chat, `${tiktokData.music.play_url}`,'lagutt.mp3', 'ini lagunya',m);
            }, 5000);
        } else {
            throw '➤ `𝗔𝗩𝗜𝗦𝗢` 🐈‍⬛\n\n*NO HAY ENLACE DE VÍDEO DISPONIBLE.*';
        }
    } catch (error1) {
        // jika server 1 gagal, gunakan server 2
        try {
            await conn.reply(m.chat, '➤ `𝗔𝗩𝗜𝗦𝗢` 🐈‍⬛\n\n*Espera un momento, el video se está descargando... servidor 2*', m);
            const tiktokData2 = await tryServer2(args[0]);

            if (!tiktokData2) {
                throw '➤ `𝗔𝗩𝗜𝗦𝗢` 🐈‍⬛\n\n*¡NO SE PUDO DESCARGAR EL VIDEO!*';
            }

            const videoURL2 = tiktokData2.video;
            const audioURL2 = tiktokData2.audio;
            const thumbnailURL = tiktokData2.thumbnail;

            // Lakukan apa yang Anda perlukan dengan tiktokData2 dari Server 2 di sini
            //await conn.sendFile(m.chat, thumbnailURL, 'thumbnail.jpg', 'Esta es la miniatura del vídeo.', m);
            await conn.sendFile(m.chat, videoURL2, 'tiktok2.mp4', 'Este es el vídeo del Servidor 2.', m);
            //await conn.sendFile(m.chat, audioURL2, 'tiktok.mp3', 'Este es el audio.', m);
            conn.reply(m.chat, "tiktok.ryzendesu.com", m);

        } catch (error2) {
            // Jika server kedua juga gagal, tangani error di sini
            conn.reply(m.chat, `Error: ${error2}`, m);
        }
    }
};

handler.help = ['tiktok'].map((v) => v + ' <url>');
handler.tags = ['dl'];
handler.command = /^t(t|iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))$/i;

export default handler;

async function tryServer1(url) {
    // server 1 tiklydown.eu.org
    let tiklydownAPI = `https://api.tiklydown.eu.org/api/download?url=${url}`;
    let response = await axios.get(tiklydownAPI);
    return response.data;
}

async function tryServer2(url) {
    // jika server 1 gagal, gunakan tikdown.org/id
    const tikdownURL = 'https://tikdown.org/id';
    const response = await axios.get(tikdownURL);

    if (response.status === 200) {
        const gettoken = await axios.get("https://tikdown.org/id");
        const $ = cheerio.load(gettoken.data);
        const token = $("#download-form > input[type=hidden]:nth-child(2)").attr(
            "value"
        );
        const param = {
            url: url,
            _token: token,
        };
        const {
            data
        } = await axios.request("https://tikdown.org/getAjax?", {
            method: "post",
            data: new URLSearchParams(Object.entries(param)),
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
            },
        });
        var getdata = cheerio.load(data.html);
        if (data.status) {
            return {
                status: true,
                thumbnail: getdata("img").attr("src"),
                video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
                audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
            };
        } else
            return {
                status: false,
            };
    };
}