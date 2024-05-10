"use strict";
function createcar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
let mycar = createcar("toyota", "bmw", { color: "grey", year: "2024" });
console.log(mycar);
