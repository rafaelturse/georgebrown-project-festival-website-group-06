/**
 * For test purposes, print to console all values from an array
 * 
 * @param {*} array : generic array
 */
function printArrayValues(array) { for (let i of array){ console.log(i) } }

/**
 * Convert numbers into currency 
 * 
 * @param {*} number 
 * @returns currency
 */
function toCurrency(number) { return "$" + new Intl.NumberFormat().format(number) }

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
 * An HTML section referred as "artists" is required to be replace with artists data
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

/**
 * 
 * 
 */
function getTicketReport() {
    let ticket = ""
    
    let ticketreport = document.getElementById("ticketreport")
    
    let radioTicketType = document.querySelector('input[name="tickettype"]:checked').value;
    let ticketquantity = document.getElementById("ticketquantity").value
    let creditcardnumber = document.getElementById("creditcardnumber").value
    let unitprice = 0
    
    if (radioTicketType === "ticketcheap") { unitprice = document.getElementById("id_cheap_ticket_price").innerText }
    else if (radioTicketType === "ticketexpensive") { unitprice = document.getElementById("id_expensive_ticket_price").innerText }

    let subtotal = ticketquantity * unitprice
    let tax = subtotal * 0.13
    let finalPrice = subtotal + tax

    ticket += `<p>Number of tickets: ${toCurrency(ticketquantity)} </p>`
    ticket += `<p>Price per ticket: ${toCurrency(unitprice)}</p>`
    ticket += `<p>Subtotal: ${toCurrency(subtotal)} </p>`
    ticket += `<p>Tax (13%): ${toCurrency(tax)} </p>`
    ticket += `<p>Final Price: ${toCurrency(finalPrice)} </p>`

    ticketreport.innerHTML = ticket
}