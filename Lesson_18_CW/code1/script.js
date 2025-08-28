const jack={
    name:"Jack",
    age:25
};

const ann={
    fname: "Anna",
    lName: "Smith",
    age:20
}

console.log(jack);
console.log(ann);
let users = [jack, ann, {name: "john", age : 20}];
console.log(users);

console.log(jack.name);
jack.age = 30;
console.log (jack) ;

ann.name ="Ann";
console.log(ann);
delete ann.fname;
console.log(ann);
ann.children=["nick"];

console.log(ann.children);
if (ann.children===undefined){
    console.log("kein kinder");
}else{
    console.log("sie hat kinder");
}
