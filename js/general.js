/* ############### */
/* ### ARTISTS ### */
/* ############### */
const artists = [
  {
    photo: `https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg`,
    name: `The Beatles`,
    performingTimes: `2023-10-07 7h40 PM`,
    musicGenre: `POP`,
    popularSong: `Yellow Submarine`,
  },
  {
    photo: `https://ca-times.brightspotcdn.com/dims4/default/cb16b10/2147483647/strip/true/crop/4935x3290+0+0/resize/2400x1600!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5b%2F33%2Ff367fb35474d864941e977e5f48e%2F927846-ca-0321-red-hot-chili-peppers-sunday-calendar-cover-mrt-02.jpg`,
    name: `Red Hot Chili Peppers`,
    performingTimes: `2023-10-08 7h30 PM`,
    musicGenre: `Rock`,
    popularSong: `Californication`,
  },
  {
    photo: `https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_04/3195301/200121-ozzy_osbourne-mc-13202.jpg`,
    name: `Ozzy Osbourne`,
    performingTimes: `2023-10-09 8h20 PM`,
    musicGenre: `Heavy Metal`,
    popularSong: `Crazy Train`,
  },
];

/* ARTISTS LOADER */
const assembleArtistCards = () => {
  let cards;
  for (artist of artists) {
    cards += `
      <div class="artist-card">
        <img
          class="artist-card-img"
          src=${artist.photo}
          alt="performing artist"
        />
        <div class="artist-card-text-group">
          <h2 class="artist-card-title">${artist.name}</h2>
          <p class="artist-card-text">${artist.performingTimes}</p>
          <p class="artist-card-text">${artist.musicGenre}</p>
          <p class="artist-card-text">${artist.popularSong}</p>
          <a class="artist-button-link">Buy Ticket</a>
        </div>
      </div>
        `;
  }
  return cards;
};
const artistCards = assembleArtistCards();
document.getElementById("artist-section").innerHTML = artistCards;

/* ############### */
/* ### TICKETS ### */
/* ############### */

function toCurrency(number) {
  /* Convert numbers into currency  */
  return "$" + (Math.round(number * 100) / 100).toFixed(2);
}

function ticketReportError() {
  /* set error message to the page */
  document.getElementById("ticketReport").innerHTML = `<p style="color: red">Verify Given Information</p>`;
}

function getTicketReport() {
  let ticketReport = document.getElementById("ticketReport");
  let radioTicketType = document.querySelector('input[name="ticketType"]:checked').value;
  let ticketQuantity = document.getElementById("ticketQuantity").value;
  let creditCardNumber = document.getElementById("creditCardNumber").value;
  let unitPrice = 0;

  /* if ticketReport section not exist, so exit */
  if (!ticketReport) return "";

  /* validating fields - radio */
  if (radioTicketType === "ticketCheap") {
    unitPrice = document.getElementById("id_cheap_ticket_price").innerText;
  } else if (radioTicketType === "ticketExpensive") {
    unitPrice = document.getElementById("id_expensive_ticket_price").innerText;
  }

  /* validating fields - quantity */
  if ((ticketQuantity <= 0) || (isNaN(ticketQuantity))) { return ticketReportError(); }

  /* validating fields - creditCardNumber */
  if (isNaN(creditCardNumber) || creditCardNumber.length != 16) { return ticketReportError(); }

  /* result */
  let subtotal = ticketQuantity * unitPrice;
  let tax = subtotal * 0.13;
  let finalPrice = subtotal + tax;

  const ticket = `
        <p>Number of tickets: ${toCurrency(ticketQuantity)} </p>
        <p>Price per ticket: ${toCurrency(unitPrice)}</p>
        <p>Subtotal: ${toCurrency(subtotal)} </p>
        <p>Tax (13%): ${toCurrency(tax)} </p>
        <p>Final Price: ${toCurrency(finalPrice)} </p>
    `;

  ticketReport.innerHTML = ticket;
}
