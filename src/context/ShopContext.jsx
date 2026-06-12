import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addToCartAPI, getUserCartAPI, ListProductListAPI, UpdateQuantityAPI } from "../services/allAPIs";


export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    // adding to cart
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Not Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);

        if (token) {
            try {
                const reqBody = { itemId, size };

                const reqHeader = {
                    token: token

                }
                const response = await addToCartAPI(reqBody, reqHeader);

                if (!response.data.success) {
                    toast.error("Failed to add to cart");
                }

            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }



    // cart count
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }
//  Quanty uupdate to bakend
    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);

        if (token) {
            try {
                const reqBody = { itemId, size, quantity };

                const reqHeader = {
                    token: token

                };
                const response = await UpdateQuantityAPI(reqBody, reqHeader);

            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }


    }


    // caart total
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount;
    }
// List product
    const getProductsData = async () => {
        try {

            const response = await ListProductListAPI()
            console.log(response.data)

            if (response.data.success) {
                setProducts(response.data.produts)
            } else {
                alert(`something Went Wrong`)
            }

        } catch (error) {
            console.log(error)
            alert(error.message)
        }



    }
// user cart displaying 
    const getUserCart = async () => {
        if (token) {
            try {
                const reqHeader = {
                    token: token

                };

                const response = await getUserCartAPI(reqHeader);

                if (response.data.success) {
                    setCartItems(response.data.cartData);
                } else {
                    toast.error("Failed to load cart");
                }

            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };




    useEffect(() => {
        getProductsData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
        }
    }, [])

    
    useEffect(() => {
        if (token) {
            getUserCart()
        }
    }, [token])





    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, setCartItems, cartItems, addToCart, getCartCount, updateQuantity,
        getCartAmount, navigate, token, setToken
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;