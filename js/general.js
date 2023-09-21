/* ############### */
/* ### ARTISTS ### */
/* ############### */

/* LITERALS */
const artists = [
    {
        photo: `../assets/img/the-beatles.jpg`,
        name: `The Beatles`,
        performingTimes: [
            `2023-10-07 7h40 PM`,
            `2023-10-08 6h00 PM`,
            `2023-10-09 3h30 PM`
        ],
        musicGenre: [
            `POP`, 
            `Rock`
        ],
        popularSongs: [
            `Come Together`, 
            `Help!`, 
            `Twist and Shout`, 
            `Yellow Submarine`, 
            `Here Comes the Sun`, 
            `Hey Jude`, 
            `Love Me Do`, 
            `Yesterday`, 
            `In My Life`, 
            `Strawberry Fields Forever` 
        ]
    },
    {
        photo: `../assets/img/the-beatles.jpg`,
        name: `Black Sabbath`,
        performingTimes: [
            `2023-10-07 6h00 PM`,
            `2023-10-08 7h30 PM`,
            `2023-10-09 4h00 PM`
        ],
        musicGenre: [
            `Rock`,
            `Heavy Metal`
        ],
        popularSongs: [
            `Paranoid`,
            `Iron Man`, 
            `War Pigs`,
            `Children of the Grave`, 
            `N.I.B.`,
            `Heaven and Hell`,
            `Orchid`, 
            `Sweet Leaf`, 
            `Planet Caravan`, 
            `The Wizard`
        ]
    },
    {
        photo: `../assets/img/the-beatles.jpg`,
        name: `Ozzy Osbourne`,
        performingTimes: [
            `2023-10-07 4h00 PM`,
            `2023-10-08 10h30 PM`,
            `2023-10-09 8h20 PM`
        ],
        musicGenre: [
            `Rock`,
            `Heavy Metal`
        ],
        popularSongs: [
            `Crazy Train`, 
            `No More Tears`, 
            `Mama, I'm Coming Home`, 
            `I Don't Wanna Stop`, 
            `Bark at the Moon`, 
            `Mr. Crowley`, 
            `Shot in the Dark`, 
            `Dreamer`, 
            `Close My Eyes Forever`, 
            `Hellraiser`
        ]
    }
]

function getLi(array) {
    let result = ""
    
    /* assembly line items for a list */
    for (let i of array) { result += `<li>${i}</li>` }

    return result
}

/* ARTISTS LOADER */
const pageLoaded = () => {

    for (artist of artists) {

        /* assembling HTML */
        const output = `
            <div>
                <p>${artist.name}</p>
                <img src="${i.photo}">
                <div><ul>${getLi(artist.performingTimes)}</ul></div>
                <div><ul>${getLi(artist.musicGenre)}</ul></div>
                <div><ul>${getLi(artist.popularSongs)}</ul></div>
            </div>
        `

        /* append that html to the section element */
        document.querySelector("section").innerHTML += output
    }

}

/* ############### */
/* ### TICKETS ### */
/* ############### */

function toCurrency(number) { 
    /* Convert numbers into currency  */
    return "$" + (Math.round(number * 100) / 100).toFixed(2) 
}

function ticketReportError() {
    /* set error message to the page */
    document.getElementById("ticketReport").innerHTML = `<p style="color: red">Verify Given Information</p>` 
}

function getTicketReport() {
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

    const ticket = `
        <p>Number of tickets: ${toCurrency(ticketQuantity)} </p>
        <p>Price per ticket: ${toCurrency(unitPrice)}</p>
        <p>Subtotal: ${toCurrency(subtotal)} </p>
        <p>Tax (13%): ${toCurrency(tax)} </p>
        <p>Final Price: ${toCurrency(finalPrice)} </p>
    `

    ticketReport.innerHTML = ticket
}