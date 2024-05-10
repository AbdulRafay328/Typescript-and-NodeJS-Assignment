"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
//const magician : string[]= ["rafay","harris","azeem"];
//show_magicians(magician)
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great";
    }
}
const magician2 = ["usman", "haseeb", "wajahat"];
make_great(magician2);
show_magicians(magician2);
