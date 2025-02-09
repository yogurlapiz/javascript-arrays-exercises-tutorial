// Your code here
function lyricsGenerator(mix){
    song = '';
    count0 = 0;

 for (let beat = 0; beat >=0; beat++){
    if (mix[beat] == 0){
        console.log('Boom');
        count0 = 0;
    }
    else if (mix[beat] == 1){
        console.log('Drop the bass');
        count0 += 1;
    }
    else if (count0 === 3) {
        console.log('!!!Break the bass!!!');
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
