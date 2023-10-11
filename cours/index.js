// let a = 4;
// let b = 4;
// let c = 3;

// if (a == b) {
//   console.log("c'est égal");
// } else {
//   if ((c < b, a === c)) {
//     console.log("c'est ok");
//   } else {
//     console.log("c'est raté");
//   }
// }

// let a = 3;

// switch (a) {
//   case 3:
//     console.log("c'est 3");
//     break;

//   case 4:
//     console.log("c'est 4");
//     break;

//   case "Nicolas est gentil":
//     console.log("Nico le boss");
//     break;

//   default:
//     console.log("y'a R chef");
// }

// let a = 4;
// let b = 4;
// let c = 3;

// switch (a) {
//   case b:
//     console.log("égal à B");
//     break;
//   case c:
//     console.log("égal à C");
//     break;

//   default:("égal à rien");
//     "ah";
//     break;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// for (let i = 0; i < 10; i++){
//     console.log("oklm")
// }

// let a = 3;

// while (a < 9) {
//     a == 1;
//     if (a == 8) {
//         break
//     } else if (a == 7) {
        
//     }
// }


// let names = [];

// names.push("Vincent","Paul","Arthur");

// names.forEach(name) => {
//     console.log(names[name] + "va à la pêche")
// }

// let student = {
//     name: "alyssia",
//     age: "19",
//     city: "Antony",
// }

// console.log(student.name.length);

class Student{
    constructor(name, html, css, javascript, php) {
        this.name = name
        this.html = html
        this.css = css
        this.javascript = javascript
        this.php = php
    }
    getPHPLevel() {
        console.log(this.name + ' a ' + this.php + '/5 en PHP')
    }
}

let Michel = new Student("Michel", 5, 4, 1, 3)
let Nicolas = new Student("Nicolas", 5, 5, 5, 5)

Michel.getPHPLevel()