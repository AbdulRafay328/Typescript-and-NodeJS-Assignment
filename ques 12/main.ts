let guest_list: string[]= ["kholi" , "babar" , "ab de villars"]
let Message : string = ( "it is our pleasure to invite you in our party" )
for( let i=0; i<guest_list.length; i++){

    console.log(`Dear ${guest_list[i]}, \n\n\n      ${Message} \n\n\n       thank you   ` );
}