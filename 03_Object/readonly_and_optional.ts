type User = {
    readonly _id:string,  // ID of the user
    name: string,
    email: string,
    isActive: boolean, 
    creditcard?: number    // optional property
}

// function createUser(u:User){

// }

let myUser:  User = {
    _id: "123",
    name: "Ajlal",
    email: "ajlal@gmail.com",
    isActive: true
}

myUser.isActive = false;
// myUser._id = "123";          Cannot assign to '_id' because it is a read-only property.

type cardNumber = {
    cardNumber: number
}

type carddate = {
    expiryDate: string
}

type cardDetail = cardNumber & carddate & {
    cvv: number
}


export {}