exports.allmenu = (conn, prefix, pushname) => {
    return `Hi ${pushname ? pushname : 'Kak'}, Berikut list menu yang tersedia di Bot ini!

*Information Bot*
≻ ${prefix}menu
≻ ${prefix}donasi
≻ ${prefix}speed
≻ ${prefix}runtime

*Converter/Tools*
≻ ${prefix}sticker
≻ ${prefix}toimg
≻ ${prefix}tovid

*Downloader*
≻ ${prefix}tiktok
≻ ${prefix}ytmp4
≻ ${prefix}ytmp3
≻ ${prefix}instagram
≻ ${prefix}facebook

fitur lainnya masih dalam tahap pengembangan, request fitur chat ${prefix}owner
    `
}
