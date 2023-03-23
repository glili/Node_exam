// var first : number = 123;
// console.log(first);

// let fruits : string[] = ['Apple', 'Orange', 'Banana']; //or let fruits : Array<string> = ['Apple', 'Orange', 'Banana'];

// console.log(fruits);

// enum PrintMedia{
//     Newspaper = "NEWSPAPER",
//     Newsletter = "NEWSLETTER",
//     Magazine = "MAGAZINE",
//     Book = "BOOK"
// }

//   console.log(PrintMedia.Newspaper);
// console.log(PrintMedia['Newsletter']);

// console.log("Bonjour tout le monde");


// const compteur = document.querySelector("#compteur");
// let i =0;

// const increment = (e : Event) =>{
//     i++;
//     compteur.querySelector("span").innerText = i.toString();
// }

// compteur.addEventListener('click', increment);


//Ex1

// namespace Exercice1{
//     function addition(x:number, y: number){
//         return x+y;
//     }

//     function sustraction(x:number, y: number){
//         return x-y;
//     }

//     function multiplication(x:number, y: number){
//         return x*y;
//     }


//     function division(x:number, y: number){
//         return x/y;
//     }

//     console.log(addition(5, 8));
//     console.log(sustraction(8,5));
//     console.log(multiplication(5, 8));
//     console.log(division(40,8));
// }

//Ex2

// function addition(x:number, y: number){
//             return x+y;
//         }
    
//         function sustraction(x:number, y: number){
//             return x-y;
//         }
    
//         function multiplication(x:number, y: number){
//             return x*y;
//         }
    
    
//         function division(x:number, y: number){
//             return x/y;
//         }
    

// Ex3

var numbers : number[] = new Array(1,2,3,4,5,6);
var numbersEven : number[];

function getEven(arr : number[], arr2 : number[]){
    for(var i=0; i<arr.length; i++){
        if(numbers[i]%2==0){
            numbersEven.push(numbers[i]);
        }
    }
    console.log(numbersEven);
}

getEven(numbers, numbersEven);


// Ex4

// var years : number[] = new Array(1984, 2005, 2010, 2020);

// function get