const User = {
    name: "Ajlal",
    email: "ajlal00786@gmail.com",
    age: 21,
    isLogin: false
}

// function createUser({name:string, age:number, isLogin:boolean}){}
// createUser(User);

function createCourse():{name:string, price:number}{
    return {name: "TypeScript", price: 6969}
}

// type aliases

type MyString = string;

type User = {
    name: string,
    email: string,
    age: number,
    isLogin: boolean
}

function createUser(user:User):User{
return {name:user.name, email:user.email, age:user.age, isLogin:user.isLogin}
}

createUser({
    name: "Ajlal",
    email: "ajlal00786@gmail.com",
    age: 21,
    isLogin: false
})

export {}