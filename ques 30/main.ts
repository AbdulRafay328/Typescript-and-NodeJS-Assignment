let users : string[]=["admin","erric","rafay","harris","azeem"];
for( let user of users ){
    if (user === " admin"){
        console.log("hello admin, would you like to status report?");
    }
    else{
        console.log(`hello ${user}, thannk you for logging in again`);
    }
}
