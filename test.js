const { each } = require("lodash")

let data = {
    "sources": [
        {
            url: 'https://eno.tendoloads.com/_v6/bb22edecb331af3e0ff31d9b74003357b448b9b5bb7b97fe07802ff3feb64a886f110a45fda651c87e6514441df95d88e1140b89af1629acb8dead31cfb87bac2b1744a888a3e042a372f2c4b0b8e67b5f461248e4a88926dc395aaecd70758c1175ce346ba232ce859beb82b9837309b1e345e50d81c66e4515c5faf6e26b44/master.m3u8',
            isM3U8: true
        },
        {
            url: 'https://eno.tendoloads.com/_v6/bb22edecb331af3e0ff31d9b74003357b448b9b5bb7b97fe07802ff3feb64a886f110a45fda651c87e6514441df95d88e1140b89af1629acb8dead31cfb87bac2b1744a888a3e042a372f2c4b0b8e67b5f461248e4a88926dc395aaecd70758c1175ce346ba232ce859beb82b9837309b1e345e50d81c66e4515c5faf6e26b44/master.m3u8',
            isM3U8: true,
            quality: 'auto'
        }
    ],
    "subtitles": [
        {
            url: 'https://ccb.megaresources.co/95/d0/95d0d40aeefc0329a36fade6c29369af/ara-3.vtt',
            lang: 'Arabic'
        },
        {
            url: 'https://ccb.megaresources.co/95/d0/95d0d40aeefc0329a36fade6c29369af/eng-2.vtt',
            lang: 'English'
        },
        {
            url: 'https://ccb.megaresources.co/95/d0/95d0d40aeefc0329a36fade6c29369af/fre-7.vtt',
            lang: 'French'
        },
        {
            url: 'https://ccb.megaresources.co/95/d0/95d0d40aeefc0329a36fade6c29369af/ger-8.vtt',
            lang: 'German'
        },
        {
            url: 'https://ccb.megaresources.co/95/d0/95d0d40aeefc0329a36fade6c29369af/por-5.vtt',
            lang: 'Portuguese'
        },
        {
            url: 'https://ccb.megaresources.co/95/d0/95d0d40aeefc0329a36fade6c29369af/rus-6.vtt',
            lang: 'Russian'
        },
        {
            url: 'https://ccb.megaresources.co/95/d0/95d0d40aeefc0329a36fade6c29369af/spa-4.vtt',
            lang: 'Spanish'
        },
        {
            url: 'https://imgb.megaresources.co/_a_preview/57/578f92a490efef4acf24027fbebce3a2/thumbnails/sprite.vtt',
            lang: 'Thumbnails'
        }
    ],
    "intro": { start: 28, end: 116 }
}

let newSub = []

data.subtitles.map(eachSub => {
    let newObj = {}

    newObj.kinds = "subtitles"
    newObj.src = eachSub.url
    newObj.srcLang = eachSub.lang
    eachSub.lang.toLowerCase() == 'english' && (newObj.default = true)
    newSub.push(newObj)
})
