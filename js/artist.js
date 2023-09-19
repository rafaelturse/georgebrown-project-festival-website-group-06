/**
 * Assembly a of all js artists literals objects 
 * 
 * @returns : a list of js artists literals objects
 */
function getArtists() {
    let artists = []

    artists.push(artistTheBeatles)
    artists.push(artistBlackSabbath)
    artists.push(artistOzzyOsbourne)

    return artists
}

/**
 * Assembly line items for a list
 * 
 * @param {*} array : values
 * @returns values surrounded by li tags
 */
function getLi(array) {
    let result = ""
    
    for (let i of array) { 
        result += `<li>`
        result += `${i}`
        result += `</li>`
    }

    return result
}

/**
 * Assembly artists data in HTML format 
 * 
 * @param {*} artists : artists literals objects
 * @returns : artists html 
 */
function artistsToHTML (artists) {
    let htmlArtists = ''

    for (let i of artists) { 
        htmlArtists += `<div>`
        htmlArtists += `<p>${i.name}</p>`
        htmlArtists += `<img src="${i.photo}">`
        htmlArtists += `<div><ul>${getLi(i.performingTimes)}</ul></div>`
        htmlArtists += `<div><ul>${getLi(i.musicGenre)}</ul></div>`
        htmlArtists += `<div><ul>${getLi(i.popularSongs)}</ul></div>`
        htmlArtists += `</div>`
    }

    return htmlArtists
}

/**
 * An HTML section referred as "artists" is required to be replace by artists data
 * 
 */
function getHtmlArtists() {
    let artistSection = document.getElementById("artists")
    let artists = getArtists()
   
    /* if artists section not exist, so exit */
    if (!artistSection) return ""

    /* write artist info into html page */
    artistSection.innerHTML = artistsToHTML(artists)
}