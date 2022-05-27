//assigning value to a user and exporting it 
//assuming this code is inserted into first.js file
export var user = {
    name: "Maftuna"
};

//importing file above
import {user} from './first.js';
console.log(user.name);
