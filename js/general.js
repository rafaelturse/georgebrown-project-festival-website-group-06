/**
 * print to console all values from an array
 * 
 * @param {*} array : generic array
 */
function printArrayValues(array) { for (let i of array){ console.log(i) } }

/**
 * return a list of js literals objects
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

function getLi() {
    
}

function artistsToHTML (artists) {
    let htmlArtists = ''

    for (let i of artists) { 
        htmlArtists += `<div>`
        htmlArtists += `<p>${i.name}</p>`
        htmlArtists += `<img src="${i.photo}">`
        htmlArtists += `<div><ul>${getLi()}</ul></div>`
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