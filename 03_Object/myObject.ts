const User = {
    name: "Ajlal",
    email: "ajlal00786@gmail.com",
    age: 21,
    isLogin: false
}

function createUser({name:string, age:number, isLogin:boolean}){}
createUser(User);

function createCourse():{name:string, price:number}{
    return {name: "TypeScript", price: 6969}
}

export {}