let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
for (let loop = 0; loop < par.length; loop++){
    let letters = par[loop].toLowerCase();
    if (letters >= "a" && letters <= "z") {
        if (counts[letters]){
            counts[letters] += 1
        }
        else{
            counts[letters] = 1;
        }    
    }
    
}

console.log(counts);
