import { createContext, useEffect, useState } from "react";

// import { food_list } from "../assets/assets";
import axios from "axios"

export const StoreContext = createContext(null)

const storeContextProvider = (props) => {


    const url = "http://localhost:4000"

    const [cartItems, setCartItems] = useState({})
    const [token, setToken] = useState("")
    const [food_list, setFoodList] = useState([])
    const [username, setUsername] = useState("")

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list")
        setFoodList(response.data.data)
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                setUsername(localStorage.getItem("username"))
            }
        }
        loadData()

    }, [])

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getCartTotalAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {

            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount
    }




    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getCartTotalAmount,
        url,
        token,
        setToken,
        username,
        setUsername
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default storeContextProvider