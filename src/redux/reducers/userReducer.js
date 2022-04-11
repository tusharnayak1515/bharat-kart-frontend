let isProfile;

if (localStorage.getItem("bharatkart-user-profile") === null) {
    isProfile = [];
}
else {
    isProfile = JSON.parse(localStorage.getItem("bharatkart-user-profile"));
}

let isCart;

if (localStorage.getItem("bharatkart-user-cart") === null) {
    isCart = [];
}
else {
    isCart = JSON.parse(localStorage.getItem("bharatkart-user-cart"));
}

let isUser;

if (localStorage.getItem("bharatkart-user") === null) {
    isUser = null;
}
else {
    isUser = localStorage.getItem("bharatkart-user");
}

let isError;

if (localStorage.getItem("myerror") === null) {
    isError = null;
}
else {
    isError = localStorage.getItem("myerror");
}

const initUser = {
    user: isUser,
    profile: isProfile,
    cart: isCart,
    isLoading: false,
    error: isError
}

const userReducer = (state = initUser, action) => {

    if (action.type === 'user-register') {
        const { user, profile, error } = action.payload;
        if (error) {
            return {
                ...state,
                error: error
            }
        }
        // window.location.reload(false);
        return {
            ...state,
            user: user,
            profile: profile,
            error: null
        }
    }

    else if (action.type === "user-login") {
        const { user, profile, cart, error } = action.payload;
        if (error) {
            return {
                ...state,
                error: error
            }
        }
        // window.location.reload(false);
        return {
            ...state,
            user: user,
            profile: profile,
            cart: cart,
            error: null
        }
    }

    else if (action.type === "user-profile") {
        const { profile, cart, error } = action.payload;
        if (error) {
            return {
                ...state,
                error: error
            }
        }
        return {
            ...state,
            profile: profile,
            cart: cart,
            // isLoading: false,
            error: null
        }
    }

    else if (action.type === "edit-user") {
        const { profile, error } = action.payload;
        if (error) {
            return {
                ...state,
                error: error
            }
        }
        return {
            ...state,
            profile: profile,
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

    else if (action.type === "add-to-cart") {
        const { profile, cart, error } = action.payload;
        if (error) {
            return {
                ...state,
                error: error
            }
        }
        return {
            ...state,
            profile: profile,
            cart: cart,
            isLoading: false,
            error: null
        }
    }

    else if (action.type === "remove-from-cart") {
        const { profile, cart, error } = action.payload;
        if (error) {
            return {
                ...state,
                error: error
            }
        }
        return {
            ...state,
            profile: profile,
            cart: cart,
            isLoading: false,
            error: null
        }
    }

    else if (action.type === "buyproduct") {
        const { profile, cart, error } = action.payload;
        if (error) {
            return {
                ...state,
                error: error
            }
        }
        return {
            ...state,
            profile: profile,
            cart: cart,
            isLoading: false,
            error: null
        }
    }

    else if (action.type === "add-review") {
        const { profile, error } = action.payload;
        if (error) {
            return {
                ...state,
                error: error
            }
        }
        return {
            ...state,
            profile: profile,
            isLoading: false,
            error: null
        }
    }

    else if (action.type === "user-logout") {
        localStorage.removeItem("bharatkart-user");
        localStorage.removeItem("bharatkart-user-profile");
        localStorage.removeItem("bharatkart-user-cart");
        localStorage.removeItem("myerror");
        return {
            ...state,
            user: null,
            profile: [],
            cart: [],
            error: null
        }
    }

    else {
        return state;
    }

}

export default userReducer;