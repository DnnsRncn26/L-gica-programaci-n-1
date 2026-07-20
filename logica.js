const prompt = require ("prompt-sync")();
let numbA = Number (prompt("Ingresa el primer número: "));
let numbB = Number (prompt("Ingresa el segundo número: "));
let numbC = Number (prompt("Ingresa el tercer número: "));


if (numbA >= numbB && numbB >= numbC) {
    console.log("Mayor a menor: " + (numbA) + ", " + (numbB) + ", " + (numbC));
}
else if  (numbA >= numbC && numbC >= numbB) {
    console.log("Mayor a menor: " + (numbA) + ", " + (numbC) + ", " + (numbB));
}
else if (numbB >= numbA && numbA >= numbC) {
    console.log("Mayor a menor: " + (numbB) + ", " + (numbA) + ", " + (numbC));
}
else if (numbB >= numbC && numbC >= numbA) {
    console.log("Mayor a menor: " + (numbB) + ", " + (numbC) + ", " + (numbA));
}
else if (numbC >= numbA && numbA >= numbB) {
    console.log("Mayor a menor: " + (numbC) + ", " + (numbA) + ", " + (numbB));
}
else {console.log("Mayor a menor: " + (numbC) + ", " + (numbB) + ", " + (numbA));
 };



if (numbA <= numbB && numbB <= numbC) {
    console.log("Menor a mayor: " + (numbA) + ", " + (numbB) + ", " + (numbC));
}
else if (numbA <= numbC && numbC <= numbB) {
    console.log("Menor a mayor: " + (numbA) + ", " + (numbC) + ", " + (numbB));
}
else if  (numbB <= numbA && numbA <= numbC) {
    console.log("Menor a mayor: " + (numbB) + ", " + (numbA) + ", " + (numbC));
}
else if  (numbB <= numbC && numbC <= numbA) {
    console.log("Menor a mayor: " + (numbB) + ", " + (numbC) + ", " + (numbA));
}
else if (numbC <= numbA && numbA <= numbB) {
    console.log("Menor a mayor: " + (numbC) + ", " + (numbA) + ", " + (numbB));
}
else {
    console.log("Menor a mayor: " + (numbC) + ", " + (numbB) + ", " + (numbA));
};



if (numbA === numbB && numbB === numbC) {
    console.log("Los números son iguales");
};




if (numbA <= numbB && numbB <= numbC) {
    console.log("El número mayor es: " + (numbC) + ". El número del centro es: " + (numbB) + ". El número menor es: " + (numbA));
}
else if (numbA <= numbC && numbC <= numbB) {
    console.log("El número mayor es: " + (numbB) + ". El número del centro es: " + (numbC) + ". El número menor es: " + (numbA));
}
else if (numbB <= numbA && numbA <= numbC) {
    console.log("El número mayor es: " + (numbC) + ". El número del centro es: " + (numbA) + ". El número menor es: " + (numbB));
}
else if (numbB <= numbC && numbC <= numbA) {  
console.log ("El número mayor es: " + (numbA) + ". El número del centro es: " + (numbC) + ". El número menor es: " + (numbB));
}
else if (numbC <= numbA && numbA <= numbB) {
console.log ("El número mayor es: " + (numbB) + ". El número del centro es: " + (numbA) + ". El número menor es: " + (numbC));
}
else {
    console.log("El número mayor es: " + (numbA) + ". El número del centro es: " + (numbB) + ". El número menor es: " + (numbC));
};





// let numeroMayor = numbA;



// if (numbA > numbB && numbA > numbC){
//     console.log ("El número mayor es: " + numbA); 
// };

// if (numbB > numbC && numbB > numbA) {
//     console.log("El número mayor es: " + numbB);
// };

// if (numbC > numbA && numbC > numbB){
//     console.log("El número mayor es: " + numbC);
// };


//  if (numbA < numbB < numbC){
//      console.log ("El número del centro es: " + numbB)
//  };

// if (numbB < numbC < numbA){
//      console.log ("El número del centro es: " + numbC)
//  };

// if (numbC > numbA && numbA > numbB){
//      console.log ("El número del centro es: " + numbA)
//  };



// if (numbA < numbB && numbA < numbC){
//     console.log ("El número menor es: " + numbA); 
// };

// if (numbB < numbC && numbB < numbA) {
//     console.log("El número menor es: " + numbB);
// };

// if (numbC < numbA && numbC < numbB){
//     console.log("El número menor es: " + numbC);
// };



// if (uno === dos)
//     return `los números son iguales`;
// else (

// )

// console.log ("El núme   es " + uno);



