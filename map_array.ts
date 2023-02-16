// let nameList:string[]=["sıla","kadir"];

// let tuple:[string,number]=["ahmet",23];

// class KeyValuePair{
//     key:number;
//     value:string;
// }

// let myList:KeyValuePair[]=[];

var map=new Map();

map.set(1,"kalem");
map.set(2,"defter");
map.set(3,"silgi");

for(let key of map.keys()){
    console.log(key)
}
for(let value of map.values()){
    console.log(value);
}

for(let keyAndValue of map.entries()){
    console.log(`${keyAndValue[0]} ${keyAndValue[1]}`)
}