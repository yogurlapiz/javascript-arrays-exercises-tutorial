let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

function getParkingLotState(parkingArray){
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  };
  for (let slots = 0; slots < parkingArray.length; slots++){
    for (let available = 0; available < parkingArray[slots].length; available++){
      if (parkingArray[slots][available] === 2){
        state.availableSlots += 1;
        state.totalSlots += 1;
      } 
      else if (parkingArray[slots][available] === 1) {
        state.occupiedSlots += 1;
        state.totalSlots += 1;
      }  
    }
    
  }
  return state;

}
console.log(getParkingLotState(parkingState))
