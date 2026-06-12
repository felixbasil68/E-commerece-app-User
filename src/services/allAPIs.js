import commonAPI from "./commonAPI"
import { serverURL } from "./ServerURL"



// list product

export const ListProductListAPI = async () => {
    return await commonAPI("GET", `${serverURL}/api/product/list`, "")
}

// register
export const userRegisterAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/api/user/register`, reqBody)
}

// login
export const userLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/api/user/login`, reqBody)
}
// add to cart
export const addToCartAPI = async (reqBody,reqHeader) => {
    return await commonAPI("POST", `${serverURL}/api/cart/add`, reqBody,reqHeader)
}

// Update Quantity
export const UpdateQuantityAPI = async (reqBody,reqHeader) => {
    return await commonAPI("POST", `${serverURL}/api/cart/update`, reqBody,reqHeader)
}

// get updated cart
export const getUserCartAPI = async (reqHeader) => {
    return await commonAPI("POST", `${serverURL}/api/cart/get`, {},reqHeader)
}


//place order details
export const orderPlaceAPI = async (reqBody,reqHeader) => {
    return await commonAPI("POST", `${serverURL}/api/order/place`, reqBody,reqHeader)
}


// get all order for user
export const getAllOrdersAPI = async (reqHeader) => {
    return await commonAPI("POST", `${serverURL}/api/order/userorders`, {},reqHeader)
}

// stripe
export const stripeOrderAPI = async (reqBody,reqHeader) => {
    return await commonAPI("POST", `${serverURL}/api/order/stripe`, reqBody,reqHeader)
}

// // stripe Varify
// export const stripeVerifyAPI = async (reqBody,reqHeader) => {
//     return await commonAPI("POST", `${serverURL}/api/order/verifyStripe`, reqBody,reqHeader)
// }


