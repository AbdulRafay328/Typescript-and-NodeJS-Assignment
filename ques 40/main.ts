function makealbum (artist: string , title: string):{ artist: string ; title : string}{
    var dictionaries = {
        artist : artist.charAt(0).toUpperCase()+ artist.slice(1),
        title : title.charAt(0).toUpperCase()+ title.slice(1),
    };
    return dictionaries;
}
let album = makealbum("ali","light")
console.log(album);
 album = makealbum("rafay","sun")
console.log(album);
 album = makealbum("wasay","breeze")
console.log(album);
 album = makealbum("rohaan","moon")
console.log(album);
