exports.allmenu = (conn, prefix, pushname) => {
    return `Hi ${pushname ? pushname : 'Kak'}, Berikut list menu yang tersedia di Bot ini!

≻ ${prefix}menu
≻ ${prefix}donasi
≻ ${prefix}sticker
≻ ${prefix}tiktok

fitur lainnya masih dalam tahap pengembangan, request fitur chat ${prefix}owner
    `
}
