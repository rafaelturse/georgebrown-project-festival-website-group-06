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
function toCurrency(number) { return "$" + (Math.round(number * 100) / 100).toFixed(2) }

/**
 * set error message to the page
 * 
 */
function ticketReportError() {
    document.getElementById("ticketReport").innerHTML = `<p style="color: red">Verify Given Information</p>` 
}

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

/**
 * An HTML section referred as "ticketReport" is required to be replace by ticket values
 * 
 */
function getTicketReport() {
    let ticket = ""
    
    let ticketReport = document.getElementById("ticketReport")
    let radioTicketType = document.querySelector('input[name="ticketType"]:checked').value;
    let ticketQuantity = document.getElementById("ticketQuantity").value
    let creditCardNumber = document.getElementById("creditCardNumber").value
    let unitPrice = 0

    /* if ticketReport section not exist, so exit */
    if (!ticketReport) return ""
    
    /* validating fields - radio */
    if (radioTicketType === "ticketCheap") { 
        unitPrice = document.getElementById("id_cheap_ticket_price").innerText 
    } else if (radioTicketType === "ticketExpensive") { 
        unitPrice = document.getElementById("id_expensive_ticket_price").innerText 
    }

    /* validating fields - quantity */
    if (isNaN(ticketQuantity)) {  return ticketReportError() }

    /* validating fields - creditCardNumber */
    if (isNaN(creditCardNumber) || (creditCardNumber.length != 16)) { return ticketReportError() }

    /* result */
    let subtotal = ticketQuantity * unitPrice
    let tax = subtotal * 0.13
    let finalPrice = subtotal + tax

    ticket += `<p>Number of tickets: ${toCurrency(ticketQuantity)} </p>`
    ticket += `<p>Price per ticket: ${toCurrency(unitPrice)}</p>`
    ticket += `<p>Subtotal: ${toCurrency(subtotal)} </p>`
    ticket += `<p>Tax (13%): ${toCurrency(tax)} </p>`
    ticket += `<p>Final Price: ${toCurrency(finalPrice)} </p>`

    ticketReport.innerHTML = ticket
}