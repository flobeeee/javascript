let url3 = 'https://www.youtube.com/channel/UCBnMxlW70f0SB4ZTJx124lw'
let keyword: string = ''
    if (url3.indexOf('https://www.youtube.com/channel/') !== -1) {
      keyword = url3.replace('https://www.youtube.com/channel/', '').replace('/', '').trim()
    } else if (url3.indexOf('https://www.youtube.com/c/') !== -1) {
      keyword = url3.replace('https://www.youtube.com/c/', '').replace('/', '').trim()
    }

    console.log(keyword)