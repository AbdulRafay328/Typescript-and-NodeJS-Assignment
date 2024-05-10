let celebrities: string[]= ["kholi" , "babar" , "ab de villars"]
let Message_1 : string = ( "it is our pleasure to invite you in our party" )
let absentguest : string = "kholi"
let newguest : string = "warner"
celebrities[0] = newguest;
for( let i=0; i<celebrities.length; i++){

    console.log(`Dear ${celebrities[i]}, \n\n\n      "${Message_1}" \n\n\n                           thank you,\n\n` );
}
console.log(absentguest, " is not coming to the dinner ");