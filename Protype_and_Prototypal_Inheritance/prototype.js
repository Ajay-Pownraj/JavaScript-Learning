// let arr = ["Ajay", "Hari"];
let object = {
    name: "Ajay",
    city: "Bangalore",
    getIntro: function(){
        console.log(this.name + "from" + this.city);
    }
}

let object2 = {
    name: "Hari"
}

//Never do this
object2.__proto__= object;