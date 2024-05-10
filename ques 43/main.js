"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great2(magicians) {
    const greatmagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + " the great");
    }
    return greatmagicians;
}
const magician3 = ["rafay", "azeem", "harris"];
const greatmagician2 = make_great2(magician3);
show_magicians(magician3);
show_magicians(greatmagician2);
