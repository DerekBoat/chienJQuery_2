$( document ).ready( onReady );

// songs app
let songs = [];

function onReady(){
    console.log( 'in onReady' );
    $( '#updateSongsButton' ).on( 'click', displaySongs );
} // end onReady

function displaySongs(){
    console.log( 'in displaySongs' );
} // end displaySongs

/// - test song
songs.push( { 
    artist: 'Red Hot Chili Peppers',
    song: 'Under the Bridge',
    album: 'Blood Sugar Sex Magik',
    year: 1991
});