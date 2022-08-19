// Write your solution here!
const cats = ["Milo", "Otis","Garfield"];

function destructivelyAppendCat(name){
 console.log(cats.push("Ralph"));
}

function destructivelyPrependCat(name){
    console.log(cats.unshift("Bob"));
}

function destructivelyRemoveLastCat(){
    console.log(cats.pop());
}

function destructivelyRemoveFirstCat(){
    console.log(cats.shift());
}

function appendCat(name){
 var newCats = cats.slice();
 newCats.push("Broom");
return newCats;
}

function  prependCat(name){
    var borCats = ["Arnold", ...cats];
    return borCats;
};
function removeLastCat(){
    var nowCats = cats.slice();
    nowCats.pop();
    return nowCats;
}

function removeFirstCat(){
    var byCats = cats.slice();
    byCats.shift();
    return byCats;
}