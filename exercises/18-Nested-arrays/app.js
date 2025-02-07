let coordinatesArray = [[33.747252, -112.633853], [-33.867886, -63.987], [41.303921, -81.901693], [-33.350534, -71.653268]];

function longitud(coordinatesArray){
    let newArray = [];
    for (let number = 0; number < coordinatesArray.length; number++){
        newArray.push(coordinatesArray[number][1]);
    }
    return newArray.join("\n");
}
console.log(longitud(coordinatesArray));