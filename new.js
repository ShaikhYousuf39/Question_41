"use strict";
const magician = ["David Blaine", "Criss Angel", "Harry Houdini"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
show_magicians(magician);
