function addThree(num:number){
    return num + 3;
}

addThree(5)
// addThree("4") // error 

function signUp(name:string, email:string, password :string, sign:boolean){

}

let logInUser = (email:string, password:string, log:boolean = false) => {}

function addTwo(num:number){
    return "Hello";
}

let add = addTwo(5);

function addFour(num:number):number{
    return num + 3;
}

addFour(5)

function getValue(myVal:number){
    if(myVal == 0){
        return false;
    }else{
        return "200 OK";
    }
}

const heros = ["ajlal", "mohd", "ali"];

heros.map((hero: string):string =>{
    // return 1;
    return `hero is ${hero}`
})

// never

function throwError(message:string):never{
    throw new Error(message);
}

// void

function sayHello():void{
    console.log("Hello");
} 
export {}