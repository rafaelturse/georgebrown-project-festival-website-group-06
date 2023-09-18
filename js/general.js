/**
 * For test purposes, print to console all values from an array
 * 
 * @param {*} array : generic array
 */
function printArrayValues(array) { for (let i of array){ console.log(i) } }

/**
 * Return a list of js literals objects
 * 
 * @returns artists
 */
function getArtists() {
    var artists = []

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
    var result = ""
    
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
 * An HTML section referred as "artists" is required
 */
function getHtmlArtists() {
    let artistSection = document.getElementById("artists")
    let artists = getArtists()
   
    /* if artists section not exist, so exit */
    if (!artistSection) return ""

    artistSection.innerHTML = artistsToHTML(artists)
}