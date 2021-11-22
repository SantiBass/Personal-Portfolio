
var fish = {
    name: "blue", 
    color: "yellow",
    here: function()  {
        return this.color
        }
}


function something() {
    var here = "here"
    var there = "there"

    console.log(this)
}

function somethingElse() {
    var here = "here"
    var there = "there"

    something()
}

console.log(`this is a ${fish.color} fish named ${fish.name}`)

console.log("this is a " + fish.color + " fish named " + fish.name)