const url = 'https://www.youtube.com/channel/UCBnMxlW70f0SB4ZTJx124lw'
let keyword: string = ''
    if (url.indexOf('https://www.youtube.com/channel/') !== -1) {
      keyword = url.replace('https://www.youtube.com/channel/', '').replace('/', '').trim()
    } else if (url.indexOf('https://www.youtube.com/c/') !== -1) {
      keyword = url.replace('https://www.youtube.com/c/', '').replace('/', '').trim()
    }

    console.log(keyword)