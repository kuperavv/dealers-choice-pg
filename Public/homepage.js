module.exports = (artists) => `
  <html>
    <head>
      <title>Reggeaton Hits</title>
      <link rel='stylesheet' href='/style.css'>
    </head>
    <body>
      <h1>Top Artists</h1>
      <ul id = 'artistList'>
        ${artists
          .map(
            (artist) =>
              `<li class="artist"><a href=/albums/${artist.id}><img src=${artist.image}></a><a href=/albums/${artist.id}><span class='artistStyle'>${artist.name}</span></a></li>`
          )
          .join('')}
      </ul>
    </body>
  </html>`;
