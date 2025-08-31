function User(name, age) {
    this.name = name;
    this.age = age;


    User.prototype.info = function(){
        return`${this.name} (${age})`;
    }
    
}
let person = {
    name: "Jack",
    info: function(){return this.name;}
}

let ann = {
    name: "ann",
    __proto__: person
}

console.log(ann);
console.log(ann.info());