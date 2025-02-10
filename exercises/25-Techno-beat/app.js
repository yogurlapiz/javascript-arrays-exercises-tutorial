// Your code here
function lyricsGenerator(music){
    let song = '';
    let count0 = 0;

 for (let beat = 0; beat < music.length; beat++){
    if (music[beat] == 0){
        song += 'Boom ';
        count0 = 0;
    }
    else if (music[beat] == 1){
        song += 'Drop the bass ';
        count0 += 1;
        if (count0 === 3) {
            song += '!!!Break the bass!!! ';
        }
    }
 }
 return song;
}

// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))