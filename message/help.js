exports.allmenu = (conn, prefix, pushname) => {
    return `Hi ${pushname ? pushname : 'Kak'}, Berikut list menu yang tersedia di Bot ini!

*More Features*
≻ ${prefix}menu
≻ ${prefix}donasi
≻ ${prefix}sticker

*Downloader*
≻ ${prefix}tiktok
≻ ${prefix}ytmp4
≻ ${prefix}ytmp3
≻ ${prefix}instagram

fitur lainnya masih dalam tahap pengembangan, request fitur chat ${prefix}owner
    `
}
