let tasks = [
  { label: "Eat my lunch", done: true },
  { label: "Make the bed", done: false },
  { label: "Have some fun", done: false },
  { label: "Finish the replits", done: false },
  { label: "Finish my exercises", done: true },
  { label: "Ask for a raise", done: false },
  { label: "Read a book", done: true },
  { label: "Make a trip", done: false },
];

let made = tasks.filter(function(hecho){
  return hecho.done == Boolean(true);
});

console.log(made);