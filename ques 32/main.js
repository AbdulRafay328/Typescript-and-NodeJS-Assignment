"use strict";
let current_users = ["admin", "erric", "ali", "hamza", "fatima"];
let new_users = ["admin", "fatima", "aliza", "haseeb", "noor"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(` sorry ${new_user}, that name is taken`);
    }
    else {
        console.log(`yes ${new_user}, is still available in list`);
    }
}
