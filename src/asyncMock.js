import { isDisabled } from "@testing-library/user-event/dist/utils";

const products = [
    {id:"1",
    name:"Jhonny walker red label",
    price:1000,
    category:"whiskey",
    stock:25,
    descrption:"Whiskey añejado por 9 años"
},
{ id:"2",
name:"Jhonny walker black label",
price:1000,
category:"whiskey",
stock:25,
descrption:"Whiskey añejado por 12 años"
},

{ id:"3",
name:"Jack daniels n°7",
price:1000,
category:"whiskey",
stock:25,
descrption:"Whiskey añejado por al menos 4 años"
}

]

export const getProducts =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        })
    }, 500)
}