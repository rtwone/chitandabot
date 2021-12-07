exports.allmenu = (conn, prefix, pushname) => {
    return `Hi ${pushname ? pushname : 'Kak'}, Berikut list menu yang tersedia di Bot ini!

*Converter / Tools*
≻ ${prefix}menu
≻ ${prefix}donasi
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
