"use strict";
function makeshirt(size, text = " i like small shirts") {
    console.log(`you ordered a ${size} shirt that says ${text}`);
}
makeshirt("large");
makeshirt("medium");
makeshirt("small", " i need a big shirt to wear");
