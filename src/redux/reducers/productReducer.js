let isProduct;

if(localStorage.getItem("myproduct") === null) {
    isProduct = [];
}
else {
    isProduct = JSON.parse(localStorage.getItem("myproduct"));
}

let ismerchant;

if(localStorage.getItem("mymerchant") === null) {
    ismerchant = null;
}
else {
    ismerchant = localStorage.getItem("mymerchant");
}

let isProducts;

if(localStorage.getItem("products") === null) {
    isProducts = [];
}
else {
    isProducts = JSON.parse(localStorage.getItem("products"));
}

let isError;

if(localStorage.getItem("myerror") === null) {
    isError = null;
}
else {
    isError = localStorage.getItem("myerror");
}

const initProducts = {
    products: isProducts,
    product: isProduct,
    mymerchant: ismerchant,
    isLoading: false,
    quantity: 0,
    error: isError
}

const productReducer = (state=initProducts,action)=> {

    if(action.type === "fetchallproducts") {
        const {products, error} = action.payload;
        if(error) {
            return {
                ...state,
                isLoading: false,
                error: error,
            }
        }
        return {
            ...state,
            products: products,
            isLoading: false,
            error: null
        }
    }

    else if(action.type === "addproduct") {
        const {products, error} = action.payload;
        if(error) {
            return {
                ...state,
                error: error,
                isLoading: false
            }
        }
        return {
            ...state,
            products: products,
            isLoading: false,
            error: null
        }
    }

    else if(action.type === "setloading") {
        // console.log("setloading",state.isLoading, new Date().getSeconds());
        return {
            ...state,
            isLoading: true
        }
    }

    else if(action.type === "get-product") {
        const {myproduct, mymerchant, quantity, error} = action.payload;
        if(error) {
            return {
                ...state,
                error: error,
                isLoading: false,
            }
        }
        // window.location.reload(false);
        // console.log("getproduct",state.isLoading, new Date().getSeconds());
        return {
            ...state,
            isLoading: false,
            product: myproduct,
            mymerchant: mymerchant,
            quantity: quantity,
            error: null
        }
    }

    else if(action.type === "reset-product") {
        return {
            ...state,
            product: [],
            mymerchant: null,
            isLoading: false,
            error: null
        }
    }

    else if (action.type === "add-review") {
        const { myproduct, error } = action.payload;
        if (error) {
            return {
                ...state,
                error: error,
                isLoading: false
            }
        }
        return {
            ...state,
            product: myproduct,
            isLoading: false,
            error: null
        }
    }

    else if (action.type === "edit-review") {
        const { myproduct, error } = action.payload;
        if (error) {
            return {
                ...state,
                error: error,
                isLoading: false
            }
        }
        return {
            ...state,
            product: myproduct,
            isLoading: false,
            error: null
        }
    }

    else if(action.type === "reset-error") {
        return {
            ...state,
            error: null,
            isLoading: false
        }
    }

    else {
        return state;
    }

}

export default productReducer;